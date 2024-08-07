import { API_PREFIX } from '../constants';
import { RESTBase } from './rest-base';

export function getAccount(this: RESTBase, account_uuid: string) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/accounts/${account_uuid}`,
    isPublic: false,
  });
}

export function listAccounts(
  this: RESTBase,
  limit?: number,
  cursor?: string,
  retail_portfolio_id?: string
) {
  const queryParams = {
    limit: limit,
    cursor: cursor,
    retail_portfolio_id: retail_portfolio_id,
  };

  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/accounts`,
    queryParams: queryParams,
    isPublic: false,
  });
}
