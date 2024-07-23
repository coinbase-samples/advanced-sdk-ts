import {API_PREFIX} from "../constants";
import {request} from "./rest-base";

export function listPortfolio(portfolio_type?: string){
    const endpointPath = `${API_PREFIX}/portfolios`
    let queryParams = {
        portfolio_type: portfolio_type
    }

    return request("GET", endpointPath, queryParams, undefined)
}

export function createPortfolio(name: string){
    const endpoint = `${API_PREFIX}/portfolios`
    let bodyParams = {
        name: name
    }

    return request("POST", endpoint, undefined, bodyParams)
}

export function deletePortfolio(portfolio_uuid: string){
    const endpoint = `${API_PREFIX}/portfolios/${portfolio_uuid}`

    return request("DELETE", endpoint, undefined, undefined)
}

export function editPortfolio(portfolio_uuid: string, name: string){
    const endpoint = `${API_PREFIX}/portfolios/${portfolio_uuid}`
    let bodyParams = {
        name: name
    }

    return request("PUT", endpoint, undefined, bodyParams)
}

export function movePortfolioFunds(funds: object, source_portfolio_uuid: string,
                                   target_portfolio_uuid: string){
    const endpoint = `${API_PREFIX}/portfolios/move_funds`
    let bodyParams = {
        funds: funds,
        source_portfolio_uuid: source_portfolio_uuid,
        target_portfolio_uuid: target_portfolio_uuid
    }

    return request("POST", endpoint, undefined, bodyParams)
}

export function getPortfolioBreakdown(portfolio_uuid: string, currency: string){
    const endpointPath = `${API_PREFIX}/portfolios/${portfolio_uuid}`
    let queryParams = {
        currency: currency
    }

    return request("GET", endpointPath, queryParams, undefined)
}