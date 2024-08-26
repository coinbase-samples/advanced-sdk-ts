// ----- ENUMS -----
export enum ProductType {
  UNKNOWN = 'UNKNOWN_PRODUCT_TYPE',
  SPOT = 'SPOT',
  FUTURE = 'FUTURE',
}

export enum ContractExpiryType {
  UNKNOWN = 'UNKNOWN_CONTRACT_EXPIRY_TYPE',
  EXPIRING = 'EXPIRING',
  PERPETUAL = 'PERPETUAL',
}

export enum ExpiringContractStatus {
  UNKNOWN = 'UNKNOWN_EXPIRING_CONTRACT_STATUS',
  UNEXPIRED = 'STATUS_UNEXPIRED',
  EXPIRED = 'STATUS_EXPIRED',
  ALL = 'STATUS_ALL',
}

export enum PortfolioType {
  UNDEFINED = 'UNDEFINED',
  DEFAULT = 'DEFAULT',
  CONSUMER = 'CONSUMER',
  INTX = 'INTX',
}

export enum MarginType {
  CROSS = 'CROSS',
  ISOLATED = 'ISOLATED',
}

export enum OrderPlacementSource {
  UNKNOWN = 'UNKNOWN_PLACEMENT_SOURCE',
  RETAIL_SIMPLE = 'RETAIL_SIMPLE',
  RETAIL_ADVANCED = 'RETAIL_ADVANCED',
}

export enum SortBy {
  UNKNOWN = 'UNKNOWN_SORT_BY',
  LIMIT_PRICE = 'LIMIT_PRICE',
  LAST_FILL_TIME = 'LAST_FILL_TIME',
}

export enum OrderSide {
  BUY = 'BUY',
  SELL = 'SELL',
}

export enum StopDirection {
  UP = 'STOP_DIRECTION_STOP_UP',
  DOWN = 'STOP_DIRECTION_STOP_DOWN',
}

export enum Granularity {
  UNKNOWN = 'UNKNOWN_GRANULARITY',
  ONE_MINUTE = 'ONE_MINUTE',
  FIVE_MINUTE = 'FIVE_MINUTE',
  FIFTEEN_MINUTE = 'FIFTEEN_MINUTE',
  THIRTY_MINUTE = 'THIRTY_MINUTE',
  ONE_HOUR = 'ONE_HOUR',
  TWO_HOUR = 'TWO_HOUR',
  SIX_HOUR = 'SIX_HOUR',
  ONE_DAY = 'ONE_DAY',
}

export enum ProductVenue {
  UNKNOWN = 'UNKNOWN_VENUE_TYPE',
  CBE = 'CBE',
  FCM = 'FCM',
  INTX = 'INTX',
}

export enum IntradayMarginSetting {
  UNSPECIFIED = 'INTRADAY_MARGIN_SETTING_UNSPECIFIED',
  STANDARD = 'INTRADAY_MARGIN_SETTING_STANDARD',
  INTRADAY = 'INTRADAY_MARGIN_SETTING_INTRADAY',
}

// ----- TYPES -----
export type Account = {
  uuid: string;
  name: string;
  currency: string;
  available_balance: Record<string, any>;
  default: boolean;
  active: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  type: Record<string, any>;
  ready: boolean;
  hold: Record<string, any>;
  retail_portfolio_id: string;
};

export type TradeIncentiveMetadata = {
  userIncentiveId: string;
  codeVal: string;
};

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
  baseSize: string;
  limitPrice: string;
};

export type LimitLimitGtc = {
  baseSize: string;
  limitPrice: string;
  postOnly: boolean;
};

export type LimitLimitGtd = {
  baseSize: string;
  limitPrice: string;
  endTime: string;
  postOnly: boolean;
};

export type LimitLimitFok = {
  baseSize: string;
  limitPrice: string;
};

export type StopLimitStopLimitGtc = {
  baseSize: string;
  limitPrice: string;
  stopPrice: string;
  stopDirection: StopDirection;
};

export type StopLimitStopLimitGtd = {
  baseSize: string;
  limitPrice: string;
  stopPrice: string;
  endTime: string;
  stopDirection: StopDirection;
};

export type TriggerBracketGtc = {
  baseSize: string;
  limitPrice: string;
  stopTriggerPrice: string;
};

export type TriggerBracketGtd = {
  baseSize: string;
  limitPrice: string;
  stopTriggerPrice: string;
  endTime: string;
};

export type RatConvertTrade = {
  id: string,
  status: Record<string, any>,
  user_entered_amount: Record<string, any>,
  amount: Record<string, any>,
  subtotal: Record<string, any>,
  total: Record<string, any>,
  fees: Record<string, any>,
  total_fee: Record<string, any>,
  source: Record<string, any>,
  target: Record<string, any>,
  unit_price: Record<string, any>,
  user_warnings: Record<string, any>,
  user_reference: string,
  source_curency: string,
  cancellation_reason: Record<string, any>,
  source_id: string,
  target_id: string,
  subscription_info: Record<string, any>,
  exchange_rate: Record<string, any>,
  tax_details: Record<string, any>,
  trade_incentive_info: Record<string, any>,
  total_fee_without_tax: Record<string, any>,
  fiat_denoted_total: Record<string, any>,
}
