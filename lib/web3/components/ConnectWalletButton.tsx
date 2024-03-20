'use client';
import { useCallback } from 'react';

import withDynamic from '@/lib/hoc/withDynamic';
import PrimaryButton from '@/components/buttons/PrimaryButton';

type WalletButtonProps = {
  onClick?: () => void;
};

const ConnectWalletButton = withDynamic<WalletButtonProps>(({
  onClick
}) => {
  const handleClick = useCallback(() => {
    
  }, [onClick]);

  return (
    <PrimaryButton
      size='normal'
      onClick={handleClick}
    >
      Connect Wallet
    </PrimaryButton>
  );
});

export default ConnectWalletButton;