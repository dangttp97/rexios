import { createStore } from 'zustand';
import type { ZustandStore } from './types';
import type { CacheEntry, CacheKey, CacheStore } from '@rexios/core';

export const createZustandStore = (): CacheStore<any> => {
  const store = createStore<ZustandStore>(() => ({
    cache: {},
  }));

  return {
    get: async (key: CacheKey) => store.getState().cache[key],
    set: async (key: CacheKey, entry: CacheEntry<any>) =>
      store.setState({ cache: { ...store.getState().cache, [key]: entry } }),
    patch: async (key: CacheKey, partial: Partial<CacheEntry<any>>) =>
      store.setState((s) => ({
        cache: {
          ...s.cache,
          [key]: { ...s.cache[key]!, ...partial },
        },
      })),
    subscribe: async (key: CacheKey, callback: () => void) =>
      store.subscribe((s) => s.cache[key] && callback()),
    clear: async () => store.setState({ cache: {} }),
  };
};
