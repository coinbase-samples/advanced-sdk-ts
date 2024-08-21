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
  { product_id, ...queryParams }: GetProductRequest
) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/products/${product_id}`,
    queryParams: queryParams,
    isPublic: false,
  });
}

export function getProductCandles(
  this: RESTBase,
  { product_id, ...queryParams }: GetProductCandlesRequest
) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/products/${product_id}/candles`,
    queryParams: queryParams,
    isPublic: false,
  });
}

export function getMarketTrades(
  this: RESTBase,
  { product_id, ...queryParams }: GetMarketTradesRequest
) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/products/${product_id}/ticker`,
    queryParams: queryParams,
    isPublic: false,
  });
}
