export type ClientConfig = {
  baseURL: string;
  defaultHeaders?: Headers;
  defaultTimeout?: number;
  middlewares?: Middleware[];
  store?: ReturnType<typeof createStore>;
};
