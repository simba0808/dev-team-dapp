import {useMemo} from 'react';

import {useAppSelector} from '@/lib/store/hooks';
import VectorCardIcon from '@/public/img/Vector.svg';

type ReferalProps = {
  level?: Number;
  count?: Number;
};

const ReferalCard: React.FC<ReferalProps> = ({level, count}) => {
  const CardImage = useMemo(() => {
    return (
      <VectorCardIcon className='w-30 h-30' />
    );
  }, []);

  return (
    <div className='flex sm:flex-col sm:items-center justify-center gap-4 text-white'>
      {CardImage}
      <div className='flex flex-col'>
        <span className='text-xl font-thin'>{`level ${level}`}</span>
        <span className='text-center text-5xl font-bold'>{`${count}`}</span>
      </div>
    </div>
  );
};

const ReferralBoard = () => {
  const refState = useAppSelector(state => state.auth.referral_stats);

  return (
    <div className='lg:max-w-[900px] w-full mx-auto'>
      <p className='text-center mt-4'>Partners in your referral Structure</p>
      <div className='w-full mt-6 sm:px-10 grid grid-cols-1 sm:grid-cols-3 justify-items-stretch gap-10 sm:gap-0'>
        <ReferalCard level={1} count={refState.lvl_one_counter} />
        <ReferalCard level={2} count={refState.lvl_two_counter} />
        <ReferalCard level={3} count={refState.lvl_three_counter} />
      </div>
    </div>
  );
};

export default ReferralBoard;