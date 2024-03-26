'use client';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

import Button from '@/lib/components/button/Button';

import type { FC } from 'react';
import type {ClientSafeProvider} from 'next-auth/react';
import { ButtonProps } from '@/lib/components/button/Button';

type Provider = 'siwe' | 'google';

const providersData: Record<Provider, { name: string; verb?: string; buttonVariant?:  ButtonProps['variant'] }> = {
  siwe: { name: 'Web3 Wallet', verb: 'Connect', buttonVariant: 'gradient' },
  google: { name: 'Google', verb: 'Connect' }
} as const;

type Props = {
  provider: Pick<ClientSafeProvider, 'id' | 'name'>;
  size?: 'small' | 'medium' | 'large';
  onSignIn?: () => void;
};

const ProviderButton: FC<Props> = ({provider, size='medium', onSignIn}) => {
  const searchParams = useSearchParams();

  const onClick = useCallback(() => {
    if(onSignIn) {
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
  const {buttonVariant = 'gradient', verb = 'Connect', name = provider.name} = providerData;
  return (
    <Button
      size={size}
      variant='transparent'
      onClick={onClick}
    >
      {verb} {name}
    </Button>
  );
};

export default ProviderButton;
