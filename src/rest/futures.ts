import {API_PREFIX} from "../constants";
import {request} from "./rest-base";

export function closePosition(client_order_id: string, product_id: string,
                              size?: string){
    const endpoint = `${API_PREFIX}/orders/close_position`
    let bodyParams = {
        client_order_id: client_order_id,
        product_id: product_id,
        size: size
    }

    return request("POST", endpoint, undefined, bodyParams)
}

export function getFuturesBalanceSummary(){
    const endpoint = `${API_PREFIX}/cfm/balance_summary`

    return request("GET", endpoint, undefined, undefined)
}

export function getIntradayMarginSetting(){
    const endpoint = `${API_PREFIX}/cfm/intraday/margin_setting`

    return request("GET", endpoint, undefined, undefined)
}

export function setIntradayMarginSetting(intraday_margin_setting?: string){
    const endpoint = `${API_PREFIX}/cfm/intraday/margin_setting`
    let bodyParams = {
        intraday_margin_setting: intraday_margin_setting
    }

    return request("POST", endpoint, undefined, bodyParams)
}

export function getCurrentMarginWindow(margin_profile_type?: string){
    const endpoint = `${API_PREFIX}/cfm/intraday/current_margin_window`
    let bodyParams = {
        margin_profile_type: margin_profile_type
    }

    return request("GET", endpoint, undefined, bodyParams)
}

export function listFuturesPositions(){
    const endpoint = `${API_PREFIX}/cfm/positions`

    return request("GET", endpoint, undefined, undefined)
}

export function getFuturesPosition(product_id: string){
    const endpoint = `${API_PREFIX}/cfm/positions/${product_id}`

    return request("GET", endpoint, undefined, undefined)
}

export function scheduleFuturesSweep(usd_amount?: string){
    const endpoint = `${API_PREFIX}/cfm/sweeps/schedule`
    let bodyParams = {
        usd_amount: usd_amount
    }

    return request("POST", endpoint, undefined, bodyParams)
}

export function listFuturesSweeps(){
    const endpoint = `${API_PREFIX}/cfm/sweeps`

    return request("GET", endpoint, undefined, undefined)
}

export function cancelPendingFuturesSweep(){
    const endpoint = `${API_PREFIX}/cfm/sweeps`

    return request("DELETE", endpoint, undefined, undefined)
}