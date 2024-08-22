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
  { tradeId, ...queryParams }: GetConvertTradeRequest
) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/convert/trade/${tradeId}`,
    queryParams: queryParams,
    isPublic: false,
  });
}

export function commitConvertTrade(
  this: RESTBase,
  { tradeId, ...bodyParams }: CommitConvertTradeRequest
) {
  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/convert/trade/${tradeId}`,
    bodyParams: bodyParams,
    isPublic: false,
  });
}
