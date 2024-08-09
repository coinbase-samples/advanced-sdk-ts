import { API_PREFIX } from '../constants';
import { RESTBase } from './rest-base';
import {
  AllocatePortfolioRequiredBodyParams,
  GetPerpetualsPortfolioSummaryRequiredPathParams,
  GetPerpetualsPositionRequiredPathParams,
  GetPortfolioBalancesRequiredPathParams,
  ListPerpetualsPositionsRequiredPathParams,
  OptInOutMultiAssetCollateralOptionalBodyParams,
} from './types/request-types';

export function allocatePortfolio(
  this: RESTBase,
  requiredBody: AllocatePortfolioRequiredBodyParams
) {
  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/intx/allocate`,
    bodyParams: requiredBody,
    isPublic: false,
  });
}

export function getPerpetualsPortfolioSummary(
  this: RESTBase,
  requiredPath: GetPerpetualsPortfolioSummaryRequiredPathParams
) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/intx/portfolio/${requiredPath.portfolio_uuid}`,
    isPublic: false,
  });
}

export function listPerpetualsPositions(
  this: RESTBase,
  requiredPath: ListPerpetualsPositionsRequiredPathParams
) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/intx/positions/${requiredPath.portfolio_uuid}`,
    isPublic: false,
  });
}

export function getPerpertualsPosition(
  this: RESTBase,
  requiredPath: GetPerpetualsPositionRequiredPathParams
) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/intx/positions/${requiredPath.portfolio_uuid}/${requiredPath.symbol}`,
    isPublic: false,
  });
}

export function getPortfolioBalances(
  this: RESTBase,
  requiredPath: GetPortfolioBalancesRequiredPathParams
) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/intx/balances/${requiredPath.portfolio_uuid}`,
    isPublic: false,
  });
}

export function optInOutMultiAssetCollateral(
  this: RESTBase,
  optionalBody?: OptInOutMultiAssetCollateralOptionalBodyParams
) {
  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/intx/multi_asset_collateral`,
    bodyParams: optionalBody,
    isPublic: false,
  });
}
