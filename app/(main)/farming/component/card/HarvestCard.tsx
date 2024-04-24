'use client';
import {useState} from 'react';

import BorderContainer from '@/lib/components/BorderContainer';

import RangeSlider from '../slider/RangeSlider';

const HarvestCard = ({id, min, max}) => {
  const [harvestAmout, setHarvestAmount] = useState(0);

  return (
    <BorderContainer>
      <div className='px-12 lg:px-16 py-3 lg:py-6 pb-8 lg:pb-12 bg-gradient-to-b from-green-400/30 to-transparent rounded-2xl text-[10px] lg:text-[18px] text-[#00FFEB]'>
        <div className='text-center font-normal lg:font-light uppercase'>
          <h2 className='text-shadow-green text-[#00FF47] font-semibold text-[18px] lg:text-[36px]'>
            RFT FARM #{id}
          </h2>
          <p className='mt-4'>Set amount to HARVEST</p>
          <p className='mt-2'>Available: RFT 336 064 000</p>
          <p className='mt-4 text-white text-[20px] lg:text-[40px] font-bold'>${harvestAmout} RFT</p>
          <div className='py-2 lg:py-4'>
            <RangeSlider minVal={min} maxVal={max} curVal={harvestAmout} setCurVal={setHarvestAmount} />
          </div>
          <p>Harvesting amount step is RFT 100 000</p>
          <p className='mt-2'>COMPOUD up to RFT 5 000 000 000</p>
        </div>
      </div>
    </BorderContainer>
  );
};

export default HarvestCard;