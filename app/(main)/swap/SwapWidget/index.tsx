'use client';
import {UpDownIcon} from '@chakra-ui/icons';
import {useAccount} from 'wagmi';

import useAuthSession from '@/lib/auth/hooks/useAuthSession';
import Selector from '@/lib/components/selector/Selector';
import Button from '@/lib/components/button/Button';
import SiweButton from '@/app/signin/SiweButton';

const SwapWidget = () => {
  const {session} = useAuthSession('siwe');
  const {address: account, isConnected} = useAccount();

  return (
    <div className='max-w-screen-xl w-full h-[100vh] overflow-hidden px-10 mx-auto text-white text-center'>
      <p className='text-5xl'><span className='text-6xl'>T</span>oken <span className='text-6xl'>S</span>wap</p>
      <p className='py-2'>Select tokens. Type amount. Press Swap. Confirm</p>
      <div className='py-10 mt-10 border border-white flex flex-col gap-4 text-lg md:text-2xl bg-black/5 rounded-2xl'>
        <div className='max-w-[90%] w-full mx-auto'>
          <h2 className='mb-4 text-4xl'>PROF Swap</h2>
          <div>
            <div className='flex justify-between'>
              <span>You PAY</span>
              <span>BALANCE: 0</span>
            </div>
            <div className='flex items-center w-full shadow-lg px-8 py-4 my-5 rounded-xl bg-[#05111C]'>
              <Selector />
            </div>
          </div>
          <div className='mb-4'>
            <UpDownIcon
              className="rotate-50  cursor-pointer"
              fontSize="2rem"
            />
          </div>
          <div>
            <div className='flex justify-between'>
              <span>You Receive</span>
              <span>BALANCE: 0</span>
            </div>
            <div className='flex items-center w-full shadow-lg px-8 py-4 my-5 rounded-xl bg-[#05111C]'>
              <Selector />
            </div>
          </div>
          <div>
            {
              isConnected && session ? (
                <Button className='px-10 py-2' variant='transparent' size='large'>
                  Swap
                </Button>
              ) : (
                session ? 
                  <Button variant='transparent' size='large'>
                    Connect Wallet
                  </Button> :
                  <SiweButton />
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwapWidget;