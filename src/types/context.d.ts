export type NetworkContextType = {
  queryClient: ReturnType<typeof createQueryClient>;
};

export type NetworkProviderProps = React.PropsWithChildren<{
  store?: ReturnType<typeof createStore>;
}>;

export type MiddlewareContextType = {
  url: string;
  method: HttpMethod;
  headers?: Headers;
  body?: Body;
  queryParams?: QueryParams;
  params?: Params;
  timeout?: number;
};
