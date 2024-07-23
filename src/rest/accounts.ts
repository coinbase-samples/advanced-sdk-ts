import {API_PREFIX} from "../constants";
import {request} from "./rest-base";

export function getAccount(account_uuid: string){
    const endpoint = `${API_PREFIX}/accounts/${account_uuid}`

    return request("GET", endpoint, undefined, undefined)
}

export function listAccounts(limit?: number, cursor?: string, retail_portfolio_id?: string){
    const endpoint = `${API_PREFIX}/accounts`
    let queryParams = {
        limit: limit,
        cursor: cursor,
        retail_portfolio_id: retail_portfolio_id
    }

    return request("GET", endpoint, queryParams, undefined)
}
