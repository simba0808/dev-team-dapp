'use client';
import {useWeb3Modal} from '@web3modal/react';
import {signIn} from 'next-auth/react';
import {useSearchParams} from 'next/navigation';
import {useCallback, useEffect, useRef} from 'react';
import {useAccount, useNetwork, useSignMessage} from 'wagmi';

import ProviderButton from './ProviderButton';

import type { FC } from 'react';

const SIWE_PROVIDER = {
  id: 'siwe',
  name: 'SIWE'
};

type Props = {
};

const SiweButton: FC<Props> = ({}) => {
  const {address} = useAccount();
  return (
    <></>
  );
};

export default SiweButton;