import { API_PREFIX } from '../constants';
import { RESTBase } from './rest-base';
import {
  CreatePortfolioRequiredBodyParams,
  DeletePortfolioRequiredPathParams,
  EditPortfolioRequiredBodyParams,
  EditPortfolioRequiredPathParams,
  GetPortfolioBreakdownOptionalQueryParams,
  GetPortfolioBreakdownRequiredPathParams,
  ListPortfoliosOptionalQueryParams,
  MovePortfolioFundsRequiredBodyParams,
} from './types/request-types';

export function listPortfolios(
  this: RESTBase,
  optionalQuery?: ListPortfoliosOptionalQueryParams
) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/portfolios`,
    queryParams: optionalQuery,
    isPublic: false,
  });
}

export function createPortfolio(
  this: RESTBase,
  requiredBody: CreatePortfolioRequiredBodyParams
) {
  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/portfolios`,
    bodyParams: requiredBody,
    isPublic: false,
  });
}

export function movePortfolioFunds(
  this: RESTBase,
  requiredBody: MovePortfolioFundsRequiredBodyParams
) {
  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/portfolios/move_funds`,
    bodyParams: requiredBody,
    isPublic: false,
  });
}

export function getPortfolioBreakdown(
  this: RESTBase,
  requiredPath: GetPortfolioBreakdownRequiredPathParams,
  optionalQuery?: GetPortfolioBreakdownOptionalQueryParams
) {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/portfolios/${requiredPath.portfolio_uuid}`,
    queryParams: optionalQuery,
    isPublic: false,
  });
}

export function deletePortfolio(
  this: RESTBase,
  requiredPath: DeletePortfolioRequiredPathParams
) {
  return this.request({
    method: 'DELETE',
    endpoint: `${API_PREFIX}/portfolios/${requiredPath.portfolio_uuid}`,
    isPublic: false,
  });
}

export function editPortfolio(
  this: RESTBase,
  requiredPath: EditPortfolioRequiredPathParams,
  requiredBody: EditPortfolioRequiredBodyParams
) {
  return this.request({
    method: 'PUT',
    endpoint: `${API_PREFIX}/portfolios/${requiredPath.portfolio_uuid}`,
    bodyParams: requiredBody,
    isPublic: false,
  });
}
