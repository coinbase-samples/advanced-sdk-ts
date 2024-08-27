import { API_PREFIX } from '../constants';
import { RESTBase } from './rest-base';
import {
  GetBestBidAskRequest,
  GetBestBidAskResponse,
  GetMarketTradesRequest,
  GetMarketTradesResponse,
  GetProductBookRequest,
  GetProductBookResponse,
  GetProductCandlesRequest,
  GetProductCandlesResponse,
  GetProductRequest,
  GetProductResponse,
  ListProductsRequest,
  ListProductsResponse,
} from './types/products-types';

export function getBestBidAsk(
  this: RESTBase,
  requestParams: GetBestBidAskRequest
): Promise<GetBestBidAskResponse> {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/best_bid_ask`,
    queryParams: requestParams,
    isPublic: false,
  });
}

export function getProductBook(
  this: RESTBase,
  requestParams: GetProductBookRequest
): Promise<GetProductBookResponse> {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/product_book`,
    queryParams: requestParams,
    isPublic: false,
  });
}

export function listProducts(
  this: RESTBase,
  requestParams: ListProductsRequest
): Promise<ListProductsResponse> {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/products`,
    queryParams: requestParams,
    isPublic: false,
  });
}

export function getProduct(
  this: RESTBase,
  { productId, ...requestParams }: GetProductRequest
): Promise<GetProductResponse> {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/products/${productId}`,
    queryParams: requestParams,
    isPublic: false,
  });
}

export function getProductCandles(
  this: RESTBase,
  { productId, ...requestParams }: GetProductCandlesRequest
): Promise<GetProductCandlesResponse> {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/products/${productId}/candles`,
    queryParams: requestParams,
    isPublic: false,
  });
}

export function getMarketTrades(
  this: RESTBase,
  { productId, ...requestParams }: GetMarketTradesRequest
): Promise<GetMarketTradesResponse> {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/products/${productId}/ticker`,
    queryParams: requestParams,
    isPublic: false,
  });
}
