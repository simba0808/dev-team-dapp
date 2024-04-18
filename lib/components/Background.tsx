const LandingBackground = () => {
  return (
    <div className='h-full flex flex-col -z-10 absolute w-[100%] bg-dark-blue'>
      <div className='relative h-[100vh]'>
        <img className='w-[40%] absolute top-[70%] -translate-x-[50%] opacity-40' src='/img/PatternLeft.svg' alt='pattern1' />
        <img className='w-[20%] absolute top-[45%] lg:top-[100%] right-0 lg:-translate-y-[100%]' src='/img/PatternRight.svg' alt='pattern1' />
      </div>
      <div className='relative h-[100vh] overflow-x-clip'>
        <img className='w-[20%] lg:w-auto absolute top-[50%] lg:top-[100%] -translate-y-[50%] -translate-x-[20%]' src='/img/PatternMiddleLeft.svg' alt='pattern1' />
        <img className='w-[20%] absolute lg:top-[100%] right-0 translate-y-[50%] lg:-translate-y-[100%]' src='/img/PatternRight.svg' alt='pattern1' />
      </div>
      <div className='relative h-[80vh]'>
        <img className='hidden lg:block w-[20%] absolute top-[100%] -translate-y-[50%] -translate-x-[20%]' src='/img/PatternBottomLeft.svg' alt='pattern1' />
        <img className='hidden lg:block w-[20%] h-[60%] absolute top-[100%] right-0' src='/img/PatternBottomRight.svg' alt='pattern1' />
      </div>
      <div className='hidden lg:block relative h-[100vh] overflow-x-clip'>
      </div>
      <div className='relative grow overflow-clip'>
        <img className='h-[80%] absolute left-0 top-[20%] opacity-60' src='/img/FrameLeft.svg' alt='frame-left' />
        <img className='block lg:hidden w-[20%] h-[60%] absolute top-[10%] right-0' src='/img/PatternBottomRight.svg' alt='pattern1' />
        <img className='h-[60%] absolute right-0 top-[50%] lg:top-[10%]' src='/img/PatternBottom.svg' alt='pattern' />
      </div>
    </div>
  );
};

export default LandingBackground;