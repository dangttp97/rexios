import type { Store } from 'redux';
import { rexiosCacheActions, REXIOS_CACHE_KEY } from './reducer';
import type { CacheEntry } from '@rexios/core';

export type CacheStore = {
  get: (key: string) => CacheEntry<any> | undefined;
  set: (key: string, entry: CacheEntry<any>) => void;
  patch: (key: string, patch: Partial<CacheEntry<any>>) => void;
  subscribe: (key: string, cb: () => void) => () => void;
};

export function createReduxCacheStore(opts: {
  store: Store;
  reducerKey?: string;
}): CacheStore {
  const reducerKey = opts.reducerKey ?? REXIOS_CACHE_KEY;
  const store = opts.store;

  const selectEntry = (state: any, key: string): CacheEntry<any> | undefined =>
    state?.[reducerKey]?.entries?.[key];

  return {
    get(key) {
      return selectEntry(store.getState(), key);
    },
    set(key, entry) {
      store.dispatch(rexiosCacheActions.setEntry(key, entry) as any);
    },
    patch(key, patch) {
      store.dispatch(rexiosCacheActions.patchEntry(key, patch) as any);
    },
    subscribe(key, cb) {
      let prev = selectEntry(store.getState(), key);
      return store.subscribe(() => {
        const next = selectEntry(store.getState(), key);
        if (next !== prev) {
          prev = next;
          cb();
        }
      });
    },
  };
}

export * from './reducer';
export * from './createInjectableStore';
export * from './ensureRexiosReducer';
