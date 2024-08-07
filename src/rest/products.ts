import { API_PREFIX } from '../constants';
import { RESTBase } from './rest-base';

export function getBestBidAsk(this: RESTBase, product_ids?: string[]) {
  const queryParams = {
    product_ids: product_ids,
  };

  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/best_bid_ask`,
    queryParams: queryParams,
    isPublic: false,
  });
}

export function getProductBook(
  this: RESTBase,
  product_id: string,
  limit?: number,
  aggregation_price_increment?: number
) {
  const queryParams = {
    product_id: product_id,
    limit: limit,
    aggregation_price_increment: aggregation_price_increment,
  };

  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/product_book`,
    queryParams: queryParams,
    isPublic: false,
  });
}

export function listProducts(
  this: RESTBase,
  limit?: number,
  offset?: number,
  product_type?: string,
  product_ids?: string[],
  contract_expiry_type?: string,
  expiring_contract_status?: string,
  get_tradability_status?: boolean,
  get_all_products?: boolean
) {
  const queryParams = {
    limit: limit,
    offset: offset,
    product_type: product_type,
    product_ids: product_ids,
    contract_expiry_type: contract_expiry_type,
    expiring_contract_status: expiring_contract_status,
    get_tradability_status: get_tradability_status,
    get_all_products: get_all_products,
  };

  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/products`,
    queryParams: queryParams,
    isPublic: false,
  });
}

export function getProduct(
  this: RESTBase,
  product_id: string,
  get_tradability_status?: boolean
) {
  const queryParams = {
    get_tradability_status: get_tradability_status,
  };

  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/products/${product_id}`,
    queryParams: queryParams,
    isPublic: false,
  });
}

export function getProductCandles(
  this: RESTBase,
  product_id: string,
  start: string,
  end: string,
  granularity: string
) {
  const queryParams = {
    start: start,
    end: end,
    granularity: granularity,
  };

  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/products/${product_id}/candles`,
    queryParams: queryParams,
    isPublic: false,
  });
}

export function getMarketTrades(
  this: RESTBase,
  product_id: string,
  limit: number,
  start?: string,
  end?: string
) {
  const queryParams = {
    limit: limit,
    start: start,
    end: end,
  };

  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/products/${product_id}/ticker`,
    queryParams: queryParams,
    isPublic: false,
  });
}
