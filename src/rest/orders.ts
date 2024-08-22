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

export function createOrder(this: RESTBase, bodyParams: CreateOrderRequest) {
  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/orders`,
    bodyParams: bodyParams,
    isPublic: false,
  });
}

export function cancelOrders(this: RESTBase, bodyParams: CancelOrdersRequest) {
  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/orders/batch_cancel`,
    bodyParams: bodyParams,
    isPublic: false,
  });
}

export function editOrder(this: RESTBase, bodyParams: EditOrderRequest) {
  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/orders/edit`,
    bodyParams: bodyParams,
    isPublic: false,
  });
}

export function editOrderPreview(
  this: RESTBase,
  bodyParams: EditOrderPreviewRequest
) {
  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/orders/edit_preview`,
    bodyParams: bodyParams,
    isPublic: false,
  });
}

export function listOrders(this: RESTBase, queryParams: ListOrdersRequest) {
  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/orders/historical/batch`,
    queryParams: queryParams,
    isPublic: false,
  });
}

export function listFills(this: RESTBase, queryParams: ListFillsRequest) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/orders/historical/fills`,
    queryParams: queryParams,
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

export function previewOrder(this: RESTBase, bodyParams: PreviewOrderRequest) {
  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/orders/preview`,
    bodyParams: bodyParams,
    isPublic: false,
  });
}

export function closePosition(
  this: RESTBase,
  bodyParams: ClosePositionRequest
) {
  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/orders/close_position`,
    queryParams: undefined,
    bodyParams: bodyParams,
    isPublic: false,
  });
}
