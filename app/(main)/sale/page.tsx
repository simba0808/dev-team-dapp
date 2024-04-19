import USDTTransferWidget from '@/app/(main)/swap/UsdtTransfer';
import SwapWidget from '@/app/(main)/swap/SwapWidget';
import BalanceCard from '@/lib/components/cards/BalanceCard';
import Button from '@/lib/components/button/Button';
import BorderContainer from '@/lib/components/BorderContainer';

const Sale = () => {
  return (
    <div className='relative pb-20'>
      <div className='max-w-screen-2xl mx-auto pt-40 px-8 sm:px-10 mb-12 text-white'>
        <div>
          <p className='hidden lg:block heading-h2 mb-16 text-left'>Private Sale</p>
          <div className='w-full flex gap-4 sm:gap-10 justify-between'>
            <BalanceCard type='Current RFT balance' amount={0} color='blue' position='middle-left' size='large' />
            <BalanceCard token={false} type='Current usdt balance' amount={0} color='blue' position='bottom-right' size='large' />
          </div>
          <div className='w-full flex gap-2 sm:gap-10 mt-10 sm:mt-20 justify-between'>
            <BalanceCard type='RFT received' amount={0} color='green' position='bottom-left' />
            <BalanceCard type='RFT claimed' amount={0} color='green' />
            <BalanceCard type='RFT pending' amount={0} color='green' position='top-right' />
          </div>
        </div>

        <div className='mt-16 lg:mt-32'>
          <p className='lg:hidden heading-h2 mb-4 lg:mb-16 text-center'>Private Sale</p>
          <div className='border border-slate-400 rounded-3xl bg-black/20 backdrop-blur-lg'>
            <div className='lg:max-w-[90%] px-4 py-8 lg:px-6 lg:py-16 mx-auto'>
              <p className='mb-8 lg:mb-16 text-landing-content text-center lg:text-left font-bold'>Private Sale</p>
              <BorderContainer className='rounded-md lg:rounded-2xl'>
                <div className='p-[2px] lg:p-2 bg-[#05111C] rounded-md lg:rounded-2xl'>
                  <div className='w-[20%] h-[30px] lg:h-[50px] rounded-md lg:rounded-xl box-shadow bg-[#0D9BD2]'>

                  </div>
                </div>
              </BorderContainer>
              <div className='mt-8 lg:mt-14 flex justify-center lg:justify-end'>
                <Button className='px-10 py-2 lg:py-3 box-shadow text-[12px] lg:text-xl' variant='transparent' size='large'>
                  Buy Tokens
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-16'>
          <USDTTransferWidget />
        </div>
        <div className='mt-16'>
          <SwapWidget />
        </div>
      </div>

      <img src='/img/PatternBottomLeft.svg' className='lg:hidden -z-10 absolute bottom-10 w-[40%]' alt='pattern' />
      <img src='/img/PatternRight.svg' className='-z-10 absolute lg:top-0 top-[15%] right-0 lg:w-[25%] w-[40%] lg:translate-x-[20%] translate-x-[50%]' alt='pattern' />
      <img src='/img/PatternLeft.svg' className='hidden lg:block -z-10 absolute top-[50%] left-0 w-[30%] -translate-x-[10%] -translate-y-[80%]' alt='pattern' />
      <img src='/img/PatternLeft.svg' className='hidden lg:block -z-10 absolute top-[50%] left-0 w-[30%] -translate-x-[10%] -translate-y-[80%]' alt='pattern' />
    </div>
  );
};

export default Sale;