// Get Account
export type GetAccountRequest = {
  // Path Params
  account_uuid: string;
};

// List Accounts
export type ListAccountsRequest = {
  // Query Params
  limit?: number;
  cursor?: string;
  retail_portfolio_id?: string;
};
