// Set Intraday Margin Setting
import { IntradayMarginSetting } from './common-types';

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
