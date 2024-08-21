// Allocate Portfolio
export type AllocatePortfolioRequest = {
  // Body Params
  portfolio_uuid: string;
  symbol: string;
  amount: string;
  currency: string;
};

// Get Perpetuals Portfolio Summary
export type GetPerpetualsPortfolioSummaryRequest = {
  // Path Params
  portfolio_uuid: string;
};

// List Perpetuals Positions
export type ListPerpetualsPositionsRequest = {
  // Path Params
  portfolio_uuid: string;
};

// Get Perpetuals Position
export type GetPerpetualsPositionRequest = {
  // Path Params
  portfolio_uuid: string;
  symbol: string;
};

// Get Portfolio Balances
export type GetPortfolioBalancesRequest = {
  // Path Params
  portfolio_uuid: string;
};

// Opt In or Out of Multi Asset Collateral
export type OptInOutMultiAssetCollateralRequest = {
  // Body Params
  portfolio_uuid?: string;
  multi_asset_collateral_enabled?: boolean;
};
