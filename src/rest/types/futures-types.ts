// Set Intraday Margin Setting
export type SetIntradayMarginSettingRequest = {
  // Body Params
  setting?: IntradayMarginSetting;
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

// Misc.
enum IntradayMarginSetting {
  UNSPECIFIED = 'INTRADAY_MARGIN_SETTING_UNSPECIFIED',
  STANDARD = 'INTRADAY_MARGIN_SETTING_STANDARD',
  INTRADAY = 'INTRADAY_MARGIN_SETTING_INTRADAY',
}
