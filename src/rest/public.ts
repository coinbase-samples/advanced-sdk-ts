import {API_PREFIX} from "../constants";
import {RESTBase} from "./rest-base";

export function getServerTime(this: RESTBase){
    return this.request({
        method: "GET",
        endpoint: `${API_PREFIX}/time`,
        queryParams: undefined,
        bodyParams: undefined,
        isPublic: true
    });
}

export function getPublicProductBook(this: RESTBase, product_id: string, limit?: number,
    aggregation_price_increment?: number){
    let queryParams = {
        product_id: product_id,
        limit: limit,
        aggregation_price_increment: aggregation_price_increment
    }

    return this.request({
        method: "GET",
        endpoint: `${API_PREFIX}/market/product_book`,
        queryParams: queryParams,
        bodyParams: undefined,
        isPublic: true
    });
}

export function listPublicProducts(this: RESTBase, limit?: number, offset?: number, product_type?: string,
    product_ids?: string[], contract_expiry_type?: string,
    expiring_contract_status?: string, get_all_products?: boolean){
    let queryParams = {
        limit: limit,
        offset: offset,
        product_type: product_type,
        product_ids: product_ids,
        contract_expiry_type: contract_expiry_type,
        expiring_contract_status: expiring_contract_status,
        get_all_products: get_all_products
    }

    return this.request({
        method: "GET",
        endpoint: `${API_PREFIX}/market/products`,
        queryParams: queryParams,
        bodyParams: undefined,
        isPublic: true
    });
}

export function getPublicProduct(this: RESTBase, product_id: string){
    return this.request({
        method: "GET",
        endpoint: `${API_PREFIX}/market/products/${product_id}`,
        queryParams: undefined,
        bodyParams: undefined,
        isPublic: true
    });
}

export function getPublicProductCandles(this: RESTBase, product_id: string, start: string, end: string, granularity: string){
    let queryParams = {
        start: start,
        end: end,
        granularity: granularity
    }

    return this.request({
        method: "GET",
        endpoint: `${API_PREFIX}/market/products/${product_id}/candles`,
        queryParams: queryParams,
        bodyParams: undefined,
        isPublic: true
    });
}

export function getPublicMarketTrades(this: RESTBase, product_id: string, limit: number, start?: string, end?: string){
    let queryParams = {
        limit: limit,
        start: start,
        end: end
    }

    return this.request({
        method: "GET",
        endpoint: `${API_PREFIX}/products/${product_id}/ticker`,
        queryParams: queryParams,
        bodyParams: undefined,
        isPublic: true
    });
}