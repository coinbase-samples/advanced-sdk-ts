import {
  Amount,
  OrderConfiguration,
  TradeIncentiveMetadata,
} from './misc-types';

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
export type CreateOrderRequiredBodyParams = {
  client_order_id: string;
  product_id: string;
  side: string;
  order_configuration: OrderConfiguration;
};

export type CreateOrderOptionalBodyParams = {
  self_trade_prevention_id?: string;
  leverage?: string;
  margin_type?: string;
  retail_portfolio_id?: string;
};

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
export type PreviewOrderRequiredBodyParams = {
  product_id: string;
  side: string;
  order_configuration: OrderConfiguration;
};

export type PreviewOrderOptionalBodyParams = {
  leverage?: string;
  margin_type?: string;
  retail_portfolio_id?: string;
};

// Close Position
export type ClosePositionRequiredBodyParams = {
  client_order_id: string;
  product_id: string;
};

export type ClosePositionOptionalBodyParams = {
  size?: string;
};

// Get Payment Method
export type GetPaymentMethodRequiredPathParams = {
  payment_method_id: string;
};

// Allocate Portfolio
export type AllocatePortfolioRequiredBodyParams = {
  portfolio_uuid: string;
  symbol: string;
  amount: string;
  currency: string;
};

// Get Perpetuals Portfolio Summary
export type GetPerpetualsPortfolioSummaryRequiredPathParams = {
  portfolio_uuid: string;
};

// List Perpetuals Positions
export type ListPerpetualsPositionsRequiredPathParams = {
  portfolio_uuid: string;
};

// Get Perpetuals Position
export type GetPerpetualsPositionRequiredPathParams = {
  portfolio_uuid: string;
  symbol: string;
};

// Get Portfolio Balances
export type GetPortfolioBalancesRequiredPathParams = {
  portfolio_uuid: string;
};

// Opt In or Out of Multi Asset Collateral
export type OptInOutMultiAssetCollateralOptionalBodyParams = {
  portfolio_uuid?: string;
  multi_asset_collateral_enabled?: boolean;
};

// List Portfolios
export type ListPortfoliosOptionalQueryParams = {
  portfolio_type?: string;
};

// Create Portfolio
export type CreatePortfolioRequiredBodyParams = {
  name: string;
};

// Move Portfolio Funds
export type MovePortfolioFundsRequiredBodyParams = {
  funds: Amount;
  source_portfolio_uuid: string;
  target_portfolio_uuid: string;
};

// Get Portfolio Breakdown
export type GetPortfolioBreakdownRequiredPathParams = {
  portfolio_uuid: string;
};

export type GetPortfolioBreakdownOptionalQueryParams = {
  currency?: string;
};

// Delete Portfolio
export type DeletePortfolioRequiredPathParams = {
  portfolio_uuid: string;
};

// Edit Portfolio
export type EditPortfolioRequiredPathParams = {
  portfolio_uuid: string;
};

export type EditPortfolioRequiredBodyParams = {
  name: string;
};

// Get Best Bid Ask
export type GetBestBidAskOptionalQueryParams = {
  product_ids?: string[];
};

// Get Product Book
export type GetProductBookRequiredQueryParams = {
  product_id: string;
};

export type GetProductBookOptionalQueryParams = {
  limit?: number;
  aggregation_price_increment?: number;
};

// List Products
export type ListProductsOptionalQueryParams = {
  limit?: number;
  offset?: number;
  product_type?: string;
  product_ids?: string[];
  contract_expiry_type?: string;
  expiring_contract_status?: string;
  get_tradability_status?: boolean;
  get_all_products?: boolean;
};

// Get Product
export type GetProductRequiredPathParams = {
  product_id: string;
};

export type GetProductOptionalQueryParams = {
  get_tradability_status?: boolean;
};

// Get Product Candles
export type GetProductCandlesRequiredPathParams = {
  product_id: string;
};

export type GetProductCandlesRequiredQueryParams = {
  start: string;
  end: string;
  granularity: string;
};

export type GetProductCandlesOptionalQueryParams = {
  limit?: number;
};

// Get Market Trades
export type GetMarketTradesRequiredPathParams = {
  product_id: string;
};

export type GetMarketTradesRequiredQueryParams = {
  limit: number;
};

export type GetMarketTradesOptionalQueryParams = {
  start?: string;
  end?: string;
};

// Get Public Product Book
export type GetPublicProductBookRequiredQueryParams = {
  product_id: string;
};

export type GetPublicProductBookOptionalQueryParams = {
  limit?: number;
  aggregation_price_increment?: number;
};

// List Public Products
export type ListPublicProductsOptionalQueryParams = {
  limit?: number;
  offset?: number;
  product_type?: string;
  product_ids?: string[];
  contract_expiry_type?: string;
  expiring_contract_status?: string;
  get_all_products?: boolean;
};

// Get Public Product
export type GetPublicProductRequiredPathParams = {
  product_id: string;
};

//Get Public Product Candles
export type GetPublicProductCandlesRequiredPathParams = {
  product_id: string;
};

export type GetPublicProductCandlesRequiredQueryParams = {
  start: string;
  end: string;
  granularity: string;
};

export type GetPublicProductCandlesOptionalQueryParams = {
  limit?: number;
};

// Get Public Market Trades
export type GetPublicMarketTradesRequiredPathParams = {
  product_id: string;
};

export type GetPublicMarketTradesRequiredQueryParams = {
  limit: number;
};

export type GetPublicMarketTradesOptionalQueryParams = {
  start?: string;
  end?: string;
};
