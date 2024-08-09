import { API_PREFIX } from '../constants';
import { RESTBase } from './rest-base';
import {
  GetBestBidAskOptionalQueryParams,
  GetMarketTradesOptionalQueryParams,
  GetMarketTradesRequiredPathParams,
  GetMarketTradesRequiredQueryParams,
  GetProductBookOptionalQueryParams,
  GetProductBookRequiredQueryParams,
  GetProductCandlesOptionalQueryParams,
  GetProductCandlesRequiredPathParams,
  GetProductCandlesRequiredQueryParams,
  GetProductOptionalQueryParams,
  GetProductRequiredPathParams,
  ListProductsOptionalQueryParams,
} from './types/request-types';

export function getBestBidAsk(
  this: RESTBase,
  optionalQuery?: GetBestBidAskOptionalQueryParams
) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/best_bid_ask`,
    queryParams: optionalQuery,
    isPublic: false,
  });
}

export function getProductBook(
  this: RESTBase,
  requiredQuery: GetProductBookRequiredQueryParams,
  optionalQuery?: GetProductBookOptionalQueryParams
) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/product_book`,
    queryParams: { ...requiredQuery, ...optionalQuery },
    isPublic: false,
  });
}

export function listProducts(
  this: RESTBase,
  optionalQuery?: ListProductsOptionalQueryParams
) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/products`,
    queryParams: optionalQuery,
    isPublic: false,
  });
}

export function getProduct(
  this: RESTBase,
  requiredPath: GetProductRequiredPathParams,
  optionalQuery?: GetProductOptionalQueryParams
) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/products/${requiredPath.product_id}`,
    queryParams: optionalQuery,
    isPublic: false,
  });
}

export function getProductCandles(
  this: RESTBase,
  requiredPath: GetProductCandlesRequiredPathParams,
  requiredQuery: GetProductCandlesRequiredQueryParams,
  optionalQuery?: GetProductCandlesOptionalQueryParams
) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/products/${requiredPath.product_id}/candles`,
    queryParams: { ...requiredQuery, ...optionalQuery },
    isPublic: false,
  });
}

export function getMarketTrades(
  this: RESTBase,
  requiredPath: GetMarketTradesRequiredPathParams,
  requiredQuery: GetMarketTradesRequiredQueryParams,
  optionalQuery?: GetMarketTradesOptionalQueryParams
) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/products/${requiredPath.product_id}/ticker`,
    queryParams: { ...requiredQuery, ...optionalQuery },
    isPublic: false,
  });
}
