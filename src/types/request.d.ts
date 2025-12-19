export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
export type Headers = Record<string, string>;
export type Body = Record<string, any> | string | null;
export type QueryParams = Record<string, any>;
export type Params = Record<string, any>;

export type RequestOptions = {
  method: HttpMethod;
  headers?: Headers;
  body?: Body;
  queryParams?: QueryParams;
  params?: Params;
  timeout?: number;
};
