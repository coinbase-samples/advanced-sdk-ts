// Create Convert Quote
export type CreateConvertQuoteRequest = {
  // Body Params
  from_account: string;
  to_account: string;
  amount: string;
  trade_incentive_metadata?: TradeIncentiveMetadata;
};

// Get Convert Trade
export type GetConvertTradeRequest = {
  // Path Params
  trade_id: string;

  //Query Params
  from_account: string;
  to_account: string;
};

// Commit Convert Trade
export type CommitConvertTradeRequest = {
  // Path Params
  trade_id: string;

  // Body Params
  from_account: string;
  to_account: string;
};

// Misc.
export type TradeIncentiveMetadata = {
    user_incentive_id: string;
    code_val: string;
};
