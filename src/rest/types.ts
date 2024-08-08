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

// Get Transactions Summary
export type GetTransactionsSummaryOptionalQueryParams = {
  product_type?: string;
  contract_expiry_type?: string;
  product_venue?: string;
};

// Set Intraday Margin Setting
export type SetIntradayMarginSettingOptionalBodyParams = {
  setting?: string;
};

// Get Current Margin Window
export type GetCurrentMarginWindowOptionalQueryParams = {
  margin_profile_type?: string;
};

// Get Futures Position
export type GetFuturesPositionRequiredPathParams = {
  product_id: string;
};

// Schedule Futures Sweep
export type ScheduleFuturesSweepOptionalBodyParams = {
  usd_amount?: string;
};

// Create Order

// Cancel Orders
export type CancelOrdersRequiredBodyParams = {
  order_ids: string[];
};

// Edit Order
export type EditOrderRequiredBodyParams = {
  order_id: string;
};

export type EditOrderOptionalBodyParams = {
  price?: string;
  size?: string;
};

// Edit Order Preview
export type EditOrderPreviewRequiredBodyParams = {
  order_id: string;
};

export type EditOrderPreviewOptionalBodyParams = {
  price?: string;
  size?: string;
};

// List Orders
export type ListOrdersOptionalQueryParams = {
  order_ids?: string[];
  product_ids?: string[];
  order_status?: string[];
  limit?: number;
  start_date?: string;
  end_date?: string;
  order_type?: string;
  order_side?: string;
  cursor?: string;
  product_type?: string;
  order_placement_source?: string;
  contract_expiry_type?: string;
  asset_filters?: string[];
  retail_portfolio_id?: string;
  time_in_forces?: string;
  sort_by?: string;
};

// List Fills
export type ListFillsOptionalQueryParams = {
  order_ids?: string[];
  trade_ids?: string[];
  product_ids?: string[];
  start_sequence_timestamp?: string;
  end_sequence_timestamp?: string;
  retail_portfolio_id?: string;
  limit?: number;
  cursor?: string;
  sort_by?: string;
};

// Get Order
export type GetOrderRequiredPathParams = {
  order_id: string;
};

// Preview Order

// Close Position
export type ClosePositionRequiredBodyParams = {
  client_order_id: string;
  product_id: string;
};

export type ClosePositionOptionalBodyParams = {
  size?: string;
};

// Misc.
export type TradeIncentiveMetadata = {
  user_incentive_id: string;
  code_val: string;
};
