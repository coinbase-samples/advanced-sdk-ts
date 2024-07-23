import {API_PREFIX} from "../constants";
import {request} from "./rest-base";

export function allocatePortfolio(portfolio_uuid: string, symbol: string,
                                  amount: string, currency: string){
    const endpoint = `${API_PREFIX}/intx/allocate`
    let bodyParams = {
        portfolio_uuid: portfolio_uuid,
        symbol: symbol,
        amount: amount,
        currency: currency
    }

    return request("POST", endpoint, undefined, bodyParams)
}

export function getPerpetualsPortfolioSummary(portfolio_uuid: string){
    const endpoint = `${API_PREFIX}/intx/portfolio/${portfolio_uuid}`

    return request("GET", endpoint, undefined, undefined)
}

export function listPerpetualsPositions(portfolio_uuid: string){
    const endpoint = `${API_PREFIX}/intx/positions/${portfolio_uuid}`

    return request("GET", endpoint, undefined, undefined)
}

export function getPerpertualsPosition(portfolio_uuid: string, symbol: string){
    const endpoint = `${API_PREFIX}/intx/positions/${portfolio_uuid}/${symbol}`

    return request("GET", endpoint, undefined, undefined)
}

export function GetPortfolioBalances(portfolio_uuid: string){
    const endpoint = `${API_PREFIX}/intx/balances/${portfolio_uuid}`

    return request("GET", endpoint, undefined, undefined)
}

export function optInOutMultiAssetCollateral(portfolio_uuid?: string,
                                             multi_asset_collateral_enabled?: boolean){
    const endpoint = `${API_PREFIX}/intx/multi_asset_collateral`
    let bodyParams = {
        portfolio_uuid: portfolio_uuid,
        multi_asset_collateral_enabled: multi_asset_collateral_enabled
    }

    return request("POST", endpoint, undefined, bodyParams)
}