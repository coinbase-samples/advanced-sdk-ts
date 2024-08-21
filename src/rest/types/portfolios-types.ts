// List Portfolios
export type ListPortfoliosRequest = {
  // Query Params
  portfolio_type?: string;
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
  source_portfolio_uuid: string;
  target_portfolio_uuid: string;
};

// Get Portfolio Breakdown
export type GetPortfolioBreakdownRequest = {
  // Path Params
  portfolio_uuid: string;

  // Query Params
  currency?: string;
};

// Delete Portfolio
export type DeletePortfolioRequest = {
  // Path Params
  portfolio_uuid: string;
};

// Edit Portfolio
export type EditPortfolioRequest = {
  // Path Params
  portfolio_uuid: string;

  // Body Params
  name: string;
};

// Misc.
export type Amount = {
  value: string;
  currency: string;
};