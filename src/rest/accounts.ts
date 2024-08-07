import { API_PREFIX } from '../constants';
import { RESTBase } from './rest-base';
import {
  GetAccountRequiredQueryParams,
  ListAccountsOptionalQueryParams,
} from './types';

export function getAccount(
  this: RESTBase,
  request: GetAccountRequiredQueryParams
) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/accounts/${request.account_uuid}`,
    isPublic: false,
  });
}

export function listAccounts(
  this: RESTBase,
  request?: ListAccountsOptionalQueryParams
) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/accounts`,
    queryParams: request,
    isPublic: false,
  });
}
