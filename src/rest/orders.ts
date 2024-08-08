import { API_PREFIX } from '../constants';
import { RESTBase } from './rest-base';

export function createOrder(
  this: RESTBase,
  client_order_id: string,
  product_id: string,
  side: string,
  order_configuration: object,
  self_trade_prevention_id?: string,
  leverage?: string,
  margin_type?: string,
  retail_portfolio_id?: string
) {
  const bodyParams = {
    client_order_id: client_order_id,
    product_id: product_id,
    side: side,
    order_configuration: order_configuration,
    self_trade_prevention_id: self_trade_prevention_id,
    leverage: leverage,
    margin_type: margin_type,
    retail_portfolio_id: retail_portfolio_id,
  };

  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/orders`,
    bodyParams: bodyParams,
    isPublic: false,
  });
}

export function cancelOrders(this: RESTBase, order_ids: string[]) {
  const bodyParams = {
    order_ids: order_ids,
  };

  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/orders/batch_cancel`,
    bodyParams: bodyParams,
    isPublic: false,
  });
}

export function editOrder(
  this: RESTBase,
  order_id: string,
  price?: string,
  size?: string
) {
  const bodyParams = {
    order_id: order_id,
    price: price,
    size: size,
  };

  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/orders/edit`,
    bodyParams: bodyParams,
    isPublic: false,
  });
}

export function editOrderPreview(
  this: RESTBase,
  order_id: string,
  price?: string,
  size?: string
) {
  const bodyParams = {
    order_id: order_id,
    price: price,
    size: size,
  };

  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/orders/edit_preview`,
    bodyParams: bodyParams,
    isPublic: false,
  });
}

export function listOrders(
  this: RESTBase,
  order_ids?: string[],
  product_ids?: string[],
  order_status?: string[],
  limit?: number,
  start_date?: string,
  end_date?: string,
  order_type?: string,
  order_side?: string,
  cursor?: string,
  product_type?: string,
  order_placement_source?: string,
  contract_expiry_type?: string,
  asset_filters?: string[],
  retail_portfolio_id?: string,
  time_in_forces?: string,
  sort_by?: string
) {
  const queryParams = {
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
    sort_by: sort_by,
  };

  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/orders/historical/batch`,
    queryParams: queryParams,
    isPublic: false,
  });
}

export function listFills(
  this: RESTBase,
  order_ids?: string[],
  trade_ids?: string[],
  product_ids?: string[],
  start_sequence_timestamp?: string,
  end_sequence_timestamp?: string,
  retail_portfolio_id?: string,
  limit?: number,
  cursor?: string,
  sort_by?: string
) {
  const queryParams = {
    order_ids: order_ids,
    trade_ids: trade_ids,
    product_ids: product_ids,
    start_sequence_timestamp: start_sequence_timestamp,
    end_sequence_timestamp: end_sequence_timestamp,
    retail_portfolio_id: retail_portfolio_id,
    limit: limit,
    cursor: cursor,
    sort_by: sort_by,
  };

  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/orders/historical/fills`,
    queryParams: queryParams,
    isPublic: false,
  });
}

export function getOrder(this: RESTBase, order_id: string) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/orders/historical/${order_id}`,
    isPublic: false,
  });
}

export function previewOrder(
  this: RESTBase,
  product_id: string,
  side: string,
  commission_rate: object,
  order_configuration: object,
  is_max?: boolean,
  tradable_balance?: string,
  skip_fcm_risk_check?: boolean,
  leverage?: string,
  margin_type?: string,
  retail_portfolio_id?: string
) {
  const bodyParams = {
    product_id: product_id,
    side: side,
    commission_rate: commission_rate,
    order_configuration: order_configuration,
    is_max: is_max,
    tradable_balance: tradable_balance,
    skip_fcm_risk_check: skip_fcm_risk_check,
    leverage: leverage,
    margin_type: margin_type,
    retail_portfolio_id: retail_portfolio_id,
  };

  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/orders/preview`,
    bodyParams: bodyParams,
    isPublic: false,
  });
}

export function closePosition(
  this: RESTBase,
  client_order_id: string,
  product_id: string,
  size?: string
) {
  const bodyParams = {
    client_order_id: client_order_id,
    product_id: product_id,
    size: size,
  };

  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/orders/close_position`,
    queryParams: undefined,
    bodyParams: bodyParams,
    isPublic: false,
  });
}
