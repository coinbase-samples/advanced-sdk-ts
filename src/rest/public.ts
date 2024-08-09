import { API_PREFIX } from '../constants';
import { RESTBase } from './rest-base';
import {
  GetPublicMarketTradesOptionalQueryParams,
  GetPublicMarketTradesRequiredPathParams,
  GetPublicMarketTradesRequiredQueryParams,
  GetPublicProductBookOptionalQueryParams,
  GetPublicProductBookRequiredQueryParams,
  GetPublicProductCandlesOptionalQueryParams,
  GetPublicProductCandlesRequiredPathParams,
  GetPublicProductCandlesRequiredQueryParams,
  GetPublicProductRequiredPathParams,
  ListPublicProductsOptionalQueryParams,
} from './types/request-types';

export function getServerTime(this: RESTBase) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/time`,
    isPublic: true,
  });
}

export function getPublicProductBook(
  this: RESTBase,
  requiredQuery: GetPublicProductBookRequiredQueryParams,
  optionalQuery?: GetPublicProductBookOptionalQueryParams
) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/market/product_book`,
    queryParams: { ...requiredQuery, ...optionalQuery },
    isPublic: true,
  });
}

export function listPublicProducts(
  this: RESTBase,
  optionalQuery?: ListPublicProductsOptionalQueryParams
) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/market/products`,
    queryParams: optionalQuery,
    isPublic: true,
  });
}

export function getPublicProduct(
  this: RESTBase,
  requiredPath: GetPublicProductRequiredPathParams
) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/market/products/${requiredPath.product_id}`,
    isPublic: true,
  });
}

export function getPublicProductCandles(
  this: RESTBase,
  requiredPath: GetPublicProductCandlesRequiredPathParams,
  requiredQuery: GetPublicProductCandlesRequiredQueryParams,
  optionalQuery?: GetPublicProductCandlesOptionalQueryParams
) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/market/products/${requiredPath.product_id}/candles`,
    queryParams: { ...requiredQuery, ...optionalQuery },
    isPublic: true,
  });
}

export function getPublicMarketTrades(
  this: RESTBase,
  requiredPath: GetPublicMarketTradesRequiredPathParams,
  requiredQuery: GetPublicMarketTradesRequiredQueryParams,
  optionalQuery?: GetPublicMarketTradesOptionalQueryParams
) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/products/${requiredPath.product_id}/ticker`,
    queryParams: { ...requiredQuery, ...optionalQuery },
    isPublic: true,
  });
}
