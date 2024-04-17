const LandingBackground = () => {
  return (
    <div className='-z-10 absolute w-[100%] bg-dark-blue'>
      <div className='relative h-[100vh]'>
        <img className='w-[50%] absolute top-[100%] -translate-y-[100%] lg:-translate-y-[50%] -translate-x-[50%] opacity-40' src='/img/PatternLeft.svg' alt='pattern1' />
        <img className='w-[30%] absolute top-[45%] lg:top-[100%] right-0 lg:-translate-y-[100%]' src='/img/PatternRight.svg' alt='pattern1' />
      </div>
      <div className='relative h-[100vh] overflow-x-clip'>
        <img className='w-[20%] lg:w-auto absolute top-[50%] lg:top-[100%] -translate-y-[50%] -translate-x-[20%]' src='/img/PatternMiddleLeft.svg' alt='pattern1' />
        <img className='w-[20%] absolute lg:top-[100%] right-0 translate-y-[50%] lg:-translate-y-[100%]' src='/img/PatternRight.svg' alt='pattern1' />
        <img src='/img/Frame.svg' className='absolute top-[10%] lg:top-[-40%] lg:scale-100 scale-150 rotate-45' alt='circle' />
      </div>
      <div className='relative h-[100vh]'>
        <img className='absolute top-[100%] -translate-y-[50%] -translate-x-[20%]' src='/img/PatternBottomLeft.svg' alt='pattern1' />
        <img className='absolute top-[100%] right-0 -translate-y-[50%] rihgt' src='/img/PatternBottomRight.svg' alt='pattern1' />
      </div>
      <div className='relative h-[100vh] overflow-x-clip'>
      </div>
      <div className='relative h-[180vh] overflow-x-clip'>
        <img className='absolute left-0 top-[-10%] opacity-60' src='/img/FrameLeft.svg' alt='frame-left' />
        <img className='h-full absolute left-[50%] -translate-x-[50%] top-[0%]' src="/img/FrameBottom.svg" alt='frame-bottom' />
        <img className='absolute right-0 top-[10%]' src='/img/PatternBottom.svg' alt='pattern' />
      </div>
    </div>
  );
};

export default LandingBackground;