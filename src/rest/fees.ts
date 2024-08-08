import { API_PREFIX } from '../constants';
import { RESTBase } from './rest-base';
import { GetTransactionsSummaryOptionalQueryParams } from './types/request-types';

export function getTransactionSummary(
  this: RESTBase,
  optionalQuery?: GetTransactionsSummaryOptionalQueryParams
) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/transaction_summary`,
    queryParams: optionalQuery,
    isPublic: false,
  });
}
