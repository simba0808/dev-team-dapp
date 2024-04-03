'use client';
import {useMemo} from 'react';
import Image from 'next/image';

import SwapWidget from '@/app/(main)/swap/SwapWidget';
import ReferralBoard from '@/lib/components/cards/ReferalCard';
import ProfCard from '@/lib/components/cards/ProfCard';
import Button from '@/lib/components/button/Button';
import MaskBackground3 from '@/public/img/MaskBackground3.svg';

import type {FC} from 'react';

const Landing: FC = () => {
  const BackgroundMask = useMemo(() => {
    return (
      <Image 
        src="/img/MaskBackground.svg"
        alt='mask'
        className='-z-10 object-cover'
        fill
      />
    );
  }, []);

  const BackgroundMask2 = useMemo(() => {
    return (
      <Image 
        src='/img/MaskBackground2.svg'
        alt='mask2'
        className='-z-10 object-cover'
        fill
      />
    );
  }, []);

  return (
    <div className='relative w-full'>
      <div className='z-10 relative sm:h-[100vh] py-32 sm:py-0 '>
        { BackgroundMask }
        <div className='max-w-screen-xl w-full h-full px-4 sm:px-10 mx-auto flex items-center'>
          <div className='flex md:justify-between items-center gap-8 py-10'>
            <div className='md:basis-1/3'>
              <h1 className='mb-4 text-4xl md:text-6xl xl:text-7xl font-medium text-white leading-[150%]'>ACCOUNT BALANCE</h1>
              <p className='mb-10 text-xl text-white '>Your PGS account token balance</p>
              <Button
                className='rounded-[3.5rem] box-shadow'
                variant='transparent'
                size='large'
              >
                Request Rewards Sync
              </Button>
            </div>
          </div>
          <div className='relative w-[500px] h-[500px] hidden md:flex items-center justify-center'>
            <div className='z-0 absolute left-[50%] top-[40%] -translate-x-[50%] -translate-y-[50%] w-full h-full yellow__gradient'></div>
            <img src='/img/Wallet.png' className='z-10' alt='wallet' />
          </div>
        </div>
      </div>
      
      <div className='z-10 relative py-6 sm:py-20'>
        { 
          BackgroundMask2
        }
        <SwapWidget />
      </div>
  
      <div className='relative py-6 sm:py-20'>
        <MaskBackground3 className='z-0 absolute -top-[30%] w-full h-full' />
        <div className='max-w-screen-xl w-full flex items-center justify-center px-4 sm:px-10 mx-auto'>
          <div className='w-full text-white flex flex-col items-center gap-4'>
            <p className='text-3xl md:text-5xl'><span className='text-4xl md:text-6xl'>R</span>EFERRAL <span className='text-4xl md:text-6xl'>S</span>TATS</p>
            <input type='text' className='max-w-[80%] w-full mx-auto py-2  bg-[#05111C] text-center rounded-md' defaultValue='Реферальная ссылка' />
            <ReferralBoard />
            <ProfCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;