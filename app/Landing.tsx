'use client';
import { useMemo } from 'react';
import Image from 'next/image';

import ReferalCard from '@/components/cards/ReferalCard';
import ProfCard from '@/components/cards/ProfCard';
import PrimaryButton from '@/components/buttons/PrimaryButton';
import MaskBackground3 from '@/public/img/MaskBackground3.svg';
import Wallet from '@/public/img/Wallet.svg';

import type { FC } from 'react';

const Landing: FC = () => {
  const BackgroundMask = useMemo(() => {
    return (
      <Image 
        src="/img/MaskBackground.svg"
        alt='mask'
        className='object-cover'
        fill
      />
    );
  }, []);

  const BackgroundMask2 = useMemo(() => {
    return (
      <Image 
        src='/img/MaskBackground2.svg'
        alt='mask2'
        className='object-cover'
        fill
      />
    )
  }, []);

  // const BackgroundMask3 = useMemo(() => {
  //   return (
  //     <Image
  //       src='/img/MaskBackground3.svg'
  //       alt='mask3'
  //       className='absolute -top-24 object-cover'
  //       fill
  //     />
  //   );
  // }, []);

  return (
    <div className='relative w-full'>
      <div className='relative h-[100vh]'>
        { BackgroundMask }
        <div className='max-w-screen-xl w-full h-full mx-auto flex items-center'>
          <div className='w-full px-4 sm:px-10 flex md:justify-between items-center gap-8 py-16'>
            <div className='md:basis-1/3'>
              <h1 className='py-4 text-4xl md:text-6xl xl:text-7xl font-medium text-white leading-[150%]'>ACCOUNT BALANCE</h1>
              <p className='mb-10 text-xl text-white '>Your Actocracy account token balance</p>
              <PrimaryButton
                size='large'
              >
                Request Rewards Sync
              </PrimaryButton>
            </div>
            <div className='flex justify-end grow'>
              <div className='hidden md:block relative w-[100%] h-[500px]'>
                <Image src='/img/Wallet.svg' alt='wallet' className='object-cover' fill />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='relative h-[100vh]'>
        { 
          BackgroundMask2
        }
        <div className='max-w-screen-xl w-full h-full mx-auto'>
          
        </div>
      </div>
      <div className='relative py-6 sm:py-20'>
        <MaskBackground3 className='absolute -top-[30%] w-full h-full' />
        <div className='max-w-screen-xl w-full flex items-center justify-center mx-auto'>
          <div className='w-full px-4 text-white flex flex-col items-center gap-4'>
            <p className='text-center text-5xl'><span className='text-6xl'>R</span>EFERRAL <span className='text-6xl'>S</span>TATS</p>
            <input type='text' className='max-w-[80%] w-full mx-auto py-2  bg-[#05111C] text-center rounded-md' defaultValue='Реферальная ссылка' />
            <p>Partners in your referral Structure</p>
            <div className='w-full mt-6 sm:px-10 grid grid-cols-1 sm:grid-cols-3 justify-items-stretch gap-10 sm:gap-0'>
              <ReferalCard level={0} count={0} />
              <ReferalCard level={0} count={0} />
              <ReferalCard level={0} count={0} />
            </div>
            <p className='py-8'>Your Ambassador performance</p>
            <ProfCard partner={0} earnL={0} earnR={0} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;