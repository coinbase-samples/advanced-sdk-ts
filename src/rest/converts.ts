import { API_PREFIX } from '../constants';
import { RESTBase } from './rest-base';
import {
  CommitConvertTradeRequest,
  CreateConvertQuoteRequest,
  GetConvertTradeRequest,
} from './types/converts-types';

export function createConvertQuote(
  this: RESTBase,
  requestParams: CreateConvertQuoteRequest
) {
  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/convert/quote`,
    bodyParams: requestParams,
    isPublic: false,
  });
}

export function getConvertTrade(
  this: RESTBase,
  { tradeId, ...requestParams }: GetConvertTradeRequest
) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/convert/trade/${tradeId}`,
    queryParams: requestParams,
    isPublic: false,
  });
}

export function commitConvertTrade(
  this: RESTBase,
  { tradeId, ...requestParams }: CommitConvertTradeRequest
) {
  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/convert/trade/${tradeId}`,
    bodyParams: requestParams,
    isPublic: false,
  });
}
