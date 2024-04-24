import BorderContainer from '@/lib/components/BorderContainer';

import FarmingCard from './component/card/FarmingCard';


const Farming = () => {


  return (
    <div className='relative pb-20'>
      <div className='max-w-screen-2xl mx-auto pt-40 lg:pt-48 px-8 sm:px-10 mb-12'>
        <BorderContainer className='hidden md:block'>
          <div className='flex justify-between px-6 xs:px-10 lg:px-36 py-8 text-center text-[12px] lg:text-[16px] text-[#00FFEB] font-light'>
            <div className='flex flex-col'>
              <span className='text-[36px] font-semibold'>0</span>
              <span>RFT ON BALANCE</span>
            </div>
            <div className='flex flex-col'>
              <span className='text-[36px] font-semibold'>0</span>
              <span>RFT Deligated</span>
            </div>
            <div className='flex flex-col'>
              <span className='text-[36px] font-semibold'>0</span>
              <span>RFT to Harvest</span>
            </div>
            <div className='flex flex-col'>
              <span className='text-[36px] font-semibold'>0</span>
              <span>RFT Total</span>
            </div>
          </div>
        </BorderContainer>
        <div className='md:hidden text-center text-[12px] text-[#00FFEB] font-light'>
          <BorderContainer>
            <div className='flex justify-between px-6 py-8'>
              <div className='flex flex-col'>
                <span className='text-[24px] font-semibold'>0</span>
                <span>RFT ON BALANCE</span>
              </div>
              <div className='flex flex-col'>
                <span className='text-[24px] font-semibold'>0</span>
                <span>RFT Deligated</span>
              </div>
            </div>
          </BorderContainer>
          <BorderContainer className='mt-2'>
            <div className='flex justify-between px-6 py-8'>
              <div className='flex flex-col'>
                <span className='text-[24px] font-semibold'>0</span>
                <span>RFT to Harvest</span>
              </div>
              <div className='flex flex-col'>
                <span className='text-[24px] font-semibold'>0</span>
                <span>RFT Total</span>
              </div>
            </div>
          </BorderContainer>
        </div>
      </div>
      <div className='max-w-screen-2xl grid lg:grid-cols-3 grid-cols-2 gap-2 lg:gap-10 mx-auto px-8 sm:px-10 mb-12'>
        <FarmingCard id={1} min={50} max={100} arp={100.01} period={180} />
        <FarmingCard id={2} min={1000} max={5000} arp={108} period={180} />
        <FarmingCard id={3} min={5000} max={10000} arp={120.01} period={180} />
        <FarmingCard id={4} min={10000} max={25000} arp={132} period={180} />
        <FarmingCard id={5} min={25000} max={50000} arp={144} period={180} />
        <FarmingCard id={6} min={50000} max={100000} arp={156} period={180} />
      </div>
    </div>
  );
};

export default Farming;