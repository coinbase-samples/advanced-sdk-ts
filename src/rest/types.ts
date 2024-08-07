type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export interface RequestOptions {
  method: HttpMethod; // Use the HttpMethod type for method
  endpoint: string;
  queryParams?: Record<string, any>; // Optional query parameters
  bodyParams?: Record<string, any>; // Optional body parameters
  isPublic: boolean; // Is this request public?
}

export type GetAccountRequiredQueryParams = {
  account_uuid: string;
};

export type ListAccountsOptionalQueryParams = {
  limit?: number;
  cursor?: string;
  retail_portfolio_id?: string;
};
