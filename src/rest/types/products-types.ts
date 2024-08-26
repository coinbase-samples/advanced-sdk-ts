// Get Best Bid Ask
import {
  ContractExpiryType,
  ExpiringContractStatus, Granularity,
  ProductType,
} from './common-types';

export type GetBestBidAskRequest = {
  // Query Params
  productIds?: string[];
};

// Get Product Book
export type GetProductBookRequest = {
  // Query Params
  productId: string;
  limit?: number;
  aggregationPriceIncrement?: number;
};

// List Products
export type ListProductsRequest = {
  // Query Params
  limit?: number;
  offset?: number;
  productType?: ProductType;
  productIds?: string[];
  contractExpiryType?: ContractExpiryType;
  expiringContractStatus?: ExpiringContractStatus;
  getTradabilityStatus?: boolean;
  getAllProducts?: boolean;
};

// Get Product
export type GetProductRequest = {
  // Path Params
  productId: string;

  // Query Params
  getTradabilityStatus?: boolean;
};

// Get Product Candles
export type GetProductCandlesRequest = {
  // Path Params
  productId: string;

  // Query Params
  start: string;
  end: string;
  granularity: Granularity;
  limit?: number;
};

// Get Market Trades
export type GetMarketTradesRequest = {
  // Path Params
  productId: string;

  // Query Params
  limit: number;
  start?: string;
  end?: string;
};
