// Get Public Product Book
import {
  ContractExpiryType,
  ExpiringContractStatus,
  ProductType,
} from './common-types';

export type GetPublicProductBookRequest = {
  // Query Params
  productId: string;
  limit?: number;
  aggregationPriceIncrement?: number;
};

// List Public Products
export type ListPublicProductsRequest = {
  // Query Params
  limit?: number;
  offset?: number;
  productType?: ProductType;
  productIds?: string[];
  contractExpiryType?: ContractExpiryType;
  expiringContractStatus?: ExpiringContractStatus;
  getAllProducts?: boolean;
};

// Get Public Product
export type GetPublicProductRequest = {
  // Path Params
  productId: string;
};

//Get Public Product Candles
export type GetPublicProductCandlesRequest = {
  // Path Params
  productId: string;

  // Query Params
  start: string;
  end: string;
  granularity: string;
  limit?: number;
};

// Get Public Market Trades
export type GetPublicMarketTradesRequest = {
  // Path Params
  productId: string;

  // Query Params
  limit: number;
  start?: string;
  end?: string;
};
