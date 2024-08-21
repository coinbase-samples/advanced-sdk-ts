import { API_PREFIX } from '../constants';
import { RESTBase } from './rest-base';
import {
  AllocatePortfolioRequest,
  GetPerpetualsPortfolioSummaryRequest,
  GetPerpetualsPositionRequest,
  GetPortfolioBalancesRequest,
  ListPerpetualsPositionsRequest,
  OptInOutMultiAssetCollateralRequest,
} from './types/perpetuals-types';

export function allocatePortfolio(
  this: RESTBase,
  bodyParams: AllocatePortfolioRequest
) {
  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/intx/allocate`,
    bodyParams: bodyParams,
    isPublic: false,
  });
}

export function getPerpetualsPortfolioSummary(
  this: RESTBase,
  { portfolio_uuid }: GetPerpetualsPortfolioSummaryRequest
) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/intx/portfolio/${portfolio_uuid}`,
    isPublic: false,
  });
}

export function listPerpetualsPositions(
  this: RESTBase,
  { portfolio_uuid }: ListPerpetualsPositionsRequest
) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/intx/positions/${portfolio_uuid}`,
    isPublic: false,
  });
}

export function getPerpertualsPosition(
  this: RESTBase,
  { portfolio_uuid, symbol }: GetPerpetualsPositionRequest
) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/intx/positions/${portfolio_uuid}/${symbol}`,
    isPublic: false,
  });
}

export function getPortfolioBalances(
  this: RESTBase,
  { portfolio_uuid }: GetPortfolioBalancesRequest
) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/intx/balances/${portfolio_uuid}`,
    isPublic: false,
  });
}

export function optInOutMultiAssetCollateral(
  this: RESTBase,
  bodyParams: OptInOutMultiAssetCollateralRequest
) {
  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/intx/multi_asset_collateral`,
    bodyParams: bodyParams,
    isPublic: false,
  });
}
