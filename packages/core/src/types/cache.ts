export type CacheKey = string;

export type CacheStatus = 'idle' | 'loading' | 'success' | 'error';

export type CacheEntry<T> = {
  status: CacheStatus;
  data?: T;
  error?: Error;
  expiresAt?: number;
  updatedAt?: number;
  tags?: string[];
};

export type CacheStore<T> = {
  ///Get the cache entry
  get: (key: CacheKey) => Promise<CacheEntry<T> | undefined>;
  ///Set the cache entry
  set: (key: CacheKey, entry: CacheEntry<T>) => Promise<void>;
  ///Update the cache entry partially
  patch: (key: CacheKey, patch: Partial<CacheEntry<T>>) => void;
  ///Notify when the cache is updated
  subscribe: (key: CacheKey, callback: () => void) => void;
  ///Clear the cache
  clear: () => Promise<void>;
};
