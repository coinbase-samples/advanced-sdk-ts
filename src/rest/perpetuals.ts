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
  { portfolioUuid }: GetPerpetualsPortfolioSummaryRequest
) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/intx/portfolio/${portfolioUuid}`,
    isPublic: false,
  });
}

export function listPerpetualsPositions(
  this: RESTBase,
  { portfolioUuid }: ListPerpetualsPositionsRequest
) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/intx/positions/${portfolioUuid}`,
    isPublic: false,
  });
}

export function getPerpertualsPosition(
  this: RESTBase,
  { portfolioUuid, symbol }: GetPerpetualsPositionRequest
) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/intx/positions/${portfolioUuid}/${symbol}`,
    isPublic: false,
  });
}

export function getPortfolioBalances(
  this: RESTBase,
  { portfolioUuid }: GetPortfolioBalancesRequest
) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/intx/balances/${portfolioUuid}`,
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
