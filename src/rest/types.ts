type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export interface RequestOptions {
  method: HttpMethod; // Use the HttpMethod type for method
  endpoint: string;
  queryParams?: Record<string, any>; // Optional query parameters
  bodyParams?: Record<string, any>; // Optional body parameters
  isPublic: boolean; // Is this request public?
}

// Get Account
export type GetAccountRequiredQueryParams = {
  account_uuid: string;
};

// List Accounts
export type ListAccountsOptionalQueryParams = {
  limit?: number;
  cursor?: string;
  retail_portfolio_id?: string;
};

// Create Convert Quote
export type CreateConvertQuoteRequiredBodyParams = {
  from_account: string;
  to_account: string;
  amount: string;
};

export type CreateConvertQuoteOptionalBodyParams = {
  trade_incentive_metadata?: TradeIncentiveMetadata;
};

// Get Convert Trade
export type GetConvertTradeRequiredPathParams = {
  trade_id: string;
};

export type GetConvertTradeRequiredQueryParams = {
  from_account: string;
  to_account: string;
};

// Commit Convert Trade
export type CommitConvertTradeRequiredPathParams = {
  trade_id: string;
};

export type CommitConvertTradeRequiredBodyParams = {
  from_account: string;
  to_account: string;
};

// Misc.
export type TradeIncentiveMetadata = {
  user_incentive_id: string;
  code_val: string;
};
