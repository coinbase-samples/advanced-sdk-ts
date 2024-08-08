import { API_PREFIX } from '../constants';
import { RESTBase } from './rest-base';
import {
  GetCurrentMarginWindowOptionalQueryParams,
  GetFuturesPositionRequiredPathParams,
  ScheduleFuturesSweepOptionalBodyParams,
  SetIntradayMarginSettingOptionalBodyParams,
} from './types';

export function getFuturesBalanceSummary(this: RESTBase) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/cfm/balance_summary`,
    isPublic: false,
  });
}

export function getIntradayMarginSetting(this: RESTBase) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/cfm/intraday/margin_setting`,
    isPublic: false,
  });
}

export function setIntradayMarginSetting(
  this: RESTBase,
  optionalBody?: SetIntradayMarginSettingOptionalBodyParams
) {
  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/cfm/intraday/margin_setting`,
    bodyParams: optionalBody,
    isPublic: false,
  });
}

export function getCurrentMarginWindow(
  this: RESTBase,
  optionalQuery?: GetCurrentMarginWindowOptionalQueryParams
) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/cfm/intraday/current_margin_window`,
    queryParams: optionalQuery,
    isPublic: false,
  });
}

export function listFuturesPositions(this: RESTBase) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/cfm/positions`,
    isPublic: false,
  });
}

export function getFuturesPosition(
  this: RESTBase,
  requiredPath: GetFuturesPositionRequiredPathParams
) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/cfm/positions/${requiredPath.product_id}`,
    isPublic: false,
  });
}

export function scheduleFuturesSweep(
  this: RESTBase,
  optionalBody?: ScheduleFuturesSweepOptionalBodyParams
) {
  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/cfm/sweeps/schedule`,
    bodyParams: optionalBody,
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
