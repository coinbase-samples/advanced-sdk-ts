// Set Intraday Margin Setting
export type SetIntradayMarginSettingRequest = {
  // Body Params
  setting?: IntradayMarginSetting;
};

// Get Current Margin Window
export type GetCurrentMarginWindowRequest = {
  // Query Params
  marginProfileType?: string;
};

// Get Futures Position
export type GetFuturesPositionRequest = {
  // Path Params
  productId: string;
};

// Schedule Futures Sweep
export type ScheduleFuturesSweepRequest = {
  // Body Params
  usdAmount?: string;
};

// Misc.
enum IntradayMarginSetting {
  UNSPECIFIED = 'INTRADAY_MARGIN_SETTING_UNSPECIFIED',
  STANDARD = 'INTRADAY_MARGIN_SETTING_STANDARD',
  INTRADAY = 'INTRADAY_MARGIN_SETTING_INTRADAY',
}
