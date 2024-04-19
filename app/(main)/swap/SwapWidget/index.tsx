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
      <h2 className='heading-h2 lg:mb-4'>Token Swap</h2>
      <p className='text-normal-content mb-6 lg:mb-10'>Select tokens. Type amount. Press Swap. Confirm</p>
      <BorderContainer>
        <div className='py-8 flex flex-col gap-4 bg-dark-blue rounded-2xl'>
          <div className='w-full px-4 sm:px-10'>
            <h2 className='text-[12px] lg:text-[32px] font-bold uppercase'>RFD Swap</h2>
            <div>
              <div className='flex justify-between text-landing-content font-bold'>
                <span>You PAY</span>
                <span>BALANCE: 0</span>
              </div>
              <div className='flex justify-between items-center w-full shadow-lg px-3 sm:px-8 py-4 my-2 rounded-xl bg-[#05111C]'>
                <Selector />
                <div className='w-[100px] h-full rounded-xl bg-[#05111C]'>
                  <input type='text' className='w-full h-full inset-0 px-2 text-right bg-transparent outline-none' />
                </div>
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
              <div className='flex justify-between text-landing-content font-bold'>
                <span>You Receive</span>
                <span>BALANCE: 0</span>
              </div>
              <div className='flex justify-between items-center w-full shadow-lg px-3 sm:px-8 py-4 my-2 rounded-xl bg-[#05111C]'>
                <Selector />
                <div className='w-[100px] h-full rounded-xl bg-[#05111C]'>
                  <input type='text' className='w-full h-full inset-0 px-2 text-right bg-transparent outline-none' />
                </div>
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
                    <SiweButton className='box-shadow text-[12px] lg:text-xl px-8 py-3 lg:py-5 lg:px-20 rounded-md lg:rounded-2xl' />
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