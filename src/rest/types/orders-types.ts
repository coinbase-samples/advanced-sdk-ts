// Create Order
import { ContractExpiryType, ProductType } from './common-types';

export type CreateOrderRequest = {
  // Body Params
  clientOrderId: string;
  productId: string;
  side: OrderSide;
  orderConfiguration: OrderConfiguration;
  selfTradePreventionId?: string;
  leverage?: string;
  marginType?: MarginType;
  retailPortfolioId?: string;
};

// Cancel Orders
export type CancelOrdersRequest = {
  // Body Params
  orderIds: string[];
};

// Edit Order
export type EditOrderRequest = {
  // Body Params
  orderId: string;
  price?: string;
  size?: string;
};

// Edit Order Preview
export type EditOrderPreviewRequest = {
  // Body Params
  orderId: string;
  price?: string;
  size?: string;
};

// List Orders
export type ListOrdersRequest = {
  // Query Params
  orderIds?: string[];
  productIds?: string[];
  orderStatus?: string[];
  limit?: number;
  startDate?: string;
  endDate?: string;
  orderType?: string;
  orderSide?: OrderSide;
  cursor?: string;
  productType?: ProductType;
  orderPlacementSource?: OrderPlacementSource;
  contractExpiryType?: ContractExpiryType;
  assetFilters?: string[];
  retailPortfolioId?: string;
  timeInForces?: string;
  sortBy?: SortBy;
};

// List Fills
export type ListFillsRequest = {
  // Query Params
  orderIds?: string[];
  tradeIds?: string[];
  productIds?: string[];
  startSequenceTimestamp?: string;
  endSequenceTimestamp?: string;
  retailPortfolioId?: string;
  limit?: number;
  cursor?: string;
  sortBy?: SortBy;
};

// Get Order
export type GetOrderRequest = {
  // Path Params
  orderId: string;
};

// Preview Order
export type PreviewOrderRequest = {
  // Body Params
  productId: string;
  side: OrderSide;
  orderConfiguration: OrderConfiguration;
  leverage?: string;
  marginType?: MarginType;
  retailPortfolioId?: string;
};

// Close Position
export type ClosePositionRequest = {
  // Body Params
  clientOrderId: string;
  productId: string;
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
  baseSize: string;
  limitPrice: string;
};

type LimitLimitGtc = {
  baseSize: string;
  limitPrice: string;
  postOnly: boolean;
};

type LimitLimitGtd = {
  baseSize: string;
  limitPrice: string;
  endTime: string;
  postOnly: boolean;
};

type LimitLimitFok = {
  baseSize: string;
  limitPrice: string;
};

type StopLimitStopLimitGtc = {
  baseSize: string;
  limitPrice: string;
  stopPrice: string;
  stopDirection: StopDirection;
};

type StopLimitStopLimitGtd = {
  baseSize: string;
  limitPrice: string;
  stopPrice: string;
  endTime: string;
  stopDirection: StopDirection;
};

type TriggerBracketGtc = {
  baseSize: string;
  limitPrice: string;
  stopTriggerPrice: string;
};

type TriggerBracketGtd = {
  baseSize: string;
  limitPrice: string;
  stopTriggerPrice: string;
  endTime: string;
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
