// Allocate Portfolio
export type AllocatePortfolioRequest = {
  // Body Params
  portfolioUuid: string;
  symbol: string;
  amount: string;
  currency: string;
};

// Get Perpetuals Portfolio Summary
export type GetPerpetualsPortfolioSummaryRequest = {
  // Path Params
  portfolioUuid: string;
};

// List Perpetuals Positions
export type ListPerpetualsPositionsRequest = {
  // Path Params
  portfolioUuid: string;
};

// Get Perpetuals Position
export type GetPerpetualsPositionRequest = {
  // Path Params
  portfolioUuid: string;
  symbol: string;
};

// Get Portfolio Balances
export type GetPortfolioBalancesRequest = {
  // Path Params
  portfolioUuid: string;
};

// Opt In or Out of Multi Asset Collateral
export type OptInOutMultiAssetCollateralRequest = {
  // Body Params
  portfolioUuid?: string;
  multiAssetCollateralEnabled?: boolean;
};
