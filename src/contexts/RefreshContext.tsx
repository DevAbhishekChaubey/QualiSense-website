'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface RefreshContextType {
  refresh: number;
  triggerRefresh: () => void;
}

const RefreshContext = createContext<RefreshContextType | undefined>(undefined);

export function RefreshProvider({ children }: { children: ReactNode }) {
  const [refresh, setRefresh] = useState(0);

  const triggerRefresh = () => {
    setRefresh(prev => prev + 1);
  };

  return (
    <RefreshContext.Provider value={{ refresh, triggerRefresh }}>
      {children}
    </RefreshContext.Provider>
  );
}

export function useRefresh() {
  const context = useContext(RefreshContext);
  if (!context) {
    throw new Error('useRefresh must be used within a RefreshProvider');
  }
  return context;
}
