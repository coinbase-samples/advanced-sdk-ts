// Get Best Bid Ask
import {
  ContractExpiryType,
  ExpiringContractStatus,
  ProductType,
} from './common-types';

export type GetBestBidAskRequest = {
  // Query Params
  product_ids?: string[];
};

// Get Product Book
export type GetProductBookRequest = {
  // Query Params
  product_id: string;
  limit?: number;
  aggregation_price_increment?: number;
};

// List Products
export type ListProductsRequest = {
  // Query Params
  limit?: number;
  offset?: number;
  product_type?: ProductType;
  product_ids?: string[];
  contract_expiry_type?: ContractExpiryType;
  expiring_contract_status?: ExpiringContractStatus;
  get_tradability_status?: boolean;
  get_all_products?: boolean;
};

// Get Product
export type GetProductRequest = {
  // Path Params
  product_id: string;

  // Query Params
  get_tradability_status?: boolean;
};

// Get Product Candles
export type GetProductCandlesRequest = {
  // Path Params
  product_id: string;

  // Query Params
  start: string;
  end: string;
  granularity: Granularity;
  limit?: number;
};

// Get Market Trades
export type GetMarketTradesRequest = {
  // Path Params
  product_id: string;

  // Query Params
  limit: number;
  start?: string;
  end?: string;
};

// Misc.
enum Granularity {
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
