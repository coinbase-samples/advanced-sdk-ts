// Create Convert Quote
export type CreateConvertQuoteRequest = {
  // Body Params
  fromAccount: string;
  toAccount: string;
  amount: string;
  tradeIncentiveMetadata?: TradeIncentiveMetadata;
};

// Get Convert Trade
export type GetConvertTradeRequest = {
  // Path Params
  tradeId: string;

  //Query Params
  fromAccount: string;
  toAccount: string;
};

// Commit Convert Trade
export type CommitConvertTradeRequest = {
  // Path Params
  tradeId: string;

  // Body Params
  fromAccount: string;
  toAccount: string;
};

// Misc.
type TradeIncentiveMetadata = {
  userIncentiveId: string;
  codeVal: string;
};
