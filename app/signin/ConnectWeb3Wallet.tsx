'use client';
import useAuthSession from '@/lib/auth/hooks/useAuthSession';

import SiweButton from './SiweButton';

const ConnectWeb3Wallet = () => {
  const {session} = useAuthSession('siwe');

  if (session) {
    return (
      <div className="surfacepb-5">
        {
          session &&
          <div className="text-base text-center font-medium">
            Disconnect your Web3 wallet*
            <div className="text-xs mt-1 mb-3.5">*this action will Log you out</div>
          </div>
        }
        <SiweButton/>
      </div>
    );
  }

  return (
    <div className="surfacedrop-shadow-lg pb-5">
      {
        !session &&
        <div className="text-base text-center font-medium mb-3.5">
          Connect Web3 wallet for instant access
        </div>
      }
      <SiweButton/>
    </div>
  );
};

export default ConnectWeb3Wallet;