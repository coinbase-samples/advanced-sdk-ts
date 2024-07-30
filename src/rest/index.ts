import {API_PREFIX} from "../constants";
import {request} from "./rest-base";
import { RequestOptions } from './types'

// =============== ACCOUNTS endpoints ===============
export function getAccount(account_uuid: string){
    return request({
        method: "GET",
        endpoint: `${API_PREFIX}/accounts/${account_uuid}`,
        queryParams: undefined,
        bodyParams: undefined,
        isPublic: false
    });
}

export function listAccounts(limit?: number, cursor?: string, retail_portfolio_id?: string){
    let queryParams = {
        limit: limit,
        cursor: cursor,
        retail_portfolio_id: retail_portfolio_id
    }

    return request({
        method: "GET",
        endpoint: `${API_PREFIX}/accounts`,
        queryParams: queryParams,
        bodyParams: undefined,
        isPublic: false
    });
}

// =============== CONVERTS endpoints ===============
export function createConvertQuote(from_account: string, to_account: string, amount: string,
                                   trade_incentive_metadata: object){
    let bodyParams = {
        from_account: from_account,
        to_account: to_account,
        amount: amount,
        trade_incentive_metadata: trade_incentive_metadata
    }

    return request({
        method: "POST",
        endpoint: `${API_PREFIX}/convert/quote`,
        queryParams: undefined,
        bodyParams: bodyParams,
        isPublic: false
    });
}

export function commitConvertTrade(trade_id: string, from_account: string, to_account: string){
    let bodyParams = {
        from_account: from_account,
        to_account: to_account
    }

    return request({
        method: "POST",
        endpoint: `${API_PREFIX}/convert/trade/{trade_id}`,
        queryParams: undefined,
        bodyParams: bodyParams,
        isPublic: false
    });
}

export function getConvertTrade(trade_id: string, from_account: string, to_account: string){
    let queryParams = {
        from_account: from_account,
        to_account: to_account
    }

    return request({
        method: "GET",
        endpoint: `${API_PREFIX}/convert/trade/${trade_id}`,
        queryParams: queryParams,
        bodyParams: undefined,
        isPublic: false
    });
}

// =============== FEES endpoints ===============
export function getTransactionSummary(product_type?: string, contract_expiry_type?: string,
                                      product_venue?: string){
    let queryParams = {
        product_type: product_type,
        contract_expiry_type: contract_expiry_type,
        product_venue: product_venue
    }

    return request({
        method: "GET",
        endpoint: `${API_PREFIX}/transaction_summary`,
        queryParams: queryParams,
        bodyParams: undefined,
        isPublic: false
    });
}

// =============== FUTURES endpoints ===============
export function closePosition(client_order_id: string, product_id: string,
                              size?: string){
    let bodyParams = {
        client_order_id: client_order_id,
        product_id: product_id,
        size: size
    }

    return request({
        method: "POST",
        endpoint: `${API_PREFIX}/orders/close_position`,
        queryParams: undefined,
        bodyParams: bodyParams,
        isPublic: false
    });
}

export function getFuturesBalanceSummary(){
    return request({
        method: "GET",
        endpoint: `${API_PREFIX}/cfm/balance_summary`,
        queryParams: undefined,
        bodyParams: undefined,
        isPublic: false
    });
}

export function getIntradayMarginSetting(){
    return request({
        method: "GET",
        endpoint: `${API_PREFIX}/cfm/intraday/margin_setting`,
        queryParams: undefined,
        bodyParams: undefined,
        isPublic: false
    });
}

export function setIntradayMarginSetting(intraday_margin_setting?: string){
    let bodyParams = {
        intraday_margin_setting: intraday_margin_setting
    }

    return request({
        method: "POST",
        endpoint: `${API_PREFIX}/cfm/intraday/margin_setting`,
        queryParams: undefined,
        bodyParams: bodyParams,
        isPublic: false
    });
}

export function getCurrentMarginWindow(margin_profile_type?: string){
    let bodyParams = {
        margin_profile_type: margin_profile_type
    }

    return request({
        method: "GET",
        endpoint: `${API_PREFIX}/cfm/intraday/current_margin_window`,
        queryParams: undefined,
        bodyParams: bodyParams,
        isPublic: false
    });
}

export function listFuturesPositions(){
    return request({
        method: "GET",
        endpoint: `${API_PREFIX}/cfm/positions`,
        queryParams: undefined,
        bodyParams: undefined,
        isPublic: false
    });
}

export function getFuturesPosition(product_id: string){
    return request({
        method: "GET",
        endpoint: `${API_PREFIX}/cfm/positions/${product_id}`,
        queryParams: undefined,
        bodyParams: undefined,
        isPublic: false
    });
}

export function scheduleFuturesSweep(usd_amount?: string){
    let bodyParams = {
        usd_amount: usd_amount
    }

    return request({
        method: "POST",
        endpoint: `${API_PREFIX}/cfm/sweeps/schedule`,
        queryParams: undefined,
        bodyParams: bodyParams,
        isPublic: false
    });
}

export function listFuturesSweeps(){
    return request({
        method: "GET",
        endpoint: `${API_PREFIX}/cfm/sweeps`,
        queryParams: undefined,
        bodyParams: undefined,
        isPublic: false
    });
}

export function cancelPendingFuturesSweep(){
    return request({
        method: "DELETE",
        endpoint: `${API_PREFIX}/cfm/sweeps`,
        queryParams: undefined,
        bodyParams: undefined,
        isPublic: false
    });
}

// =============== ORDERS endpoints ===============
export function createOrder(client_order_id: string, product_id: string, side: string,
                            order_configuration: object, self_trade_prevention_id?: string,
                            leverage?: string, margin_type?: string, retail_portfolio_id?: string){
    let bodyParams = {
        client_order_id: client_order_id,
        product_id: product_id,
        side: side,
        order_configuration: order_configuration,
        self_trade_prevention_id: self_trade_prevention_id,
        leverage: leverage,
        margin_type: margin_type,
        retail_portfolio_id: retail_portfolio_id
    }

    return request({
        method: "POST",
        endpoint: `${API_PREFIX}/orders`,
        queryParams: undefined,
        bodyParams: bodyParams,
        isPublic: false
    });
}

export function cancelOrders(order_ids: string[]){
    let bodyParams = {
        order_ids: order_ids
    }

    return request({
        method: "POST",
        endpoint: `${API_PREFIX}/orders/batch_cancel`,
        queryParams: undefined,
        bodyParams: bodyParams,
        isPublic: false
    });
}

export function editOrder(order_id: string, price?: string, size?: string){
    let bodyParams = {
        order_id: order_id,
        price: price,
        size: size
    }

    return request({
        method: "POST",
        endpoint: `${API_PREFIX}/orders/edit`,
        queryParams: undefined,
        bodyParams: bodyParams,
        isPublic: false
    });
}

export function editOrderPreview(order_id: string, price?: string, size?: string){
    let bodyParams = {
        order_id: order_id,
        price: price,
        size: size
    }

    return request({
        method: "POST",
        endpoint: `${API_PREFIX}/orders/edit_preview`,
        queryParams: undefined,
        bodyParams: bodyParams,
        isPublic: false
    });
}

export function listOrders(order_ids?: string[], product_ids?: string[], order_status?: string[], limit?: number,
                           start_date?: string, end_date?: string, order_type?: string,
                           order_side?: string, cursor?: string, product_type?: string,
                           order_placement_source?: string, contract_expiry_type?: string,
                           asset_filters?: string[], retail_portfolio_id?: string, time_in_forces?: string,
                           sort_by?: string){
    let queryParams = {
        order_ids: order_ids,
        product_ids: product_ids,
        order_status: order_status,
        limit: limit,
        start_date: start_date,
        end_date: end_date,
        order_type: order_type,
        order_side: order_side,
        cursor: cursor,
        product_type: product_type,
        order_placement_source: order_placement_source,
        contract_expiry_type: contract_expiry_type,
        asset_filters: asset_filters,
        retail_portfolio_id: retail_portfolio_id,
        time_in_forces: time_in_forces,
        sort_by: sort_by
    }

    return request({
        method: "POST",
        endpoint: `${API_PREFIX}/orders/historical/batch`,
        queryParams: queryParams,
        bodyParams: undefined,
        isPublic: false
    });
}

export function listFills(order_ids?: string[], trade_ids?: string[] ,product_ids?: string[], start_sequence_timestamp?: string,
                          end_sequence_timestamp?: string, retail_portfolio_id?: string,
                          limit?: number, cursor?: string, sort_by?: string){
    let queryParams = {
        order_ids: order_ids,
        trade_ids: trade_ids,
        product_ids: product_ids,
        start_sequence_timestamp: start_sequence_timestamp,
        end_sequence_timestamp: end_sequence_timestamp,
        retail_portfolio_id: retail_portfolio_id,
        limit: limit,
        cursor: cursor,
        sort_by: sort_by
    }

    return request({
        method: "GET",
        endpoint: `${API_PREFIX}/orders/historical/fills`,
        queryParams: queryParams,
        bodyParams: undefined,
        isPublic: false
    });
}

export function getOrder(order_id: string){
    return request({
        method: "GET",
        endpoint: `${API_PREFIX}/orders/historical/${order_id}`,
        queryParams: undefined,
        bodyParams: undefined,
        isPublic: false
    });
}

export function previewOrder(product_id: string, side: string, commission_rate: object,
                             order_configuration: object, is_max?: boolean, tradable_balance?: string,
                             skip_fcm_risk_check?: boolean, leverage?: string, margin_type?: string,
                             retail_portfolio_id?: string){
    let bodyParams = {
        product_id: product_id,
        side: side,
        commission_rate: commission_rate,
        order_configuration: order_configuration,
        is_max: is_max,
        tradable_balance: tradable_balance,
        skip_fcm_risk_check: skip_fcm_risk_check,
        leverage: leverage,
        margin_type: margin_type,
        retail_portfolio_id: retail_portfolio_id
    }

    return request({
        method: "POST",
        endpoint: `${API_PREFIX}/orders/preview`,
        queryParams: undefined,
        bodyParams: bodyParams,
        isPublic: false
    });
}

// =============== PAYMENTS endpoints ===============
export function listPaymentMethods(){
    return request({
        method: "GET",
        endpoint: `${API_PREFIX}/payment_methods`,
        queryParams: undefined,
        bodyParams: undefined,
        isPublic: false
    });
}

export function getPaymentMethod(payment_method_id: string){
    return request({
        method: "GET",
        endpoint: `${API_PREFIX}/payment_methods/${payment_method_id}`,
        queryParams: undefined,
        bodyParams: undefined,
        isPublic: false
    });
}

// =============== PERPETUALS endpoints ===============
export function allocatePortfolio(portfolio_uuid: string, symbol: string,
                                  amount: string, currency: string){
    let bodyParams = {
        portfolio_uuid: portfolio_uuid,
        symbol: symbol,
        amount: amount,
        currency: currency
    }

    return request({
        method: "POST",
        endpoint: `${API_PREFIX}/intx/allocate`,
        queryParams: undefined,
        bodyParams: bodyParams,
        isPublic: false
    });
}

export function getPerpetualsPortfolioSummary(portfolio_uuid: string){
    return request({
        method: "GET",
        endpoint: `${API_PREFIX}/intx/portfolio/${portfolio_uuid}`,
        queryParams: undefined,
        bodyParams: undefined,
        isPublic: false
    });
}

export function listPerpetualsPositions(portfolio_uuid: string){
    return request({
        method: "GET",
        endpoint: `${API_PREFIX}/intx/positions/${portfolio_uuid}`,
        queryParams: undefined,
        bodyParams: undefined,
        isPublic: false
    });
}

export function getPerpertualsPosition(portfolio_uuid: string, symbol: string){
    return request({
        method: "GET",
        endpoint: `${API_PREFIX}/intx/positions/${portfolio_uuid}/${symbol}`,
        queryParams: undefined,
        bodyParams: undefined,
        isPublic: false
    });
}

export function GetPortfolioBalances(portfolio_uuid: string){
    return request({
        method: "GET",
        endpoint: `${API_PREFIX}/intx/balances/${portfolio_uuid}`,
        queryParams: undefined,
        bodyParams: undefined,
        isPublic: false
    });
}

export function optInOutMultiAssetCollateral(portfolio_uuid?: string,
                                             multi_asset_collateral_enabled?: boolean){
    let bodyParams = {
        portfolio_uuid: portfolio_uuid,
        multi_asset_collateral_enabled: multi_asset_collateral_enabled
    }

    return request({
        method: "POST",
        endpoint: `${API_PREFIX}/intx/multi_asset_collateral`,
        queryParams: undefined,
        bodyParams: bodyParams,
        isPublic: false
    });
}

// =============== PORTFOLIOS endpoints ===============
export function listPortfolio(portfolio_type?: string){
    let queryParams = {
        portfolio_type: portfolio_type
    }

    return request({
        method: "GET",
        endpoint: `${API_PREFIX}/portfolios`,
        queryParams: queryParams,
        bodyParams: undefined,
        isPublic: false
    });
}

export function createPortfolio(name: string){
    let bodyParams = {
        name: name
    }

    return request({
        method: "POST",
        endpoint: `${API_PREFIX}/portfolios`,
        queryParams: undefined,
        bodyParams: bodyParams,
        isPublic: false
    });
}

export function deletePortfolio(portfolio_uuid: string){
    return request({
        method: "DELETE",
        endpoint: `${API_PREFIX}/portfolios/${portfolio_uuid}`,
        queryParams: undefined,
        bodyParams: undefined,
        isPublic: false
    });
}

export function editPortfolio(portfolio_uuid: string, name: string){
    let bodyParams = {
        name: name
    }

    return request({
        method: "PUT",
        endpoint: `${API_PREFIX}/portfolios/${portfolio_uuid}`,
        queryParams: undefined,
        bodyParams: bodyParams,
        isPublic: false
    });
}

export function movePortfolioFunds(funds: object, source_portfolio_uuid: string,
                                   target_portfolio_uuid: string){
    let bodyParams = {
        funds: funds,
        source_portfolio_uuid: source_portfolio_uuid,
        target_portfolio_uuid: target_portfolio_uuid
    }

    return request({
        method: "POST",
        endpoint: `${API_PREFIX}/portfolios/move_funds`,
        queryParams: undefined,
        bodyParams: bodyParams,
        isPublic: false
    });
}

export function getPortfolioBreakdown(portfolio_uuid: string, currency: string){
    let queryParams = {
        currency: currency
    }

    return request({
        method: "GET",
        endpoint: `${API_PREFIX}/portfolios/${portfolio_uuid}`,
        queryParams: queryParams,
        bodyParams: undefined,
        isPublic: false
    });
}

// =============== PRODUCTS endpoints ===============
export function getBestBidAsk(product_ids?: string[]){
    let queryParams = {
        product_ids: product_ids
    }

    return request({
        method: "GET",
        endpoint: `${API_PREFIX}/best_bid_ask`,
        queryParams: queryParams,
        bodyParams: undefined,
        isPublic: false
    });
}

export function getProductBook(product_id: string, limit?: number,
                               aggregation_price_increment?: number){
    let queryParams = {
        product_id: product_id,
        limit: limit,
        aggregation_price_increment: aggregation_price_increment
    }

    return request({
        method: "GET",
        endpoint: `${API_PREFIX}/product_book`,
        queryParams: queryParams,
        bodyParams: undefined,
        isPublic: false
    });
}

export function listProducts(limit?: number, offset?: number, product_type?: string,
                             product_ids?: string[], contract_expiry_type?: string,
                             expiring_contract_status?: string, get_tradability_status?: boolean,
                             get_all_products?: boolean){
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

    return request({
        method: "GET",
        endpoint: `${API_PREFIX}/products`,
        queryParams: queryParams,
        bodyParams: undefined,
        isPublic: false
    });
}

export function getProduct(product_id: string, get_tradability_status?: boolean){
    let queryParams = {
        get_tradability_status: get_tradability_status
    }

    return request({
        method: "GET",
        endpoint: `${API_PREFIX}/products/${product_id}`,
        queryParams: queryParams,
        bodyParams: undefined,
        isPublic: false
    });
}

export function getProductCandles(product_id: string, start: string, end: string, granularity: string){
    let queryParams = {
        start: start,
        end: end,
        granularity: granularity
    }

    return request({
        method: "GET",
        endpoint: `${API_PREFIX}/products/${product_id}/candles`,
        queryParams: queryParams,
        bodyParams: undefined,
        isPublic: false
    });
}

export function getMarketTrades(product_id: string, limit: number, start?: string, end?: string){
    let queryParams = {
        limit: limit,
        start: start,
        end: end
    }

    return request({
        method: "GET",
        endpoint: `${API_PREFIX}/products/${product_id}/ticker`,
        queryParams: queryParams,
        bodyParams: undefined,
        isPublic: false
    });
}

// =============== PUBLIC endpoints ===============
export function getServerTime(){
    return request({
        method: "GET",
        endpoint: `${API_PREFIX}/time`,
        queryParams: undefined,
        bodyParams: undefined,
        isPublic: true
    });
}

export function getPublicProductBook(product_id: string, limit?: number,
                                     aggregation_price_increment?: number){
    let queryParams = {
        product_id: product_id,
        limit: limit,
        aggregation_price_increment: aggregation_price_increment
    }

    return request({
        method: "GET",
        endpoint: `${API_PREFIX}/market/product_book`,
        queryParams: queryParams,
        bodyParams: undefined,
        isPublic: true
    });
}

export function listPublicProducts(limit?: number, offset?: number, product_type?: string,
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

    return request({
        method: "GET",
        endpoint: `${API_PREFIX}/market/products`,
        queryParams: queryParams,
        bodyParams: undefined,
        isPublic: true
    });
}

export function getPublicProduct(product_id: string){
    return request({
        method: "GET",
        endpoint: `${API_PREFIX}/market/products/${product_id}`,
        queryParams: undefined,
        bodyParams: undefined,
        isPublic: true
    });
}

export function getPublicProductCandles(product_id: string, start: string, end: string, granularity: string){
    let queryParams = {
        start: start,
        end: end,
        granularity: granularity
    }

    return request({
        method: "GET",
        endpoint: `${API_PREFIX}/market/products/${product_id}/candles`,
        queryParams: queryParams,
        bodyParams: undefined,
        isPublic: true
    });
}

export function getPublicMarketTrades(product_id: string, limit: number, start?: string, end?: string){
    let queryParams = {
        limit: limit,
        start: start,
        end: end
    }

    return request({
        method: "GET",
        endpoint: `${API_PREFIX}/products/${product_id}/ticker`,
        queryParams: queryParams,
        bodyParams: undefined,
        isPublic: true
    });
}

