'use client';
import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

import queryClient from './queryClient';

const QueryProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      { children }
    </QueryClientProvider>
  );
};

export default QueryProvider;