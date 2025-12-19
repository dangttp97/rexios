import type { RequestOptions } from '../types/request';

export const configureClient = () => {
  return {
    request: async (url: string, options: RequestOptions) => {
      const response = await fetch(url, options);
      return response.json();
    },
  };
};
