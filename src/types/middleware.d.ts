import type { HttpMethod } from './request';

export type MiddlewareContext<T> = {
  url: string;
  method: HttpMethod;
  headers?: Headers;
  body?: Body;
  parsed?: T;
  response?: Response;
  retryCount: number;
};
