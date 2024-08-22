import { API_PREFIX } from '../constants';
import { RESTBase } from './rest-base';
import { GetPaymentMethodRequest } from './types/payments-types';

export function listPaymentMethods(this: RESTBase) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/payment_methods`,
    isPublic: false,
  });
}

export function getPaymentMethod(
  this: RESTBase,
  { paymentMethodId }: GetPaymentMethodRequest
) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/payment_methods/${paymentMethodId}`,
    isPublic: false,
  });
}
