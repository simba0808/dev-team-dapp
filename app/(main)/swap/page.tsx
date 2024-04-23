'use client';
import USDTTransferWidget from './UsdtTransfer';
import SwapWidget from './SwapWidget';

const Swap = () => {
  return (
    <div className='relative pb-20'>
      <div className='max-w-screen-2xl mx-auto pt-40 px-8 sm:px-10 mb-12'>
        <USDTTransferWidget />
        <div className='w-full h-20'></div>
        <SwapWidget />
      </div>
      <img src='/img/PatternBottomLeft.svg' className='lg:hidden -z-10 absolute bottom-10 w-[40%]' alt='pattern' />
      <img src='/img/PatternRight.svg' className='lg:hidden -z-10 absolute top-[40%] right-0 w-[40%] translate-x-[50%]' alt='pattern' />
    </div>
  );
};

export default Swap;