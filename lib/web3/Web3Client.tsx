'use client';
import React, {useEffect} from 'react';
import {EthereumClient, w3mConnectors, w3mProvider} from '@web3modal/ethereum';
import {Web3Modal} from '@web3modal/react';
import {WagmiConfig, configureChains, createConfig, useAccount, useQueryClient} from 'wagmi';
import {bsc} from '@wagmi/chains';

import queryClient from '@/lib/net/react-query/queryClient';

import type {ConnectorData} from 'wagmi';

const chains = [bsc];
const projectId = process.env.NEXT_PUBLIC_INFURA_KEY!;

const {publicClient} = configureChains(chains, [w3mProvider({projectId})]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({projectId, chains}),
  publicClient,
  queryClient,

  // TODO: verify it's ok
  persister: null,
  // storage: undefined,
});

const ethereumClient = new EthereumClient(wagmiConfig, chains);

const AccountConnectorTracker: React.FC<{ children: React.ReactNode }> = ({children}) => {
  const queryClient = useQueryClient();
  const {connector: activeConnector} = useAccount();

  useEffect(() => {
    const handleConnectorUpdate = ({account, chain}: ConnectorData) => {
      if (account) {
        queryClient.invalidateQueries();
        // console.log('new account', account)
      } else if (chain) {
        // console.log('new chain', chain)
      }
    };

    if (activeConnector) {
      activeConnector.on('change', handleConnectorUpdate);
    }

    return () => {
      activeConnector?.off('change', handleConnectorUpdate);
    };
  }, [queryClient, activeConnector]);

  return children;
};

const Web3Client: React.FC<{ children: React.ReactNode }> = ({children}) => {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <AccountConnectorTracker>
          {children}
        </AccountConnectorTracker>
      </WagmiConfig>

      <Web3Modal themeMode='dark' projectId={projectId} ethereumClient={ethereumClient}/>
    </>
  );
};

export default Web3Client;
