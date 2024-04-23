import BorderContainer from '@/lib/components/BorderContainer';
import Button from '@/lib/components/button/Button';

import CardHeader from './CardHeader';

const FarmingCard = ({min, max, arp}) => {
  return (
    <BorderContainer>
      <div className='px-2 sm:px-4 lg:px-8 py-3 lg:py-6 bg-gradient-to-b from-green-400/30 to-transparent rounded-2xl text-[6px] lg:text-[14px] text-[#00FFEB]'>
        <CardHeader min={min} max={max} />
        <div className='py-2 lg:py-4'>
          <div className='flex justify-between'>
            <div className=''>
              <p>Delegated RFT</p>
              <p className='text-[8px] lg:text-[24px] font-semibold'>RFT 0</p>
            </div>
            <div className='flex items-center'>
              <Button className='box-shadow px-2 py-1 lg:py-3 lg:px-6 text-[6px] lg:text-[14px] !rounded-full' variant='transparent' size='small'>DELEGATE</Button>
            </div>
          </div>
          <div className='flex justify-end my-1 lg:my-2 gap-x-2'>
            <p className='flex justify-center items-center text-right'>ARP&nbsp;<span className='text-[#02ABEA]'>{arp}</span>%</p>
            <div className='w-4 h-4 lg:w-6 lg:h-6 flex justify-center items-center border text-center text-[#00FF47] rounded-full'>?</div>
          </div>
          <div className='flex justify-between'>
            <div className=''>
              <p className=''>Delegated RFT</p>
              <p className='text-[8px] lg:text-[24px] text-[#00FF47] font-semibold'>RFT 0</p>
            </div>
            <div className='flex items-center'>
              <Button className='box-shadow px-2 py-1 lg:py-3 lg:px-6 text-[6px] lg:text-[14px] text-[#585252] bg-[#00FF47] box-green-shadow !rounded-full' variant='transparent' size='small'>HARVEST</Button>
            </div>
          </div>
        </div>
        <div className='flex justify-center mt-2 lg:mt-4'>
          <span className='hover:cursor-pointer'>See Details</span>
        </div>
      </div>
    </BorderContainer>
  );
};

export default FarmingCard;