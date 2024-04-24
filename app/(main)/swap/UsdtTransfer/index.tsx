'use client';
import {useCallback, useRef, useState} from 'react';
import {useAccount} from 'wagmi';
import {useWeb3Modal} from '@web3modal/react';
import {useBalance} from 'wagmi';

import useAuthSession from '@/lib/auth/hooks/useAuthSession';
import BorderContainer from '@/lib/components/BorderContainer';
import Button from '@/lib/components/button/Button';
import SiweButton from '@/app/signin/SiweButton';
import tokenList from '@/lib/wallet/TokenList';

const USDTTransferWidget = () => {
  const {session} = useAuthSession('siwe');
  const {address, isConnected} = useAccount();

  const [transferDirection, setTransferDirection] = useState(true);

  const {open} = useWeb3Modal();

  const modalOpened = useRef(false);

  const {data: usdtOnWallet} = useBalance({
    address: address,
    token: tokenList[1]?.tokenAddress,
  });

  const onReconnect = useCallback(async () => {
    if (!address) {
      // Clear WalletConnect and wagmi related data from localStorage
      localStorage.removeItem('walletconnect');
      localStorage.removeItem('wagmi.wallet');
      localStorage.removeItem('wagmi.store');
      localStorage.removeItem('wagmi.connected');
  
      modalOpened.current = true;
      await open(); // This should now prompt for connection as the previous session data is cleared
      return;
    }
  }, [address, open]);

  return (
    <div className='text-white text-center'>
      <h2 className='heading-h2 lg:mb-4'>Usdt transfers</h2>
      <p className="text-normal-content mb-6 lg:mb-10">Type the amount. Select Transfer direction</p>
      <div className='flex flex-col gap-2 lg:gap-4'>
        <BorderContainer>
          <div className='py-8 bg-dark-blue rounded-2xl backdrop-blur-2xl'>
            <p className='text-[12px] lg:text-[32px] font-bold uppercase'>USDT on platform</p>
            <p className='text-[18px] lg:text-[64px] font-bold'>$0,000</p>
          </div>
        </BorderContainer>
        <div className='relative h-8 lg:h-20 flex justify-between'>
          <div className='basis-1/3 h-full rounded-md lg:rounded-xl bg-[#05111C]'>
            <input 
              type='text' 
              className='w-full h-full inset-0 px-2 text-[12px] lg:text-[36px] text-center font-medium bg-transparent outline-none' 
              defaultValue={0}
            />
          </div>
          <div 
            className='absolute left-[50%] -translate-x-[50%] h-full aspect-square p-1 rounded-xl bg-gradient-to-r to-[#02A42F] from-[#59FF87] box-green-shadow'
            onClick={() => setTransferDirection(!transferDirection)}
          >
            <div className='size-full p-[1px] rounded-xl bg-gradient-to-r from-white to-[#06FC47]'>
              <div className='size-full p-1.5 lg:p-4 border-white bg-[#05FF48] rounded-xl'>
                <img src='/img/triangle.svg' className={`${transferDirection?'rotate-0':'rotate-180'} size-full`} alt='tri'/>
              </div>
            </div>
          </div>
          <Button 
            size='large' 
            variant='transparent' 
            className='h-full box-shadow text-[10px] lg:text-xl px-2 py-0 lg:py-4 lg:px-20 box-shadow rounded-md lg:rounded-2xl'
          >
            {transferDirection?'Deposit USDT':'Withdraw USDT'}
          </Button>
        </div>
        <BorderContainer>
          <div className='py-8 bg-dark-blue rounded-2xl backdrop-blur-2xl'>
            <p className='text-[12px] lg:text-[32px] font-bold mb-4 uppercase'>USDT on wallet</p>
            {
              isConnected && session ? (
                <p className='text-[18px] lg:text-[64px] font-bold'>
                  ${Number(usdtOnWallet?.formatted || 0).toLocaleString(undefined, {minimumFractionDigits: 3})}
                </p>
              ) : (
                session ? (
                  <Button 
                    className='box-shadow text-[12px] lg:text-xl px-8 py-3 lg:py-5 lg:px-20 rounded-md lg:rounded-2xl' 
                    size='large' 
                    variant='transparent'
                    onClick={onReconnect}
                  >
                    Connect Wallet
                  </Button>
                ) : (
                  <SiweButton className='box-shadow text-[12px] lg:text-xl px-8 py-3 lg:py-5 lg:px-20 rounded-md lg:rounded-2xl' />
                )
              )
            }
          </div>
        </BorderContainer>
        <p className='text-normal-content'>Press Transfer button. Confirm web3 transaction</p>
      </div>
    </div>
  );
};

export default USDTTransferWidget;