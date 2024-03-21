'use client';
import { createWeb3Modal } from '@web3modal/wagmi/react';
import { WagmiProvider, State } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { config } from './config';

// import type { ConnectorData } from 'wagmi';
import { useEffect } from 'react';

const queryClient = new QueryClient()
const projectId = process.env.NEXT_PUBLIC_INFURA_KEY!;

// const ethereumClient = new EthereumClient(wagmiConfig, chains);

createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true // Optional - false as default
})

const Web3ModalProvider: React.FC<{ children: React.ReactNode, initialState?: State }> = ({children, initialState}) => {
  return (
    <>
      <WagmiProvider config={config} initialState={initialState}>
        <QueryClientProvider client={queryClient}>
          { children }
        </QueryClientProvider>
      </WagmiProvider>
    </>
  );
};

export default Web3ModalProvider;