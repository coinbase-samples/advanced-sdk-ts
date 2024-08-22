import { API_PREFIX } from '../constants';
import { RESTBase } from './rest-base';
import {
  GetCurrentMarginWindowRequest,
  GetFuturesPositionRequest,
  ScheduleFuturesSweepRequest,
  SetIntradayMarginSettingRequest,
} from './types/futures-types';

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
  bodyParams: SetIntradayMarginSettingRequest
) {
  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/cfm/intraday/margin_setting`,
    bodyParams: bodyParams,
    isPublic: false,
  });
}

export function getCurrentMarginWindow(
  this: RESTBase,
  queryParams: GetCurrentMarginWindowRequest
) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/cfm/intraday/current_margin_window`,
    queryParams: queryParams,
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
  { productId }: GetFuturesPositionRequest
) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/cfm/positions/${productId}`,
    isPublic: false,
  });
}

export function scheduleFuturesSweep(
  this: RESTBase,
  bodyParams: ScheduleFuturesSweepRequest
) {
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
