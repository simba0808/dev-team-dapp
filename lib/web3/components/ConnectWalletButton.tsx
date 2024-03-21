'use client';
import { useCallback } from 'react';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useAccount, useDisconnect } from 'wagmi';

import withDynamic from '@/lib/hoc/withDynamic';
import PrimaryButton from '@/components/buttons/PrimaryButton';

type WalletButtonProps = {
  onClick?: () => void;
};

const ConnectWalletButton = withDynamic<WalletButtonProps>(({
  onClick
}) => {
  const { address } = useAccount();
  const { open } = useWeb3Modal();
  const { disconnect } = useDisconnect();

  const handleClick = useCallback(() => {
    if(address) {
      disconnect();
    } else {
      open();
    }
  }, [address, onClick]);

  return (
    <PrimaryButton
      size='normal'
      onClick={handleClick}
    >
      {
        address 
          ? `${address?.slice(0, 4)}...${address?.slice(-4)}`
          : 'Connect Wallet'
      }
    </PrimaryButton>
  );
});

export default ConnectWalletButton;