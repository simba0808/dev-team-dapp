'use client';
import {useWeb3Modal} from '@web3modal/react';
import {signIn} from 'next-auth/react';
import {useSearchParams} from 'next/navigation';
import {useCallback, useEffect, useRef} from 'react';
import {useAccount, useNetwork, useSignMessage} from 'wagmi';

import {authSiweDataInitialized} from '@/lib/store/auth/auth-slice';
import {useAppDispatch} from '@/lib/store/hooks';
import {authChallenge} from '@/lib/net/modules/auth';

import ProviderButton from './ProviderButton';

import type {FC} from 'react';

const SIWE_PROVIDER = {
  id: 'siwe',
  name: 'SIWE'
};

type Props = {
};

const SiweButton: FC<Props> = () => {
  const {address} = useAccount();
  const {chain} = useNetwork();
  const  {signMessageAsync} = useSignMessage();
  const {open} = useWeb3Modal();

  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();

  const modalOpened = useRef(false);

  const onSignIn = useCallback(async () => {
    console.log(address);
    if (!address) {
      localStorage.removeItem('walletconnect');
      localStorage.removeItem('wagmi.wallet');
      localStorage.removeItem('wagmi.store');
      localStorage.removeItem('wagmi.connected');
      
      modalOpened.current = true;
      open();
    } else {
      modalOpened.current = false;
    }

    try {
      const nonce = await authChallenge(address as string);

      const {SiweMessage} = await import('siwe');

      const siwe = new SiweMessage({
        domain: window.location.host,
        address: address,
        statement: 'Sign in with Ethereum to the app.',
        uri: window.location.origin,
        version: '1',
        chainId: chain?.id,
        nonce: nonce,
      });

      const message = siwe.prepareMessage();
      const signature = await signMessageAsync({message});
      dispatch(authSiweDataInitialized({message, signature}));

      signIn('siwe', {
        message: JSON.stringify(message),
        signature,
        callbackUrl: searchParams.get('callbackUrl') ?? undefined,
      });
    } catch (error) {
      console.log(error);
    }
  }, [address, chain, signMessageAsync, searchParams]);

  useEffect(() => {
    if (address && modalOpened.current) {
      onSignIn();
    }
  }, [address, onSignIn]);

  return (
    <div className='text-center'>
      <ProviderButton
        provider={SIWE_PROVIDER}
        onSignIn={onSignIn}
      />
    </div>
  );
};

export default SiweButton;