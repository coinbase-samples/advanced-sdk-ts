// List Portfolios
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
  funds: Amount;
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

// Misc.
type Amount = {
  value: string;
  currency: string;
};

enum PortfolioType {
  UNDEFINED = 'UNDEFINED',
  DEFAULT = 'DEFAULT',
  CONSUMER = 'CONSUMER',
  INTX = 'INTX',
}
