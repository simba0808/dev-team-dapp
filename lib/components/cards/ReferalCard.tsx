import {useMemo} from 'react';

import VectorCardIcon from '@/public/img/Vector.svg';

type ReferalProps = {
  level?: Number;
  count?: Number;
};

const ReferalCard: React.FC<ReferalProps> = ({level, count}) => {
  const CardImage = useMemo(() => {
    return (
      <VectorCardIcon />
    );
  }, []);

  return (
    <div className='flex flex-col items-center justify-center text-white'>
      { CardImage }
      <span className='mt-4 text-xl font-thin'>{`level ${level}`}</span>
      <span className='mt-6 text-5xl font-bold'>{`${count}`}</span>
    </div>
  );
};

export default ReferalCard;