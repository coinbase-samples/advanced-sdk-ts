import { ContractExpiryType, ProductType } from './common-types';

// Get Transactions Summary
export type GetTransactionsSummaryRequest = {
  // Query Params
  productType?: ProductType;
  contractExpiryType?: ContractExpiryType;
  productVenue?: ProductVenue;
};

// Misc.
enum ProductVenue {
  UNKNOWN = 'UNKNOWN_VENUE_TYPE',
  CBE = 'CBE',
  FCM = 'FCM',
  INTX = 'INTX',
}
