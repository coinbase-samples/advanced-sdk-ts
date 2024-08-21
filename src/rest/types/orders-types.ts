// Create Order
export type CreateOrderRequest = {
  // Body Params
  client_order_id: string;
  product_id: string;
  side: OrderSide;
  order_configuration: OrderConfiguration;
  self_trade_prevention_id?: string;
  leverage?: string;
  margin_type?: string;
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
  product_type?: string;
  order_placement_source?: string;
  contract_expiry_type?: string;
  asset_filters?: string[];
  retail_portfolio_id?: string;
  time_in_forces?: string;
  sort_by?: string;
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
  sort_by?: string;
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
  margin_type?: string;
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
export type OrderConfiguration =
    | { market_market_ioc: MarketMarketIoc }
    | { sor_limit_ioc: SorLimitIoc }
    | { limit_limit_gtc: LimitLimitGtc }
    | { limit_limit_gtd: LimitLimitGtd }
    | { limit_limit_fok: LimitLimitFok }
    | { stop_limit_stop_limit_gtc: StopLimitStopLimitGtc }
    | { stop_limit_stop_limit_gtd: StopLimitStopLimitGtd }
    | { trigger_bracket_gtc: TriggerBracketGtc }
    | { trigger_bracket_gtd: TriggerBracketGtd };

export type MarketMarketIoc = { quote_size: string } | { base_size: string };

export type SorLimitIoc = {
    base_size: string;
    limit_price: string;
};

export type LimitLimitGtc = {
    base_size: string;
    limit_price: string;
    post_only: boolean;
};

export type LimitLimitGtd = {
    base_size: string;
    limit_price: string;
    end_time: string;
    post_only: boolean;
};

export type LimitLimitFok = {
    base_size: string;
    limit_price: string;
};

export type StopLimitStopLimitGtc = {
    base_size: string;
    limit_price: string;
    stop_price: string;
    stop_direction: string;
};

export type StopLimitStopLimitGtd = {
    base_size: string;
    limit_price: string;
    stop_price: string;
    end_time: string;
    stop_direction: string;
};

export type TriggerBracketGtc = {
    base_size: string;
    limit_price: string;
    stop_trigger_price: string;
};

export type TriggerBracketGtd = {
    base_size: string;
    limit_price: string;
    stop_trigger_price: string;
    end_time: string;
};

enum OrderSide {
    BUY = "BUY",
    SELL = "SELL"
}