import { API_PREFIX } from '../constants';
import { RESTBase } from './rest-base';
import { GetAccountRequest, ListAccountsRequest } from './types/accounts-types';

// [GET] Get Account
// Official Documentation: https://docs.cdp.coinbase.com/advanced-trade/reference/retailbrokerageapi_getaccount
export function getAccount(this: RESTBase, { accountUuid }: GetAccountRequest) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/accounts/${accountUuid}`,
    isPublic: false,
  });
}

// List Accounts
// Official Documentation: https://docs.cdp.coinbase.com/advanced-trade/reference/retailbrokerageapi_getaccounts
export function listAccounts(
  this: RESTBase,
  requestParams: ListAccountsRequest
) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/accounts`,
    queryParams: requestParams,
    isPublic: false,
  });
}
