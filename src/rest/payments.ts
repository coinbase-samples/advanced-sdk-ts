import { API_PREFIX } from '../constants';
import { RESTBase } from './rest-base';

export function listPaymentMethods(this: RESTBase) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/payment_methods`,
    isPublic: false,
  });
}

export function getPaymentMethod(this: RESTBase, payment_method_id: string) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/payment_methods/${payment_method_id}`,
    isPublic: false,
  });
}
