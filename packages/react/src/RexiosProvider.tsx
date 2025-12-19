import { createContext } from 'react';
import type { RexiosProviderProps, RexiosContextType } from './types';

const RexiosContext = createContext<RexiosContextType | undefined>(undefined);

export const RexiosProvider = ({
  children,
  client,
}: // cacheStore,
// persist,
RexiosProviderProps) => {
  return (
    <RexiosContext.Provider value={{ client }}>
      {children}
    </RexiosContext.Provider>
  );
};
