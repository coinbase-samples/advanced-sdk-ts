import {API_PREFIX} from "../constants";
import {request} from "./rest-base";

export function getServerTime(){
    const endpoint = `${API_PREFIX}/time`

    return request("GET", endpoint, undefined, undefined, true)
}

export function getPublicProductBook(product_id: string, limit?: number,
                                     aggregation_price_increment?: number){
    const endpoint = `${API_PREFIX}/market/product_book`
    let queryParams = {
        product_id: product_id,
        limit: limit,
        aggregation_price_increment: aggregation_price_increment
    }

    return request("GET", endpoint, queryParams, undefined, true)
}

export function listPublicProducts(limit?: number, offset?: number, product_type?: string,
                             product_ids?: string[], contract_expiry_type?: string,
                             expiring_contract_status?: string, get_all_products?: boolean){
    const endpoint = `${API_PREFIX}/market/products`
    let queryParams = {
        limit: limit,
        offset: offset,
        product_type: product_type,
        product_ids: product_ids,
        contract_expiry_type: contract_expiry_type,
        expiring_contract_status: expiring_contract_status,
        get_all_products: get_all_products
    }

    return request("GET", endpoint, queryParams, undefined, true)
}

export function getPublicProduct(product_id: string){
    const endpoint = `${API_PREFIX}/market/products/${product_id}`

    return request("GET", endpoint, undefined, undefined, true)
}

export function getPublicProductCandles(product_id: string, start: string, end: string, granularity: string){
    const endpoint = `${API_PREFIX}/market/products/${product_id}/candles`
    let queryParams = {
        start: start,
        end: end,
        granularity: granularity
    }

    return request("GET", endpoint, queryParams, undefined, true)
}

export function getPublicMarketTrades(product_id: string, limit: number, start?: string, end?: string){
    const endpoint = `${API_PREFIX}/products/${product_id}/ticker`
    let queryParams = {
        limit: limit,
        start: start,
        end: end
    }

    return request("GET", endpoint, queryParams, undefined, true)
}