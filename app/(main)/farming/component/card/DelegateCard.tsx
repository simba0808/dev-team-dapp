import BorderContainer from '@/lib/components/BorderContainer';

import CardHeader from './CardHeader';

const DelegateCard = ({id, min, max, arp, period}) => {
  return (
    <BorderContainer>
      <div className='px-2 sm:px-4 lg:px-8 py-3 lg:py-6 pb-5 lg:pb-10 bg-gradient-to-b from-green-400/30 to-transparent rounded-2xl text-[10px] lg:text-[18px] text-[#00FFEB]'>
        <CardHeader id={id} min={min} max={max} varient='large' />
        <div className='py-4 px-4 lg:py-6'>
          <div className='flex justify-between uppercase text-center'>
            <div>
              <p>ARP&nbsp;<span className='text-[#02ABEA]'>{arp}</span>%</p>
              <div className='mt-2'>
                <p className=''>Delegated RFT</p>
                <p className='text-[12px] lg:text-[36px] font-semibold leading-[100%]'>RFT 0</p>
              </div>
              <div className='mt-6'>
                <p>To Harvest</p>
                <p className='text-[12px] lg:text-[36px] font-semibold leading-[100%]'>RFT 0</p>
              </div>
            </div>
            <div>
              <p>Hold period: <span className='text-[#02ABEA]'>{period}</span> days</p>
              <div className='mt-2'>
                <p className=''>In Hold</p>
                <p className='text-[12px] lg:text-[36px] text-[#00FF47] font-semibold leading-[100%]'>RFT 0</p>
              </div>
              <div className='mt-6'>
                <p>Total Reward</p>
                <p className='text-[12px] lg:text-[36px] font-semibold leading-[100%]'>RFT 0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BorderContainer>
  );
};

export default DelegateCard;