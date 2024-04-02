import MaskMaker from '@/lib/components/MaskMaker';

const Background = () => {
  return (
    <div className='z-0 relative w-full min-h-[200vh]'>
      <img className='z-10 absolute -left-[50%] top-[50vh] translate-x-[50%] w-[1000px] h-[600px]' src='/img/mesh.svg' alt='mesh' />
      <MaskMaker className='opacity-30' position='top-left' width={600} height={600} color='white' />
      <MaskMaker className='opacity-50 -translate-x-[60%]' position='middle-left' width={600} height={600} />
      <div className='absolute right-0 top-[100vh] translate-x-[60%] -translate-y-[50%]'>
        <div className='flex justify-center items-center bg-[#00AEEF] opacity-5 w-[900px] h-[900px] rounded-full'>
          <div className='bg-dark-blue w-[600px] h-[600px] rounded-full'>
          </div>
        </div>
      </div>
      <img className='z-10 absolute right-0 top-[100vh] translate-x-[30%] w-[1000px] h-[600px] rotate-180' src='/img/mesh.svg' alt='mesh' />
    </div>
  );
};

export default Background;