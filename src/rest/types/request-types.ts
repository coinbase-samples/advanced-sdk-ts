export enum request {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export interface RequestOptions {
  method: request;
  endpoint: string;
  queryParams?: Record<string, any>;
  bodyParams?: Record<string, any>;
  isPublic: boolean;
}
