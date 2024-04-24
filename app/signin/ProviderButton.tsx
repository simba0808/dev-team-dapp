'use client';
import {signIn} from 'next-auth/react';
import {useSearchParams} from 'next/navigation';
import {useCallback} from 'react';
import {twMerge} from 'tailwind-merge';

import useAuthSession from '@/lib/auth/hooks/useAuthSession';
import Button from '@/lib/components/button/Button';

import type {ButtonProps} from '@/lib/components/button/Button';
import type {ClientSafeProvider} from 'next-auth/react';
import type {FC} from 'react';

type Provider = 'siwe' | 'google';

const providersData: Record<Provider, { name: string; verb?: string; buttonVariant?:  ButtonProps['variant'] }> = {
  siwe: {name: 'Web3 Wallet', verb: 'Connect', buttonVariant: 'transparent'},
  google: {name: 'Google', verb: 'Connect'}
} as const;

type Props = {
  provider: Pick<ClientSafeProvider, 'id' | 'name'>;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  onHeader?: boolean;
  onSignIn?: () => void;
};

const ProviderButton: FC<Props> = ({provider, size='medium', className, onSignIn, onHeader}) => {
  const searchParams = useSearchParams();
  const {session, disconnect} = useAuthSession(provider.id as Provider);

  const onClick = useCallback(() => {
    alert(onHeader);
    if (session) {
      disconnect();
      return;
    }

    if (onSignIn) {
      onSignIn();
    } else {
      signIn(
        provider.id, {
          callbackUrl: searchParams.get('callbackUrl') ?? undefined
        }
      );
    }
  }, []);

  const providerData = providersData[provider.id as Provider];
  const {buttonVariant = 'transparent', verb = 'Connect', name = provider.name} = providerData;
  
  return (
    <Button
      size={size}
      variant={session ? 'gray' : buttonVariant}
      onClick={onClick}
      className={twMerge('box-shadow', className)}
    >
      {session ? 'Disconnect' : verb} {onHeader===true?'Wallet':name}
    </Button>
  );
};

export default ProviderButton;
