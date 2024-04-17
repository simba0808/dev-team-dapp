const CircleUtilCard = () => {
  return (
    <div className='relative max-w-[720px] mx-auto aspect-square rounded-full bg-[#0A2238]'>
      <div className='w-full h-full rounded-full p-20 xs:p-32 lg:p-36'>
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
      <span className='md:text-[30px] xs:text-[24px] text-[18px] circle-top'>RESOLUT<br/>LAB</span>
      <span className='md:text-[30px] xs:text-[24px] text-[18px] circle-top-right'>RESOLUT<br/>DAPP</span>
      <span className='md:text-[30px] xs:text-[24px] text-[18px] circle-bottom-right'>RESOLUT<br/>DEV</span>
      <span className='md:text-[30px] xs:text-[24px] text-[18px] circle-bottom'>RESOLUT SMART<br/>CONTRACT</span>
      <span className='md:text-[30px] xs:text-[24px] text-[18px] circle-bottom-left'>RESOLUT<br/>TOKEN</span>
      <span className='md:text-[30px] xs:text-[24px] text-[18px] circle-top-left'>RESOLUT<br/>CHAIN</span>
    </div>
  );
};

export default CircleUtilCard;