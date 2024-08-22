import { API_PREFIX } from '../constants';
import { RESTBase } from './rest-base';
import {
  GetBestBidAskRequest,
  GetMarketTradesRequest,
  GetProductBookRequest,
  GetProductCandlesRequest,
  GetProductRequest,
  ListProductsRequest,
} from './types/products-types';

export function getBestBidAsk(
  this: RESTBase,
  queryParams: GetBestBidAskRequest
) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/best_bid_ask`,
    queryParams: queryParams,
    isPublic: false,
  });
}

export function getProductBook(
  this: RESTBase,
  queryParams: GetProductBookRequest
) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/product_book`,
    queryParams: queryParams,
    isPublic: false,
  });
}

export function listProducts(this: RESTBase, queryParams: ListProductsRequest) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/products`,
    queryParams: queryParams,
    isPublic: false,
  });
}

export function getProduct(
  this: RESTBase,
  { productId, ...queryParams }: GetProductRequest
) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/products/${productId}`,
    queryParams: queryParams,
    isPublic: false,
  });
}

export function getProductCandles(
  this: RESTBase,
  { productId, ...queryParams }: GetProductCandlesRequest
) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/products/${productId}/candles`,
    queryParams: queryParams,
    isPublic: false,
  });
}

export function getMarketTrades(
  this: RESTBase,
  { productId, ...queryParams }: GetMarketTradesRequest
) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/products/${productId}/ticker`,
    queryParams: queryParams,
    isPublic: false,
  });
}
