'use client';
const CircleUtilCard = () => {
  return (
    <div className='relative max-w-[720px] w-[80%] lg:w-full mx-auto aspect-square rounded-full bg-[#0A2238]'>
      <div className='w-full h-full rounded-full p-16 sm:p-28 lg:p-36'>
        <div className='relative w-full h-full'>
          <div className='w-full h-1/2 rounded-tr-full rounded-tl-full shadow-inner-top'>
          </div>
          <div className='w-full h-1/2 rounded-tr-full rounded-tl-full shadow-inner-bottom rotate-180'>
          </div>
          <div className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
            <img  className='w-[100%] h-[100%]' src='/img/Intelligence.svg' alt='human' />
          </div>
        </div>
      </div>
      <span className='md:text-[30px] sm:text-[20px] text-[13px] circle-top'>RESOLUT<br/>LAB</span>
      <span className='md:text-[30px] sm:text-[20px] text-[13px] circle-top-right'>RESOLUT<br/>DAPP</span>
      <span className='md:text-[30px] sm:text-[20px] text-[13px] circle-bottom-right'>RESOLUT<br/>DEV</span>
      <span className='md:text-[30px] sm:text-[20px] text-[13px] circle-bottom'>RESOLUT SMART<br/>CONTRACT</span>
      <span className='md:text-[30px] sm:text-[20px] text-[13px] circle-bottom-left'>RESOLUT<br/>TOKEN</span>
      <span className='md:text-[30px] sm:text-[20px] text-[13px] circle-top-left'>RESOLUT<br/>CHAIN</span>
    </div>
  );
};

export default CircleUtilCard;