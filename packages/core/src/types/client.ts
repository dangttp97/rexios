import type { Middleware } from './middleware';
import type { RequestOptions } from './request';

export type RequestClientConfig<T = any> = {
  middlewares?: Middleware<T>[];
};

export type RequestClient = {
  request: <T = any>(options: RequestOptions) => Promise<T>;
};
