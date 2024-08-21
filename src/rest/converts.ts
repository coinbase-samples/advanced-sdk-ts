import { API_PREFIX } from '../constants';
import { RESTBase } from './rest-base';
import {
  CommitConvertTradeRequest,
  CreateConvertQuoteRequest,
  GetConvertTradeRequest,
} from './types/converts-types';

export function createConvertQuote(
  this: RESTBase,
  queryParams: CreateConvertQuoteRequest
) {
  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/convert/quote`,
    bodyParams: queryParams,
    isPublic: false,
  });
}

export function getConvertTrade(
  this: RESTBase,
  { trade_id, ...queryParams }: GetConvertTradeRequest
) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/convert/trade/${trade_id}`,
    queryParams: queryParams,
    isPublic: false,
  });
}

export function commitConvertTrade(
  this: RESTBase,
  { trade_id, ...bodyParams }: CommitConvertTradeRequest
) {
  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/convert/trade/${trade_id}`,
    bodyParams: bodyParams,
    isPublic: false,
  });
}
