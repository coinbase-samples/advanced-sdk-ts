import { API_PREFIX } from '../constants';
import { RESTBase } from './rest-base';

export function listPortfolios(this: RESTBase, portfolio_type?: string) {
  const queryParams = {
    portfolio_type: portfolio_type,
  };

  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/portfolios`,
    queryParams: queryParams,
    bodyParams: undefined,
    isPublic: false,
  });
}

export function createPortfolio(this: RESTBase, name: string) {
  const bodyParams = {
    name: name,
  };

  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/portfolios`,
    queryParams: undefined,
    bodyParams: bodyParams,
    isPublic: false,
  });
}

export function deletePortfolio(this: RESTBase, portfolio_uuid: string) {
  return this.request({
    method: 'DELETE',
    endpoint: `${API_PREFIX}/portfolios/${portfolio_uuid}`,
    queryParams: undefined,
    bodyParams: undefined,
    isPublic: false,
  });
}

export function editPortfolio(
  this: RESTBase,
  portfolio_uuid: string,
  name: string
) {
  const bodyParams = {
    name: name,
  };

  return this.request({
    method: 'PUT',
    endpoint: `${API_PREFIX}/portfolios/${portfolio_uuid}`,
    queryParams: undefined,
    bodyParams: bodyParams,
    isPublic: false,
  });
}

export function movePortfolioFunds(
  this: RESTBase,
  funds: object,
  source_portfolio_uuid: string,
  target_portfolio_uuid: string
) {
  const bodyParams = {
    funds: funds,
    source_portfolio_uuid: source_portfolio_uuid,
    target_portfolio_uuid: target_portfolio_uuid,
  };

  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/portfolios/move_funds`,
    queryParams: undefined,
    bodyParams: bodyParams,
    isPublic: false,
  });
}

export function getPortfolioBreakdown(
  this: RESTBase,
  portfolio_uuid: string,
  currency: string
) {
  const queryParams = {
    currency: currency,
  };

  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/portfolios/${portfolio_uuid}`,
    queryParams: queryParams,
    bodyParams: undefined,
    isPublic: false,
  });
}
