// Create Order
import { ContractExpiryType, ProductType } from './common-types';

export type CreateOrderRequest = {
  // Body Params
  client_order_id: string;
  product_id: string;
  side: OrderSide;
  order_configuration: OrderConfiguration;
  self_trade_prevention_id?: string;
  leverage?: string;
  margin_type?: MarginType;
  retail_portfolio_id?: string;
};

// Cancel Orders
export type CancelOrdersRequest = {
  // Body Params
  order_ids: string[];
};

// Edit Order
export type EditOrderRequest = {
  // Body Params
  order_id: string;
  price?: string;
  size?: string;
};

// Edit Order Preview
export type EditOrderPreviewRequest = {
  // Body Params
  order_id: string;
  price?: string;
  size?: string;
};

// List Orders
export type ListOrdersRequest = {
  // Query Params
  order_ids?: string[];
  product_ids?: string[];
  order_status?: string[];
  limit?: number;
  start_date?: string;
  end_date?: string;
  order_type?: string;
  order_side?: OrderSide;
  cursor?: string;
  product_type?: ProductType;
  order_placement_source?: OrderPlacementSource;
  contract_expiry_type?: ContractExpiryType;
  asset_filters?: string[];
  retail_portfolio_id?: string;
  time_in_forces?: string;
  sort_by?: SortBy;
};

// List Fills
export type ListFillsRequest = {
  // Query Params
  order_ids?: string[];
  trade_ids?: string[];
  product_ids?: string[];
  start_sequence_timestamp?: string;
  end_sequence_timestamp?: string;
  retail_portfolio_id?: string;
  limit?: number;
  cursor?: string;
  sort_by?: SortBy;
};

// Get Order
export type GetOrderRequest = {
  // Path Params
  order_id: string;
};

// Preview Order
export type PreviewOrderRequest = {
  // Body Params
  product_id: string;
  side: OrderSide;
  order_configuration: OrderConfiguration;
  leverage?: string;
  margin_type?: MarginType;
  retail_portfolio_id?: string;
};

// Close Position
export type ClosePositionRequest = {
  // Body Params
  client_order_id: string;
  product_id: string;
  size?: string;
};

// Misc.
type OrderConfiguration =
  | { market_market_ioc: MarketMarketIoc }
  | { sor_limit_ioc: SorLimitIoc }
  | { limit_limit_gtc: LimitLimitGtc }
  | { limit_limit_gtd: LimitLimitGtd }
  | { limit_limit_fok: LimitLimitFok }
  | { stop_limit_stop_limit_gtc: StopLimitStopLimitGtc }
  | { stop_limit_stop_limit_gtd: StopLimitStopLimitGtd }
  | { trigger_bracket_gtc: TriggerBracketGtc }
  | { trigger_bracket_gtd: TriggerBracketGtd };

type MarketMarketIoc = { quote_size: string } | { base_size: string };

type SorLimitIoc = {
  base_size: string;
  limit_price: string;
};

type LimitLimitGtc = {
  base_size: string;
  limit_price: string;
  post_only: boolean;
};

type LimitLimitGtd = {
  base_size: string;
  limit_price: string;
  end_time: string;
  post_only: boolean;
};

type LimitLimitFok = {
  base_size: string;
  limit_price: string;
};

type StopLimitStopLimitGtc = {
  base_size: string;
  limit_price: string;
  stop_price: string;
  stop_direction: StopDirection;
};

type StopLimitStopLimitGtd = {
  base_size: string;
  limit_price: string;
  stop_price: string;
  end_time: string;
  stop_direction: StopDirection;
};

type TriggerBracketGtc = {
  base_size: string;
  limit_price: string;
  stop_trigger_price: string;
};

type TriggerBracketGtd = {
  base_size: string;
  limit_price: string;
  stop_trigger_price: string;
  end_time: string;
};

// Misc.
enum OrderSide {
  BUY = 'BUY',
  SELL = 'SELL',
}

enum StopDirection {
  UP = 'STOP_DIRECTION_STOP_UP',
  DOWN = 'STOP_DIRECTION_STOP_DOWN',
}

enum MarginType {
  CROSS = 'CROSS',
  ISOLATED = 'ISOLATED',
}

enum OrderPlacementSource {
  UNKNOWN = 'UNKNOWN_PLACEMENT_SOURCE',
  RETAIL_SIMPLE = 'RETAIL_SIMPLE',
  RETAIL_ADVANCED = 'RETAIL_ADVANCED',
}

enum SortBy {
  UNKNOWN = 'UNKNOWN_SORT_BY',
  LIMIT_PRICE = 'LIMIT_PRICE',
  LAST_FILL_TIME = 'LAST_FILL_TIME',
}
