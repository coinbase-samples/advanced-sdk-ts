import {API_PREFIX} from "../constants";
import {request} from "./rest-base";

// =============== ACCOUNTS endpoints ===============
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

// =============== CONVERT endpoints ===============
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

// =============== FEES endpoints ===============
export function getTransactionSummary(product_type?: string, contract_expiry_type?: string,
                                      product_venue?: string){
    const endpointPath = `${API_PREFIX}/transaction_summary`
    let queryParams = {
        product_type: product_type,
        contract_expiry_type: contract_expiry_type,
        product_venue: product_venue
    }

    return request("GET", endpointPath, queryParams, undefined)
}

// =============== FUTURES endpoints ===============
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

// =============== ORDERS endpoints ===============
export function createOrder(client_order_id: string, product_id: string, side: string,
                            order_configuration: object, self_trade_prevention_id?: string,
                            leverage?: string, margin_type?: string, retail_portfolio_id?: string){
    const endpoint = `${API_PREFIX}/orders`
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

    return request("POST", endpoint, undefined, bodyParams)
}

export function cancelOrders(order_ids: string[]){
    const endpoint = `${API_PREFIX}/orders/batch_cancel`
    let bodyParams = {
        order_ids: order_ids
    }

    return request("POST", endpoint, undefined, bodyParams)
}

export function editOrder(order_id: string, price?: string, size?: string){
    const endpoint = `${API_PREFIX}/orders/edit`
    let bodyParams = {
        order_id: order_id,
        price: price,
        size: size
    }

    return request("POST", endpoint, undefined, bodyParams)
}

export function editOrderPreview(order_id: string, price?: string, size?: string){
    const endpoint = `${API_PREFIX}/orders/edit_preview`
    let bodyParams = {
        order_id: order_id,
        price: price,
        size: size
    }

    return request("POST", endpoint, undefined, bodyParams)
}

export function listOrders(order_ids?: string[], product_ids?: string[], order_status?: string[], limit?: number,
                           start_date?: string, end_date?: string, order_type?: string,
                           order_side?: string, cursor?: string, product_type?: string,
                           order_placement_source?: string, contract_expiry_type?: string,
                           asset_filters?: string[], retail_portfolio_id?: string, time_in_forces?: string,
                           sort_by?: string){
    const endpointPath = `${API_PREFIX}/orders/historical/batch`
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

    return request("GET", endpointPath, queryParams, undefined)
}

export function listFills(order_ids?: string[], trade_ids?: string[] ,product_ids?: string[], start_sequence_timestamp?: string,
                          end_sequence_timestamp?: string, retail_portfolio_id?: string,
                          limit?: number, cursor?: string, sort_by?: string){
    const endpointPath = `${API_PREFIX}/orders/historical/fills`
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

    return request("GET", endpointPath, queryParams, undefined)
}

export function getOrder(order_id: string){
    const endpointPath = `${API_PREFIX}/orders/historical/${order_id}`

    return request("GET", endpointPath, undefined, undefined)
}

export function previewOrder(product_id: string, side: string, commission_rate: object,
                             order_configuration: object, is_max?: boolean, tradable_balance?: string,
                             skip_fcm_risk_check?: boolean, leverage?: string, margin_type?: string,
                             retail_portfolio_id?: string){
    const endpoint = `${API_PREFIX}/`
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

    return request("POST", endpoint, undefined, bodyParams)
}

// =============== PAYMENTS endpoints ===============
export function listPaymentMethods(){
    const endpoint = `${API_PREFIX}/payment_methods`

    return request("GET", endpoint, undefined, undefined)
}

export function getPaymentMethod(payment_method_id: string){
    const endpoint = `${API_PREFIX}/payment_methods/${payment_method_id}`

    return request("GET", endpoint, undefined, undefined)
}

// =============== PERPETUALS endpoints ===============
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

// =============== PORTFOLIOS endpoints ===============
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

// =============== PRODUCTS endpoints ===============
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

// =============== PUBLIC endpoints ===============
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

