import { API_PREFIX } from '../constants';
import { RESTBase } from './rest-base';
import {
  CreatePortfolioRequest,
  CreatePortfolioResponse,
  DeletePortfolioRequest,
  DeletePortfolioResponse,
  EditPortfolioRequest,
  EditPortfolioResponse,
  GetPortfolioBreakdownRequest,
  GetPortfolioBreakdownResponse,
  ListPortfoliosRequest,
  ListPortfoliosResponse,
  MovePortfolioFundsRequest,
  MovePortfolioFundsResponse,
} from './types/portfolios-types';

export function listPortfolios(
  this: RESTBase,
  requestParams: ListPortfoliosRequest
): Promise<ListPortfoliosResponse> {
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
): Promise<CreatePortfolioResponse> {
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
): Promise<MovePortfolioFundsResponse> {
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
): Promise<GetPortfolioBreakdownResponse> {
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
): Promise<DeletePortfolioResponse> {
  return this.request({
    method: 'DELETE',
    endpoint: `${API_PREFIX}/portfolios/${portfolioUuid}`,
    isPublic: false,
  });
}

export function editPortfolio(
  this: RESTBase,
  { portfolioUuid, ...requestParams }: EditPortfolioRequest
): Promise<EditPortfolioResponse> {
  return this.request({
    method: 'PUT',
    endpoint: `${API_PREFIX}/portfolios/${portfolioUuid}`,
    bodyParams: requestParams,
    isPublic: false,
  });
}
