import { API_PREFIX } from '../constants';
import { RESTBase } from './rest-base';
import {
  CommitConvertTradeRequiredBodyParams,
  CommitConvertTradeRequiredPathParams,
  CreateConvertQuoteOptionalBodyParams,
  CreateConvertQuoteRequiredBodyParams,
  GetConvertTradeRequiredPathParams,
  GetConvertTradeRequiredQueryParams,
} from './types';

export function createConvertQuote(
  this: RESTBase,
  requiredBody: CreateConvertQuoteRequiredBodyParams,
  optionalBody?: CreateConvertQuoteOptionalBodyParams
) {
  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/convert/quote`,
    bodyParams: { ...requiredBody, ...optionalBody },
    isPublic: false,
  });
}

export function getConvertTrade(
  this: RESTBase,
  requiredPath: GetConvertTradeRequiredPathParams,
  requiredQuery: GetConvertTradeRequiredQueryParams
) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/convert/trade/${requiredPath.trade_id}`,
    queryParams: requiredQuery,
    isPublic: false,
  });
}

export function commitConvertTrade(
  this: RESTBase,
  requiredPath: CommitConvertTradeRequiredPathParams,
  requiredBody: CommitConvertTradeRequiredBodyParams
) {
  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/convert/trade/${requiredPath.trade_id}`,
    bodyParams: requiredBody,
    isPublic: false,
  });
}
