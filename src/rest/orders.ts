import { API_PREFIX } from '../constants';
import { RESTBase } from './rest-base';
import {
  CancelOrdersRequiredBodyParams,
  ClosePositionOptionalBodyParams,
  ClosePositionRequiredBodyParams,
  CreateOrderOptionalBodyParams,
  CreateOrderRequiredBodyParams,
  EditOrderOptionalBodyParams,
  EditOrderPreviewOptionalBodyParams,
  EditOrderPreviewRequiredBodyParams,
  EditOrderRequiredBodyParams,
  GetOrderRequiredPathParams,
  ListFillsOptionalQueryParams,
  ListOrdersOptionalQueryParams,
  PreviewOrderOptionalBodyParams,
  PreviewOrderRequiredBodyParams,
} from './request-types';

export function createOrder(
  this: RESTBase,
  requiredBody: CreateOrderRequiredBodyParams,
  optionalBody?: CreateOrderOptionalBodyParams
) {
  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/orders`,
    bodyParams: { ...requiredBody, ...optionalBody },
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
  requiredBody: PreviewOrderRequiredBodyParams,
  optionalBody?: PreviewOrderOptionalBodyParams
) {
  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/orders/preview`,
    bodyParams: { ...requiredBody, ...optionalBody },
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
