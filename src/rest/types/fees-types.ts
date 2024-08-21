import { ContractExpiryType, ProductType } from './common-types';

// Get Transactions Summary
export type GetTransactionsSummaryRequest = {
  // Query Params
  product_type?: ProductType;
  contract_expiry_type?: ContractExpiryType;
  product_venue?: ProductVenue;
};

// Misc.
enum ProductVenue {
  UNKNOWN = 'UNKNOWN_VENUE_TYPE',
  CBE = 'CBE',
  FCM = 'FCM',
  INTX = 'INTX',
}
