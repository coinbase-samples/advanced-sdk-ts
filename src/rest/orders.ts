import { API_PREFIX } from '../constants';
import { RESTBase } from './rest-base';
import {
  CancelOrdersRequest,
  ClosePositionRequest,
  CreateOrderRequest,
  EditOrderPreviewRequest,
  EditOrderRequest,
  GetOrderRequest,
  ListFillsRequest,
  ListOrdersRequest,
  PreviewOrderRequest,
} from './types/orders-types';

export function createOrder(this: RESTBase, requestParams: CreateOrderRequest) {
  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/orders`,
    bodyParams: requestParams,
    isPublic: false,
  });
}

export function cancelOrders(this: RESTBase, requestParams: CancelOrdersRequest) {
  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/orders/batch_cancel`,
    bodyParams: requestParams,
    isPublic: false,
  });
}

export function editOrder(this: RESTBase, requestParams: EditOrderRequest) {
  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/orders/edit`,
    bodyParams: requestParams,
    isPublic: false,
  });
}

export function editOrderPreview(
  this: RESTBase,
  requestParams: EditOrderPreviewRequest
) {
  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/orders/edit_preview`,
    bodyParams: requestParams,
    isPublic: false,
  });
}

export function listOrders(this: RESTBase, requestParams: ListOrdersRequest) {
  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/orders/historical/batch`,
    queryParams: requestParams,
    isPublic: false,
  });
}

export function listFills(this: RESTBase, requestParams: ListFillsRequest) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/orders/historical/fills`,
    queryParams: requestParams,
    isPublic: false,
  });
}

export function getOrder(this: RESTBase, { orderId }: GetOrderRequest) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/orders/historical/${orderId}`,
    isPublic: false,
  });
}

export function previewOrder(this: RESTBase, requestParams: PreviewOrderRequest) {
  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/orders/preview`,
    bodyParams: requestParams,
    isPublic: false,
  });
}

export function closePosition(
  this: RESTBase,
  requestParams: ClosePositionRequest
) {
  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/orders/close_position`,
    queryParams: undefined,
    bodyParams: requestParams,
    isPublic: false,
  });
}
