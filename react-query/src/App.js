import React from 'react';
import './App.css';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import EllieMainProducts from './components/EllieMainProducts';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import MainProducts from './components/MyMainProducts';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <EllieMainProducts />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
