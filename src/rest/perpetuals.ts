import {API_PREFIX} from "../constants";
import {RESTBase} from "./rest-base";

export function allocatePortfolio(this: RESTBase, portfolio_uuid: string, symbol: string,
    amount: string, currency: string){
    let bodyParams = {
        portfolio_uuid: portfolio_uuid,
        symbol: symbol,
        amount: amount,
        currency: currency
    }

    return this.request({
        method: "POST",
        endpoint: `${API_PREFIX}/intx/allocate`,
        queryParams: undefined,
        bodyParams: bodyParams,
        isPublic: false
    });
}

export function getPerpetualsPortfolioSummary(this: RESTBase, portfolio_uuid: string){
    return this.request({
        method: "GET",
        endpoint: `${API_PREFIX}/intx/portfolio/${portfolio_uuid}`,
        queryParams: undefined,
        bodyParams: undefined,
        isPublic: false
    });
}

export function listPerpetualsPositions(this: RESTBase, portfolio_uuid: string){
    return this.request({
        method: "GET",
        endpoint: `${API_PREFIX}/intx/positions/${portfolio_uuid}`,
        queryParams: undefined,
        bodyParams: undefined,
        isPublic: false
    });
}

export function getPerpertualsPosition(this: RESTBase, portfolio_uuid: string, symbol: string){
    return this.request({
        method: "GET",
        endpoint: `${API_PREFIX}/intx/positions/${portfolio_uuid}/${symbol}`,
        queryParams: undefined,
        bodyParams: undefined,
        isPublic: false
    });
}

export function getPortfolioBalances(this: RESTBase, portfolio_uuid: string){
    return this.request({
        method: "GET",
        endpoint: `${API_PREFIX}/intx/balances/${portfolio_uuid}`,
        queryParams: undefined,
        bodyParams: undefined,
        isPublic: false
    });
}

export function optInOutMultiAssetCollateral(this: RESTBase, portfolio_uuid?: string,
    multi_asset_collateral_enabled?: boolean){
    let bodyParams = {
        portfolio_uuid: portfolio_uuid,
        multi_asset_collateral_enabled: multi_asset_collateral_enabled
    }

    return this.request({
        method: "POST",
        endpoint: `${API_PREFIX}/intx/multi_asset_collateral`,
        queryParams: undefined,
        bodyParams: bodyParams,
        isPublic: false
    });
}