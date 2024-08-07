import { API_PREFIX } from '../constants';
import { RESTBase } from './rest-base';

export function getTransactionSummary(
  this: RESTBase,
  product_type?: string,
  contract_expiry_type?: string,
  product_venue?: string
) {
  const queryParams = {
    product_type: product_type,
    contract_expiry_type: contract_expiry_type,
    product_venue: product_venue,
  };

  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/transaction_summary`,
    queryParams: queryParams,
    isPublic: false,
  });
}
