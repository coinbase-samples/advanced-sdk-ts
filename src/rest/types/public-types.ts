// Get Public Product Book
export type GetPublicProductBookRequest = {
  // Query Params
  product_id: string;
  limit?: number;
  aggregation_price_increment?: number;
};

// List Public Products
export type ListPublicProductsRequest = {
  // Query Params
  limit?: number;
  offset?: number;
  product_type?: string;
  product_ids?: string[];
  contract_expiry_type?: string;
  expiring_contract_status?: string;
  get_all_products?: boolean;
};

// Get Public Product
export type GetPublicProductRequest = {
  // Path Params
  product_id: string;
};

//Get Public Product Candles
export type GetPublicProductCandlesRequest = {
  // Path Params
  product_id: string;

  // Query Params
  start: string;
  end: string;
  granularity: string;
  limit?: number;
};

// Get Public Market Trades
export type GetPublicMarketTradesRequest = {
  // Path Params
  product_id: string;

  // Query Params
  limit: number;
  start?: string;
  end?: string;
};
