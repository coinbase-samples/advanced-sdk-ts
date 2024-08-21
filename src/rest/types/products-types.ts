// Get Best Bid Ask
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
  product_type?: string;
  product_ids?: string[];
  contract_expiry_type?: string;
  expiring_contract_status?: string;
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
  granularity: string;
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
