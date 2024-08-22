// Get Account
export type GetAccountRequest = {
  // Path Params
  accountUuid: string;
};

// List Accounts
export type ListAccountsRequest = {
  // Query Params
  limit?: number;
  cursor?: string;
  retailPortfolioId?: string;
};
