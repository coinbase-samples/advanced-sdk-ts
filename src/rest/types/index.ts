// src/types/index.ts

// Re-export all types from each module
export type * from './accounts-types';
export type * from './common-types';
export type * from './converts-types';
export type * from './dataAPI-types';
export type * from './fees-types';
export type * from './futures-types';
export type * from './orders-types';
export type * from './payments-types';
export type * from './perpetuals-types';
export type * from './portfolios-types';
export type * from './products-types';
export type * from './public-types';
export type * from './request-types';

export type ErrorResponse = {
  error: string;
  message: string;
  code: number;
};
