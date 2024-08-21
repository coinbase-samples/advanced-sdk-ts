// Set Intraday Margin Setting
export type SetIntradayMarginSettingRequest = {
  // Body Params
  setting?: string;
};

// Get Current Margin Window
export type GetCurrentMarginWindowRequest = {
  // Query Params
  margin_profile_type?: string;
};

// Get Futures Position
export type GetFuturesPositionRequest = {
  // Path Params
  product_id: string;
};

// Schedule Futures Sweep
export type ScheduleFuturesSweepRequest = {
  // Body Params
  usd_amount?: string;
};
