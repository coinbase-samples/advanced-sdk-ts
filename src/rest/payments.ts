import { API_PREFIX } from '../constants';
import { RESTBase } from './rest-base';
import {
  GetPaymentMethodRequest,
  GetPaymentMethodResponse,
  ListPaymentMethodsResponse,
} from './types/payments-types';

export function listPaymentMethods(
  this: RESTBase
): Promise<ListPaymentMethodsResponse> {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/payment_methods`,
    isPublic: false,
  });
}

export function getPaymentMethod(
  this: RESTBase,
  { paymentMethodId }: GetPaymentMethodRequest
): Promise<GetPaymentMethodResponse> {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/payment_methods/${paymentMethodId}`,
    isPublic: false,
  });
}
