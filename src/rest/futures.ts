import { API_PREFIX } from '../constants';
import { RESTBase } from './rest-base';

export function getFuturesBalanceSummary(this: RESTBase) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/cfm/balance_summary`,
    queryParams: undefined,
    bodyParams: undefined,
    isPublic: false,
  });
}

export function getIntradayMarginSetting(this: RESTBase) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/cfm/intraday/margin_setting`,
    queryParams: undefined,
    bodyParams: undefined,
    isPublic: false,
  });
}

export function setIntradayMarginSetting(
  this: RESTBase,
  intraday_margin_setting?: string
) {
  const bodyParams = {
    intraday_margin_setting: intraday_margin_setting,
  };

  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/cfm/intraday/margin_setting`,
    queryParams: undefined,
    bodyParams: bodyParams,
    isPublic: false,
  });
}

export function getCurrentMarginWindow(
  this: RESTBase,
  margin_profile_type?: string
) {
  const bodyParams = {
    margin_profile_type: margin_profile_type,
  };

  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/cfm/intraday/current_margin_window`,
    queryParams: undefined,
    bodyParams: bodyParams,
    isPublic: false,
  });
}

export function listFuturesPositions(this: RESTBase) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/cfm/positions`,
    queryParams: undefined,
    bodyParams: undefined,
    isPublic: false,
  });
}

export function getFuturesPosition(this: RESTBase, product_id: string) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/cfm/positions/${product_id}`,
    queryParams: undefined,
    bodyParams: undefined,
    isPublic: false,
  });
}

export function scheduleFuturesSweep(this: RESTBase, usd_amount?: string) {
  const bodyParams = {
    usd_amount: usd_amount,
  };

  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/cfm/sweeps/schedule`,
    bodyParams: bodyParams,
    isPublic: false,
  });
}

export function listFuturesSweeps(this: RESTBase) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/cfm/sweeps`,
    isPublic: false,
  });
}

export function cancelPendingFuturesSweep(this: RESTBase) {
  return this.request({
    method: 'DELETE',
    endpoint: `${API_PREFIX}/cfm/sweeps`,
    isPublic: false,
  });
}
