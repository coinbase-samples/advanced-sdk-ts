// Create Order
import {
  ContractExpiryType,
  MarginType,
  OrderConfiguration,
  OrderPlacementSource,
  OrderSide,
  ProductType,
  SortBy,
} from './common-types';

export type CreateOrderRequest = {
  // Body Params
  clientOrderId: string;
  productId: string;
  side: OrderSide;
  orderConfiguration: OrderConfiguration;
  selfTradePreventionId?: string;
  leverage?: string;
  marginType?: MarginType;
  retailPortfolioId?: string;
};

// Cancel Orders
export type CancelOrdersRequest = {
  // Body Params
  orderIds: string[];
};

// Edit Order
export type EditOrderRequest = {
  // Body Params
  orderId: string;
  price?: string;
  size?: string;
};

// Edit Order Preview
export type EditOrderPreviewRequest = {
  // Body Params
  orderId: string;
  price?: string;
  size?: string;
};

// List Orders
export type ListOrdersRequest = {
  // Query Params
  orderIds?: string[];
  productIds?: string[];
  orderStatus?: string[];
  limit?: number;
  startDate?: string;
  endDate?: string;
  orderType?: string;
  orderSide?: OrderSide;
  cursor?: string;
  productType?: ProductType;
  orderPlacementSource?: OrderPlacementSource;
  contractExpiryType?: ContractExpiryType;
  assetFilters?: string[];
  retailPortfolioId?: string;
  timeInForces?: string;
  sortBy?: SortBy;
};

// List Fills
export type ListFillsRequest = {
  // Query Params
  orderIds?: string[];
  tradeIds?: string[];
  productIds?: string[];
  startSequenceTimestamp?: string;
  endSequenceTimestamp?: string;
  retailPortfolioId?: string;
  limit?: number;
  cursor?: string;
  sortBy?: SortBy;
};

// Get Order
export type GetOrderRequest = {
  // Path Params
  orderId: string;
};

// Preview Order
export type PreviewOrderRequest = {
  // Body Params
  productId: string;
  side: OrderSide;
  orderConfiguration: OrderConfiguration;
  leverage?: string;
  marginType?: MarginType;
  retailPortfolioId?: string;
};

// Close Position
export type ClosePositionRequest = {
  // Body Params
  clientOrderId: string;
  productId: string;
  size?: string;
};
