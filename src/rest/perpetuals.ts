import { API_PREFIX } from '../constants';
import { RESTBase } from './rest-base';
import {
  AllocatePortfolioRequest,
  AllocatePortfolioResponse,
  GetPerpetualsPortfolioSummaryRequest,
  GetPerpetualsPortfolioSummaryResponse,
  GetPerpetualsPositionRequest,
  GetPerpetualsPositionResponse,
  GetPortfolioBalancesRequest,
  GetPortfolioBalancesResponse,
  ListPerpetualsPositionsRequest,
  ListPerpetualsPositionsResponse,
  OptInOutMultiAssetCollateralRequest,
  OptInOutMultiAssetCollateralResponse,
} from './types/perpetuals-types';

export function allocatePortfolio(
  this: RESTBase,
  requestParams: AllocatePortfolioRequest
): Promise<AllocatePortfolioResponse> {
  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/intx/allocate`,
    bodyParams: requestParams,
    isPublic: false,
  });
}

export function getPerpetualsPortfolioSummary(
  this: RESTBase,
  { portfolioUuid }: GetPerpetualsPortfolioSummaryRequest
): Promise<GetPerpetualsPortfolioSummaryResponse> {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/intx/portfolio/${portfolioUuid}`,
    isPublic: false,
  });
}

export function listPerpetualsPositions(
  this: RESTBase,
  { portfolioUuid }: ListPerpetualsPositionsRequest
): Promise<ListPerpetualsPositionsResponse> {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/intx/positions/${portfolioUuid}`,
    isPublic: false,
  });
}

export function getPerpertualsPosition(
  this: RESTBase,
  { portfolioUuid, symbol }: GetPerpetualsPositionRequest
): Promise<GetPerpetualsPositionResponse> {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/intx/positions/${portfolioUuid}/${symbol}`,
    isPublic: false,
  });
}

export function getPortfolioBalances(
  this: RESTBase,
  { portfolioUuid }: GetPortfolioBalancesRequest
): Promise<GetPortfolioBalancesResponse> {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/intx/balances/${portfolioUuid}`,
    isPublic: false,
  });
}

export function optInOutMultiAssetCollateral(
  this: RESTBase,
  requestParams: OptInOutMultiAssetCollateralRequest
): Promise<OptInOutMultiAssetCollateralResponse> {
  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/intx/multi_asset_collateral`,
    bodyParams: requestParams,
    isPublic: false,
  });
}
