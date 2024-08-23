export enum ProductType {
  UNKNOWN = 'UNKNOWN_PRODUCT_TYPE',
  SPOT = 'SPOT',
  FUTURE = 'FUTURE',
}

export enum ContractExpiryType {
  UNKNOWN = 'UNKNOWN_CONTRACT_EXPIRY_TYPE',
  EXPIRING = 'EXPIRING',
  PERPETUAL = 'PERPETUAL',
}

export enum ExpiringContractStatus {
  UNKNOWN = 'UNKNOWN_EXPIRING_CONTRACT_STATUS',
  UNEXPIRED = 'STATUS_UNEXPIRED',
  EXPIRED = 'STATUS_EXPIRED',
  ALL = 'STATUS_ALL',
}