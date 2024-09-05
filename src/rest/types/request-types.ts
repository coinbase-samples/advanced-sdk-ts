type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export interface RequestOptions {
  method: HttpMethod;
  endpoint: string;
  queryParams?: Record<string, any>;
  bodyParams?: Record<string, any>;
  isPublic: boolean;
}
