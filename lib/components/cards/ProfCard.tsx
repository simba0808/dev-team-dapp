import millify from 'millify';
import Big from 'big.js';

import {useAppSelector} from '@/lib/store/hooks';

const ProfCard = () => {
  const stats = useAppSelector(state => state.auth.referral_stats);

  return (
    <div className='max-w-[1024px] w-full flex flex-col mt-10'>
      <p className='text-center mt-4'>Your Referral performance</p>
      <div className='overflow-hidden relative w-full px-10 py-8 mt-6 grid grid-cols-1 sm:grid-cols-7 gap-10 sm:gap-4 border border-white rounded-2xl text-5xl text-center text-cyan font-semibold'>
        <div className="absolute left-[50%] -translate-x-[50%] -top-[95%] w-[30%] h-full green__gradient">
        </div>
        <div className='sm:col-span-3'>
          <p className='text-2xl sm:text-xl lg:text-2xl mb-4'>
            <span className='text-2xl lg:text-4xl'>R</span>EFERRAL&nbsp;&nbsp;
            <span className='text-2xl lg:text-4xl'>P</span>ARTNERS
          </p>
          <span>
            {
              millify(stats.total_counter, {
                precision: 0,
                locales: 'mfe',
                lowercase: true,
              })
            }
          </span>
        </div>
        <div className='sm:col-span-2'>
          <p className='text-2xl sm:text-xl lg:text-2xl mb-4'>
            <span className='text-2xl lg:text-4xl'>PROF</span>&nbsp;&nbsp;
            <span className='text-2xl lg:text-4xl'>E</span>ARNED
          </p>
          <span>
            {
              millify((new Big(stats.dimp_total)).toNumber(), {
                precision: 3,
                locales: 'mfe',
                lowercase: true,
              })
            }
          </span>
        </div>
        <div className='sm:col-span-2'>
          <p className='text-2xl sm:text-xl lg:text-2xl mb-4'>
            <span className='text-2xl lg:text-4xl'>PROF</span>&nbsp;&nbsp;
            <span className='text-2xl lg:text-4xl'>E</span>ARNED
          </p>
          <span>
            {
              millify((new Big(stats.dimp_total)).toNumber(), {
                precision: 3,
                locales: 'mfe',
                lowercase: true,
              })
            }
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfCard;