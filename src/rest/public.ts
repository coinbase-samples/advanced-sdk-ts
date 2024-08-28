import { API_PREFIX } from '../constants';
import { RESTBase } from './rest-base';
import {
  GetPublicMarketTradesRequest,
  GetPublicMarketTradesResponse,
  GetPublicProductBookRequest,
  GetPublicProductBookResponse,
  GetPublicProductCandlesRequest,
  GetPublicProductCandlesResponse,
  GetPublicProductRequest,
  GetPublicProductResponse,
  GetServerTimeResponse,
  ListPublicProductsRequest,
  ListPublicProductsResponse,
} from './types/public-types';

export function getServerTime(this: RESTBase): Promise<GetServerTimeResponse> {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/time`,
    isPublic: true,
  });
}

export function getPublicProductBook(
  this: RESTBase,
  requestParams: GetPublicProductBookRequest
): Promise<GetPublicProductBookResponse> {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/market/product_book`,
    queryParams: requestParams,
    isPublic: true,
  });
}

export function listPublicProducts(
  this: RESTBase,
  requestParams: ListPublicProductsRequest
): Promise<ListPublicProductsResponse> {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/market/products`,
    queryParams: requestParams,
    isPublic: true,
  });
}

export function getPublicProduct(
  this: RESTBase,
  { productId }: GetPublicProductRequest
): Promise<GetPublicProductResponse> {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/market/products/${productId}`,
    isPublic: true,
  });
}

export function getPublicProductCandles(
  this: RESTBase,
  { productId, ...requestParams }: GetPublicProductCandlesRequest
): Promise<GetPublicProductCandlesResponse> {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/market/products/${productId}/candles`,
    queryParams: requestParams,
    isPublic: true,
  });
}

export function getPublicMarketTrades(
  this: RESTBase,
  { productId, ...requestParams }: GetPublicMarketTradesRequest
): Promise<GetPublicMarketTradesResponse> {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/products/${productId}/ticker`,
    queryParams: requestParams,
    isPublic: true,
  });
}
