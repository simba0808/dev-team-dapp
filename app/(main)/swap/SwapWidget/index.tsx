'use client';
import {useAccount} from 'wagmi';

import useAuthSession from '@/lib/auth/hooks/useAuthSession';
import Selector from '@/lib/components/selector/Selector';
import Button from '@/lib/components/button/Button';
import SiweButton from '@/app/signin/SiweButton';
import BorderContainer from '@/lib/components/BorderContainer';

const SwapWidget = () => {
  const {session} = useAuthSession('siwe');
  const {address: account, isConnected} = useAccount();

  return (
    <div className='w-full overflow-hidden text-white text-center'>
      <p className='text-3xl md:text-5xl'><span className='text-4xl md:text-6xl'>T</span>oken <span className='text-4xl md:text-6xl'>S</span>wap</p>
      <p className='py-2'>Select tokens. Type amount. Press Swap. Confirm</p>
      <BorderContainer className='mt-10'>
        <div className='py-10 flex flex-col gap-4 text-lg md:text-2xl bg-dark-blue rounded-2xl'>
          <div className='w-full px-4 sm:px-10'>
            <h2 className='mb-4 text-4xl'>PROF Swap</h2>
            <div>
              <div className='flex justify-between text-[20px]'>
                <span>You PAY</span>
                <span>BALANCE: 0</span>
              </div>
              <div className='flex items-center w-full shadow-lg px-3 sm:px-8 py-4 my-2 rounded-xl bg-[#05111C]'>
                <Selector />
              </div>
            </div>
            <div className='my-4 flex justify-center'>
              <span className='flex flex-col gap-2'>
                <span>
                  <img className='w-8' src='/img/ArrowUp.svg' alt='up' />
                </span>
                <span>
                  <img className='w-8' src='/img/ArrowDown.svg' alt='down' />
                </span>
              </span>
            </div>
            <div className='mb-8'>
              <div className='flex justify-between text-[20px]'>
                <span>You Receive</span>
                <span>BALANCE: 0</span>
              </div>
              <div className='flex items-center w-full shadow-lg px-3 sm:px-8 py-4 my-2 rounded-xl bg-[#05111C]'>
                <Selector />
              </div>
            </div>
            <div className='mt-4'>
              {
                isConnected && session ? (
                  <Button className='px-10 py-3 box-shadow' variant='transparent' size='large'>
                    Swap
                  </Button>
                ) : (
                  session ? 
                    <Button className='box-shadow' variant='transparent' size='large'>
                      Connect Wallet
                    </Button> :
                    <SiweButton />
                )
              }
            </div>
          </div>
        </div>
      </BorderContainer>
    </div>
  );
};

export default SwapWidget;