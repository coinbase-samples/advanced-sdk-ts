// List Portfolios
import { PortfolioType } from './common-types';

export type ListPortfoliosRequest = {
  // Query Params
  portfolioType?: PortfolioType;
};

// Create Portfolio
export type CreatePortfolioRequest = {
  // Body Params
  name: string;
};

// Move Portfolio Funds
export type MovePortfolioFundsRequest = {
  // Body Params
  funds: Record<string, any>;
  sourcePortfolioUuid: string;
  targetPortfolioUuid: string;
};

// Get Portfolio Breakdown
export type GetPortfolioBreakdownRequest = {
  // Path Params
  portfolioUuid: string;

  // Query Params
  currency?: string;
};

// Delete Portfolio
export type DeletePortfolioRequest = {
  // Path Params
  portfolioUuid: string;
};

// Edit Portfolio
export type EditPortfolioRequest = {
  // Path Params
  portfolioUuid: string;

  // Body Params
  name: string;
};
