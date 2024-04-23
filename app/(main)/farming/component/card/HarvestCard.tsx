import BorderContainer from '@/lib/components/BorderContainer';

import CardHeader from './CardHeader';

const HarvestCard = ({min, max}) => {
  return (
    <BorderContainer>
      <div className='px-2 sm:px-4 lg:px-8 py-3 lg:py-6 bg-gradient-to-b from-green-400/30 to-transparent rounded-2xl text-[6px] lg:text-[14px] text-[#00FFEB]'>
        <CardHeader min={min} max={max} />
      </div>
    </BorderContainer>
  );
};

export default HarvestCard;