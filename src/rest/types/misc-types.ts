// Create Convert Quote
export type TradeIncentiveMetadata = {
  user_incentive_id: string;
  code_val: string;
};

// Create Order, Preview Order
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
