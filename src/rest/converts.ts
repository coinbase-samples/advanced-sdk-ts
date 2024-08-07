import { API_PREFIX } from '../constants';
import { RESTBase } from './rest-base';

export function createConvertQuote(
  this: RESTBase,
  from_account: string,
  to_account: string,
  amount: string,
  trade_incentive_metadata: object
) {
  const bodyParams = {
    from_account: from_account,
    to_account: to_account,
    amount: amount,
    trade_incentive_metadata: trade_incentive_metadata,
  };

  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/convert/quote`,
    bodyParams: bodyParams,
    isPublic: false,
  });
}

export function commitConvertTrade(
  this: RESTBase,
  trade_id: string,
  from_account: string,
  to_account: string
) {
  const bodyParams = {
    from_account: from_account,
    to_account: to_account,
  };

  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/convert/trade/{trade_id}`,
    bodyParams: bodyParams,
    isPublic: false,
  });
}

export function getConvertTrade(
  this: RESTBase,
  trade_id: string,
  from_account: string,
  to_account: string
) {
  const queryParams = {
    from_account: from_account,
    to_account: to_account,
  };

  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/convert/trade/${trade_id}`,
    queryParams: queryParams,
    isPublic: false,
  });
}
