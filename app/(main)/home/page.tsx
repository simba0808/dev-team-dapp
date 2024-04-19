'use client';
import {useMemo} from 'react';
import Image from 'next/image';

import ReferralBoard from '@/lib/components/cards/ReferalCard';
import ProfCard from '@/lib/components/cards/ProfCard';
import Button from '@/lib/components/button/Button';
import BalanceCard from '@/lib/components/cards/BalanceCard';

import type {FC} from 'react';

const Landing: FC = () => {
  const BackgroundMask = useMemo(() => {
    return (
      <Image 
        src="/img/MaskBackground.svg"
        alt='mask'
        className='-z-10 object-cover lg:block hidden'
        fill
      />
    );
  }, []);

  return (
    <div className='relative w-full text-white'>
      <section className='relative lg:h-[100vh] pt-32 pb-20 lg:py-0'>
        {BackgroundMask}
        <div className='max-w-screen-2xl w-full h-full px-8 sm:px-10 mx-auto flex items-center'>
          <div className='w-full flex justify-between'>
            <div className='hidden md:flex md:justify-between items-center gap-8 py-10'>
              <div className='md:basis-1/3'>
                <h1 className='mb-4 text-4xl md:text-6xl xl:text-7xl font-bold leading-[150%]'>
                  <p><span className='text-5xl md:text-7xl xl:text-8xl'>A</span>CCOUNT</p>
                  <p><span className='text-5xl md:text-7xl xl:text-8xl'>B</span>ALANCE</p>
                </h1>
                <p className='mb-10 text-[20px] font-thin'>Your Resolut account token balance</p>
                <div>
                  <Button
                    className='text-[1.5em] rounded-[3.5rem] box-shadow'
                    variant='transparent'
                    size='large'
                  >
                    Request Rewards Sync
                  </Button>
                  <p className='mt-4 ml-8 text-[16px] font-thin'>*sync rewards to withdraw earnings</p>
                </div>
              </div>
            </div>
            <div className='relative lg:w-[800px] lg:h-[703px] md:flex items-center justify-center'>
              <div className='-z-10 absolute left-[50%] top-[40%] -translate-x-[50%] -translate-y-[50%] w-[80%] h-[80%] light__blue__gradient'></div>
              <img className='-z-10 w-full h-full absolute left-0 right-0 top-0 bottom-0' src='/img/LetterGroup.svg' alt='letter' />
              <img src='/img/Wallet.svg' className='z-10 max-w-[75%] mx-auto lg:mx-0' alt='wallet' />
            </div>
          </div>
        </div>
        <div className='absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#071C2E] to-transparent'>
        </div>
        <img className='hidden lg:block z-10 w-[25%] absolute top-[100%] left-0 -translate-y-[50%] opacity-40' src='/img/PatternLeft.svg' alt='pattern' />
        <img className='block lg:hidden w-[25%] absolute top-[90%] right-0 -translate-y-[100%]' src='/img/PatternRight.svg' alt='pattern' />
      </section>
      
      <section className='relative max-w-screen-2xl px-8 sm:px-10 lg:pt-44 py-6 sm:py-20 mx-auto bg-dark-blue'>
        <div className='w-full flex gap-4 sm:gap-10 justify-between'>
          <BalanceCard type='Current token balance' amount={0} color='blue' position='middle-left' size='large' />
          <BalanceCard token={false} type='Current usdt balance' amount={0} color='blue' position='bottom-right' size='large' />
        </div>
        <div className='w-full flex gap-2 sm:gap-10 mt-10 sm:mt-20 justify-between'>
          <BalanceCard type='RFT received' amount={0} color='green' position='bottom-left' />
          <BalanceCard type='RFT claimed' amount={0} color='green' />
          <BalanceCard type='RFT pending' amount={0} color='green' position='top-right' />
        </div>
        <div className='flex justify-center mt-10'>
          <Button size='large' variant='transparent' className='box-shadow py-2 lg:py-4 px-12 lg:px-20' >
            Buy NFT
          </Button>
        </div>
        <img className='block lg:hidden w-[25%] absolute top-[50%] left-0 translate-y-[50%]' src='/img/PatternBottomLeft.svg' alt='pattern' />
      </section>
  
      <section className='relative py-6 sm:py-20 mx-auto mb-12'>
        <div className='max-w-screen-2xl w-full flex flex-col items-center gap-4 px-8 sm:px-10 mx-auto text-white'>
          <h2 className='heading-h2'>Referral stats</h2>
          <input type='text' className='max-w-[80%] w-full mx-auto py-2  bg-[#05111C] text-center rounded-md' defaultValue='Referral Link' />
          <p className='text-center mb-4'>Partners in your referral Structure</p>
          <ReferralBoard />
          <ProfCard />
          <div className='flex justify-center mt-10'>
            <Button size='large' variant='transparent' className='box-shadow py-2 lg:py-4 px-12 lg:px-20' >
              Referral
            </Button>
          </div>
        </div>
        <img className='block w-[25%] absolute top-0 right-0 -translate-y-[50%]' src='/img/PatternRight.svg' alt='pattern' />
        <img className='block lg:hidden w-[25%] absolute top-[50%] left-[-10%]' src='/img/PatternMiddleLeft.svg' alt='pattern' />
        <img className='block lg:hidden w-[25%] absolute bottom-0 right-0' src='/img/PatternBottomRight.svg' alt='pattern' />
      </section>
    </div>
  );
};

export default Landing;