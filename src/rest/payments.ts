import { API_PREFIX } from '../constants';
import { RESTBase } from './rest-base';
import { GetPaymentMethodRequiredPathParams } from './types/request-types';

export function listPaymentMethods(this: RESTBase) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/payment_methods`,
    isPublic: false,
  });
}

export function getPaymentMethod(
  this: RESTBase,
  requiredPath: GetPaymentMethodRequiredPathParams
) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/payment_methods/${requiredPath.payment_method_id}`,
    isPublic: false,
  });
}
