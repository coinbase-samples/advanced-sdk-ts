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
  queryParams: ListPortfoliosRequest
) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/portfolios`,
    queryParams: queryParams,
    isPublic: false,
  });
}

export function createPortfolio(
  this: RESTBase,
  bodyParams: CreatePortfolioRequest
) {
  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/portfolios`,
    bodyParams: bodyParams,
    isPublic: false,
  });
}

export function movePortfolioFunds(
  this: RESTBase,
  bodyParams: MovePortfolioFundsRequest
) {
  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/portfolios/move_funds`,
    bodyParams: bodyParams,
    isPublic: false,
  });
}

export function getPortfolioBreakdown(
  this: RESTBase,
  { portfolioUuid, ...queryParams }: GetPortfolioBreakdownRequest
) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/portfolios/${portfolioUuid}`,
    queryParams: queryParams,
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
  { portfolioUuid, ...bodyParams }: EditPortfolioRequest
) {
  return this.request({
    method: 'PUT',
    endpoint: `${API_PREFIX}/portfolios/${portfolioUuid}`,
    bodyParams: bodyParams,
    isPublic: false,
  });
}
