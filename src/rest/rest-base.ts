import { generateToken } from '../jwt-generator';
import fetch, { Headers, RequestInit } from 'node-fetch';
import { BASE_URL, USER_AGENT } from '../constants';
import { RequestOptions } from './types/request-types';
import * as http from "http";

function handle_exception(response, responseText){
  const reason = response.statusText;
  let httpErrorMsg: string | undefined;

  if(400 <= response.status && response.status <= 499){
    if(response.status == 403 && responseText.includes('"error_details":"Missing required scopes"')){
      httpErrorMsg = `${response.status} Client Error: Missing Required Scopes. Please verify your API keys include the necessary permissions.`;
    }
    else
      httpErrorMsg = `${response.status} Server Error: ${reason} ${responseText}`
  }
  else if(500 <= response.status && response.status <= 599){
    httpErrorMsg = `${response.status} Server Error: ${reason} ${responseText}`
  }

  if (httpErrorMsg) {
    const error:any = new Error(httpErrorMsg);
    error.response = response;
    throw error;
  }
}

export class RESTBase {
  private apiKey: string | undefined;
  private apiSecret: string | undefined;

  constructor(key?: string, secret?: string) {
    if (!key || !secret) {
      console.log('Could not authenticate. Only public endpoints accessible.');
    }
    this.apiKey = key;
    this.apiSecret = secret;
  }

  request(options: RequestOptions) {
    const { method, endpoint, isPublic } = options;
    let { queryParams, bodyParams } = options;

    queryParams = queryParams ? this.filterParams(queryParams) : {};

    if (bodyParams !== undefined)
      bodyParams = bodyParams ? this.filterParams(bodyParams) : {};

    return this.prepareRequest(
      method,
      endpoint,
      queryParams,
      bodyParams,
      isPublic
    );
  }

  prepareRequest(
    httpMethod: string,
    urlPath: string,
    queryParams?: Record<string, any>,
    bodyParams?: Record<string, any>,
    isPublic?: boolean
  ) {
    const headers: Headers = this.setHeaders(httpMethod, urlPath, isPublic);

    const requestOptions: RequestInit = {
      method: httpMethod,
      headers: headers,
      body: JSON.stringify(bodyParams),
    };

    const queryString = this.buildQueryString(queryParams);
    const url = `https://${BASE_URL}${urlPath}${queryString}`;

    return this.sendRequest(headers, requestOptions, url);
  }

  async sendRequest(
    headers: Headers,
    requestOptions: RequestInit,
    url: string
  ) {
    try {
      const response = await fetch(url, requestOptions);

      const responseText = await response.text();
      handle_exception(response, responseText)

      return await response.text();
    } catch (error) {
      throw error;
    }
  }

  setHeaders(httpMethod: string, urlPath: string, isPublic?: boolean) {
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('User-Agent', USER_AGENT);
    if (this.apiKey !== undefined && this.apiSecret !== undefined)
      headers.append(
        'Authorization',
        `Bearer ${generateToken(
          httpMethod,
          urlPath,
          this.apiKey,
          this.apiSecret
        )}`
      );
    else if (isPublic == undefined || isPublic == false)
      throw new Error(
        'Attempting to access authenticated endpoint with invalid API_KEY or API_SECRET.'
      );

    return headers;
  }

  filterParams(data: Record<string, any>) {
    const filteredParams: Record<string, any> = {};

    for (const key in data) {
      if (data[key] !== undefined) {
        filteredParams[key] = data[key];
      }
    }

    return filteredParams;
  }

  buildQueryString(queryParams?: Record<string, any>): string {
    if (!queryParams || Object.keys(queryParams).length === 0) {
      return '';
    }

    const queryString = Object.entries(queryParams)
      .flatMap(([key, value]) => {
        if (Array.isArray(value)) {
          return value.map(
            (item) => `${encodeURIComponent(key)}=${encodeURIComponent(item)}`
          );
        } else {
          return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
        }
      })
      .join('&');

    return `?${queryString}`;
  }
}
