import { createContext } from 'react';
import type { NetworkContextType, NetworkProviderProps } from './types/context';

const NetworkContext = createContext<NetworkContextType>(null!);

export const NetworkProvider = ({ children }: NetworkProviderProps) => {
  return (
    <NetworkContext.Provider value={null!}>{children}</NetworkContext.Provider>
  );
};
