import { API_PREFIX } from '../constants';
import { RESTBase } from './rest-base';
import { GetAccountRequest, ListAccountsRequest } from './types/accounts-types';

export function getAccount(
  this: RESTBase,
  { account_uuid }: GetAccountRequest
) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/accounts/${account_uuid}`,
    isPublic: false,
  });
}

export function listAccounts(this: RESTBase, queryParams: ListAccountsRequest) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/accounts`,
    queryParams: queryParams,
    isPublic: false,
  });
}
