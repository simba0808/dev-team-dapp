'use client';
import Big from 'big.js';
import {NumericFormat} from 'react-number-format';

import {useAppSelector} from '@/lib/store/hooks';
import BadgeRewardButton from '@/lib/components/button/BadgeRewardButton';
import DimpIcon from '@/public/img/dimp.svg';

const Balance = () => {
  const user = useAppSelector(state => state.auth.user);
  
  return (
    <div className='flex flex-col divide-y-[1px] divide-white text-white'>
      <div className='py-3'>
        <h3 className='text-center'>Active DIMP Balance</h3>
        <div className='flex flex-row justify-center'>
          <DimpIcon className='inline-block fill-current align-bottom drop-shadow-lg text-white' height={36} />
          <div className='text-3xl font-bold'>
            <span className='drop-shadow-lg text-3xl'>&nbsp;
              <NumericFormat
                value={(new Big(user?.dimp ?? 0)).round(3,0).toFixed(3)} displayType='text' thousandSeparator={' '}
              />
            </span>
          </div>
        </div>
      </div>
      <div className='py-3'>
        <h3 className='text-center'>DIMP Rewards</h3>
        <div className='flex flex-row justify-center mb-2'>
          <DimpIcon className='inline-block fill-current align-bottom drop-shadow-lg text-white' height={36} />
          <div className='text-3xl font-bold'>
            <span className='drop-shadow-lg text-3xl'>&nbsp;
              <NumericFormat
                value={(new Big(user?.rewards ?? 0)).round(3,0).toFixed(3)} displayType='text' thousandSeparator={' '}
              />
            </span>
          </div>
        </div>
        <BadgeRewardButton dimpRewards={user?.rewards || 0} />
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className='flex flex-col'>
      <Balance />
    </div>
  );
};

export default Home;