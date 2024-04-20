'use client';
import JupiterForm from './Jupiter';

const SwapWidget = () => {

  return (
    <div className='w-full overflow-hidden text-white text-center'>
      <h2 className='heading-h2 lg:mb-4'>Token Swap</h2>
      <p className='text-normal-content mb-6 lg:mb-10'>Select tokens. Type amount. Press Swap. Confirm</p>
      <JupiterForm />
    </div>
  );
};

export default SwapWidget;