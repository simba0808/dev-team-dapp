import BorderContainer from '@/lib/components/BorderContainer';
import Button from '@/lib/components/button/Button';

const USDTTransferWidget = () => {
  return (
    <div className='text-white text-center'>
      <h2 className='heading-h2 lg:mb-4'>Usdt transfers</h2>
      <p className="text-normal-content mb-6 lg:mb-10">Type the amount. Select Transfer direction</p>
      <div className='flex flex-col gap-4'>
        <BorderContainer>
          <div className='py-8 bg-dark-blue rounded-2xl backdrop-blur-2xl'>
            <p className='text-[12px] lg:text-[32px] font-bold uppercase'>USDT on platform</p>
            <p className='text-[18px] lg:text-[64px] font-bold'>$0,000</p>
          </div>
        </BorderContainer>
        <div className='h-10 lg:h-20 flex justify-between'>
          <div className='basis-1/3 h-full rounded-xl bg-[#05111C]'>
            <input 
              type='text' 
              className='w-full h-full inset-0 px-2 text-[12px] lg:text-[36px] text-center font-medium rounded-x bg-transparent outline-none' 
              defaultValue={0}
            />
          </div>
          <div className='h-full aspect-square p-1 rounded-xl bg-gradient-to-r to-[#02A42F] from-[#59FF87] box-green-shadow'>
            <div className='size-full p-[1px] rounded-xl bg-gradient-to-r from-white to-[#06FC47]'>
              <div className='size-full p-1 lg:p-4 border-white bg-[#05FF48] rounded-xl'>
                <img src='/img/triangle.svg' className='size-full' alt='tri'/>
              </div>
            </div>
          </div>
          <Button size='large' variant='transparent' className='h-full box-shadow text-[12px] lg:text-xl px-8 py-3 lg:py-4 lg:px-20 box-shadow rounded-md lg:rounded-2xl'>Transfer USDT</Button>
        </div>
        <BorderContainer>
          <div className='py-8 bg-dark-blue rounded-2xl backdrop-blur-2xl'>
            <p className='text-[12px] lg:text-[32px] font-bold mb-4 uppercase'>USDT on wallet</p>
            <Button className='box-shadow text-[12px] lg:text-xl px-8 py-3 lg:py-5 lg:px-20 rounded-md lg:rounded-2xl' size='large' variant='transparent'>
              Connect Web3 Wallet
            </Button>
          </div>
        </BorderContainer>
        <p className='text-normal-content'>Press Transfer button. Confirm web3 transaction</p>
      </div>
    </div>
  );
};

export default USDTTransferWidget;