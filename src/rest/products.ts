import {API_PREFIX} from "../constants";
import {request} from "./rest-base";

export function getBestBidAsk(product_ids?: string[]){
    const endpoint = `${API_PREFIX}/best_bid_ask`
    let queryParams = {
        product_ids: product_ids
    }

    return request("GET", endpoint, queryParams, undefined)
}

export function getProductBook(product_id: string, limit?: number,
                               aggregation_price_increment?: number){
    const endpoint = `${API_PREFIX}/product_book`
    let queryParams = {
        product_id: product_id,
        limit: limit,
        aggregation_price_increment: aggregation_price_increment
    }

    return request("GET", endpoint, queryParams, undefined)
}

export function listProducts(limit?: number, offset?: number, product_type?: string,
                             product_ids?: string[], contract_expiry_type?: string,
                             expiring_contract_status?: string, get_tradability_status?: boolean,
                             get_all_products?: boolean){
    const endpoint = `${API_PREFIX}/products`
    let queryParams = {
        limit: limit,
        offset: offset,
        product_type: product_type,
        product_ids: product_ids,
        contract_expiry_type: contract_expiry_type,
        expiring_contract_status: expiring_contract_status,
        get_tradability_status: get_tradability_status,
        get_all_products: get_all_products
    }

    return request("GET", endpoint, queryParams, undefined)
}

export function getProduct(product_id: string, get_tradability_status?: boolean){
    const endpoint = `${API_PREFIX}/products/${product_id}`
    let queryParams = {
        get_tradability_status: get_tradability_status
    }

    return request("GET", endpoint, queryParams, undefined)
}

export function getProductCandles(product_id: string, start: string, end: string, granularity: string){
    const endpoint = `${API_PREFIX}/products/${product_id}/candles`
    let queryParams = {
        start: start,
        end: end,
        granularity: granularity
    }

    return request("GET", endpoint, queryParams, undefined)
}

export function getMarketTrades(product_id: string, limit: number, start?: string, end?: string){
    const endpoint = `${API_PREFIX}/products/${product_id}/ticker`
    let queryParams = {
        limit: limit,
        start: start,
        end: end
    }

    return request("GET", endpoint, queryParams, undefined)
}