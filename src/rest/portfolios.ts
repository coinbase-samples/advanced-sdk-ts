import { API_PREFIX } from '../constants';
import { RESTBase } from './rest-base';
import {
  CreatePortfolioRequest,
  DeletePortfolioRequest,
  EditPortfolioRequest,
  GetPortfolioBreakdownRequest,
  ListPortfoliosRequest,
  MovePortfolioFundsRequest,
} from './types/portfolios-types';

export function listPortfolios(
  this: RESTBase,
  requestParams: ListPortfoliosRequest
) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/portfolios`,
    queryParams: requestParams,
    isPublic: false,
  });
}

export function createPortfolio(
  this: RESTBase,
  requestParams: CreatePortfolioRequest
) {
  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/portfolios`,
    bodyParams: requestParams,
    isPublic: false,
  });
}

export function movePortfolioFunds(
  this: RESTBase,
  requestParams: MovePortfolioFundsRequest
) {
  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/portfolios/move_funds`,
    bodyParams: requestParams,
    isPublic: false,
  });
}

export function getPortfolioBreakdown(
  this: RESTBase,
  { portfolioUuid, ...requestParams }: GetPortfolioBreakdownRequest
) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/portfolios/${portfolioUuid}`,
    queryParams: requestParams,
    isPublic: false,
  });
}

export function deletePortfolio(
  this: RESTBase,
  { portfolioUuid }: DeletePortfolioRequest
) {
  return this.request({
    method: 'DELETE',
    endpoint: `${API_PREFIX}/portfolios/${portfolioUuid}`,
    isPublic: false,
  });
}

export function editPortfolio(
  this: RESTBase,
  { portfolioUuid, ...requestParams }: EditPortfolioRequest
) {
  return this.request({
    method: 'PUT',
    endpoint: `${API_PREFIX}/portfolios/${portfolioUuid}`,
    bodyParams: requestParams,
    isPublic: false,
  });
}
