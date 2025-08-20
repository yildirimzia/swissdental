// contexts/LoadingContext.tsx
"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LoadingContextType {
  isLanguageLoading: boolean;
  setLanguageLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};

interface LoadingProviderProps {
  children: ReactNode;
}

export const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
  const [isLanguageLoading, setIsLanguageLoading] = useState(false);

  const setLanguageLoading = (loading: boolean) => {
    setIsLanguageLoading(loading);
  };

  return (
    <LoadingContext.Provider value={{ isLanguageLoading, setLanguageLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};