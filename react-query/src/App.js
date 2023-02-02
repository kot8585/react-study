import React from 'react';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query'
import MainProducts from './components/MainProducts';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainProducts />
    </QueryClientProvider>
  )
}
