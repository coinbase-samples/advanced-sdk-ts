import {API_PREFIX} from "../constants";
import {request} from "./rest-base";

export function createConvertQuote(from_account: string, to_account: string, amount: string,
                                   trade_incentive_metadata: object){
    const endpoint = `${API_PREFIX}/convert/quote`
    let bodyParams = {
        from_account: from_account,
        to_account: to_account,
        amount: amount,
        trade_incentive_metadata: trade_incentive_metadata
    }

    return request("POST", endpoint, undefined, bodyParams)
}

export function commitConvertTrade(trade_id: string, from_account: string, to_account: string){
    const endpoint = `${API_PREFIX}/convert/trade/{trade_id}`
    let bodyParams = {
        from_account: from_account,
        to_account: to_account
    }

    return request("POST", endpoint, undefined, bodyParams)
}

export function getConvertTrade(trade_id: string, from_account: string, to_account: string){
    const endpoint = `${API_PREFIX}/convert/trade/${trade_id}`
    let queryParams = {
        from_account: from_account,
        to_account: to_account
    }

    return request("GET", endpoint, queryParams, undefined)
}