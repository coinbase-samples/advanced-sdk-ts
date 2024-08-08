import { API_PREFIX } from '../constants';
import { RESTBase } from './rest-base';
import {
  CancelOrdersRequiredBodyParams,
  ClosePositionOptionalBodyParams,
  ClosePositionRequiredBodyParams,
  EditOrderOptionalBodyParams,
  EditOrderPreviewOptionalBodyParams,
  EditOrderPreviewRequiredBodyParams,
  EditOrderRequiredBodyParams,
  GetOrderRequiredPathParams,
  ListFillsOptionalQueryParams,
  ListOrdersOptionalQueryParams,
} from './types';

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

export function cancelOrders(
  this: RESTBase,
  requiredBody: CancelOrdersRequiredBodyParams
) {
  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/orders/batch_cancel`,
    bodyParams: requiredBody,
    isPublic: false,
  });
}

export function editOrder(
  this: RESTBase,
  requiredBody: EditOrderRequiredBodyParams,
  optionalBody?: EditOrderOptionalBodyParams
) {
  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/orders/edit`,
    bodyParams: { ...requiredBody, ...optionalBody },
    isPublic: false,
  });
}

export function editOrderPreview(
  this: RESTBase,
  requiredBody: EditOrderPreviewRequiredBodyParams,
  optionalBody?: EditOrderPreviewOptionalBodyParams
) {
  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/orders/edit_preview`,
    bodyParams: { ...requiredBody, ...optionalBody },
    isPublic: false,
  });
}

export function listOrders(
  this: RESTBase,
  optionalQuery?: ListOrdersOptionalQueryParams
) {
  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/orders/historical/batch`,
    queryParams: optionalQuery,
    isPublic: false,
  });
}

export function listFills(
  this: RESTBase,
  optionalQuery: ListFillsOptionalQueryParams
) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/orders/historical/fills`,
    queryParams: optionalQuery,
    isPublic: false,
  });
}

export function getOrder(
  this: RESTBase,
  requiredPath: GetOrderRequiredPathParams
) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/orders/historical/${requiredPath.order_id}`,
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
  requiredBody: ClosePositionRequiredBodyParams,
  optionalBody?: ClosePositionOptionalBodyParams
) {
  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/orders/close_position`,
    queryParams: undefined,
    bodyParams: { ...requiredBody, ...optionalBody },
    isPublic: false,
  });
}
