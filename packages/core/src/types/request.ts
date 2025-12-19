export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
export type Headers = Record<string, string>;
export type Body = any;
export type QueryParams = Record<string, any>;

export type RequestOptions = {
  url: string;
  method: HttpMethod;
  headers?: Record<string, string>;
  body?: Body;
  query?: QueryParams;
  retryCount?: number;
};
