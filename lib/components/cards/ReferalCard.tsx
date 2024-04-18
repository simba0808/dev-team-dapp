import {useMemo} from 'react';

import {useAppSelector} from '@/lib/store/hooks';

type ReferalProps = {
  level?: Number;
  count?: Number;
};

const ReferalCard: React.FC<ReferalProps> = ({level, count}) => {
  const CardImage = useMemo(() => {
    return (
      <img src='/img/Vector.svg' className='w-20 lg:w-[100%]' alt='vector' />
    );
  }, []);

  return (
    <div className='flex flex-col items-center justify-center gap-4 text-white'>
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
    <div className='lg:max-w-[800px] w-full mx-auto'>
      <div className='w-full mt-6 sm:px-10 flex justify-between gap-2 lg:gap-10 '>
        <ReferalCard level={1} count={refState.lvl_one_counter} />
        <ReferalCard level={2} count={refState.lvl_two_counter} />
        <ReferalCard level={3} count={refState.lvl_three_counter} />
      </div>
    </div>
  );
};

export default ReferralBoard;