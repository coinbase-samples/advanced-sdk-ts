import { API_PREFIX } from '../constants';
import { RESTBase } from './rest-base';
import { GetTransactionsSummaryRequest } from './types/fees-types';

export function getTransactionSummary(
  this: RESTBase,
  queryParams: GetTransactionsSummaryRequest
) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/transaction_summary`,
    queryParams: queryParams,
    isPublic: false,
  });
}
