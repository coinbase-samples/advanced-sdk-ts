import { ContractExpiryType, ProductType, ProductVenue } from './common-types';

// Get Transactions Summary
export type GetTransactionsSummaryRequest = {
  // Query Params
  productType?: ProductType;
  contractExpiryType?: ContractExpiryType;
  productVenue?: ProductVenue;
};
