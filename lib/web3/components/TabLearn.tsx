'use client';
import {useState} from 'react';

import Button from '@/lib/components/button/Button';

type step = 0 | 1;

const TabLearn = () => {
  const [curStep, setCurStep] = useState<step>(0);

  const contents = [
    'A Web3 Wallet allows you to send and receive crypto assets like bitcoin, BNB, ETH, NFTs and much more.',
    'Instead of setting up new accounts and passwords for every website, simply set up your wallet in one go, and connect it to your favorite DApps.'
  ];

  return (
    <div className='relative w-full h-full flex border-[1px] border-gray-600 bg-dark-blue rounded-xl md:rounded-3xl text-white shadow-xl overflow-hidden'>
      <div className='z-10 w-full h-full md:max-w-[45%] flex flex-col items-center px-4 py-8 pb-16 mx-auto text-center'>
        <h3 className='text-center'>
          Your first step in the DeFi world
        </h3>
        <div className={`relative ${!curStep?'-left-10':''}`}>
          {
            !curStep ? 
              <>
                <img className='w-28 md:w-60 md:h-60 -rotate-12' src='/img/ProgYellow.svg' alt='ProgY'/>
                <img className='w-28 absolute inset-0 left-[50%] top-2 md:w-60 md:h-60 -rotate-12' src='/img/ProgBlue.svg' alt='ProgB' />
              </> :
              <img className='w-40 h-40 md:w-60 md:h-60' src='/img/wallet.svg' alt='wallet' />
          }
        </div>
        <p className='min-h-[100px] font-thin'>
          {contents[curStep]}
        </p>
        <div className='mb-8 flex gap-4'>
          <span className={`px-6 py-1 ${!curStep?'bg-sky-500':'bg-dark-blue'} rounded-l-md`} onClick={() => setCurStep(0)}></span>
          <span className={`px-6 py-1 ${curStep?'bg-sky-500':'bg-dark-blue'} rounded-r-md`} onClick={() => setCurStep(1)}></span>
        </div>
        <Button variant='transparent' size='large'>
          Learn How to Connect
        </Button>
      </div>
      <div className='absolute left-[50%] -translate-x-[50%] top-[50%] w-[500px] h-[500px] blue__gradient'>
      </div>
    </div>
  );
};

export default TabLearn;