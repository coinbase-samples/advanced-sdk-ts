import {generateToken} from "../jwt-generator";
import fetch, {Headers, RequestInit} from "node-fetch";
import { BASE_URL } from "../constants";
import * as http from "http";

export function request(httpMethod: string, urlPath: string, queryParams?: Record<string, any>, bodyParams?: Record<string, any>){
    queryParams = queryParams ? filterParams(queryParams) : {};

    if(bodyParams !== undefined)
        bodyParams = bodyParams ? filterParams(bodyParams) : {};

    return prepareRequest(httpMethod, urlPath, queryParams, bodyParams)
}

async function prepareRequest(httpMethod: string, urlPath: string, queryParams?: Record<string, any>, bodyParams?: Record<string, any>){
    const headers: Headers = setHeaders(httpMethod, urlPath);

    const requestOptions: RequestInit | undefined = {
        method: httpMethod,
        headers: headers,
        body: JSON.stringify(bodyParams),
        redirect: "follow",
    };

    const queryString = buildQueryString(queryParams)
    const url = `https://${BASE_URL}${urlPath}${queryString}`

    return sendRequest(headers, requestOptions, url)
}

async function sendRequest(headers: Headers, requestOptions: RequestInit, url: string){
    try{
        const response= await fetch(url, requestOptions)

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.text();
    }catch (error){
        console.log("Error fetching accounts.", error);
        throw error;
    }
}

function setHeaders(httpMethod: string, urlPath: string){
    const token = generateToken(httpMethod, urlPath)

    const headers: Headers= new Headers();
    headers.append("Authorization", `Bearer ${token}`)
    headers.append("Content-Type", "application/json");

    return headers;
}

function filterParams(data: Record<string, any>) {
    const filteredParams: Record<string, any> = {};

    for (const key in data) {
        if (data[key] !== undefined) {
            filteredParams[key] = data[key];
        }
    }

    return filteredParams;
}

function buildQueryString(queryParams?: Record<string, any>): string{
    if (!queryParams || Object.keys(queryParams).length === 0) {
        return '';
    }

    const queryString = Object.entries(queryParams)
        .flatMap(([key, value]) => {
            if (Array.isArray(value)) {
                return value.map(item => `${encodeURIComponent(key)}=${encodeURIComponent(item)}`);
            } else {
                return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
            }
        })
        .join('&');

    return `?${queryString}`;
}
