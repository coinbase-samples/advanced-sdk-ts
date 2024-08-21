import { API_PREFIX } from '../constants';
import { RESTBase } from './rest-base';
import {
  GetPublicMarketTradesRequest,
  GetPublicProductBookRequest,
  GetPublicProductCandlesRequest,
  GetPublicProductRequest,
  ListPublicProductsRequest,
} from './types/public-types';

export function getServerTime(this: RESTBase) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/time`,
    isPublic: true,
  });
}

export function getPublicProductBook(
  this: RESTBase,
  queryParams: GetPublicProductBookRequest
) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/market/product_book`,
    queryParams: queryParams,
    isPublic: true,
  });
}

export function listPublicProducts(
  this: RESTBase,
  queryParams: ListPublicProductsRequest
) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/market/products`,
    queryParams: queryParams,
    isPublic: true,
  });
}

export function getPublicProduct(
  this: RESTBase,
  { product_id }: GetPublicProductRequest
) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/market/products/${product_id}`,
    isPublic: true,
  });
}

export function getPublicProductCandles(
  this: RESTBase,
  { product_id, ...queryParams }: GetPublicProductCandlesRequest
) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/market/products/${product_id}/candles`,
    queryParams: queryParams,
    isPublic: true,
  });
}

export function getPublicMarketTrades(
  this: RESTBase,
  { product_id, ...queryParams }: GetPublicMarketTradesRequest
) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/products/${product_id}/ticker`,
    queryParams: queryParams,
    isPublic: true,
  });
}
