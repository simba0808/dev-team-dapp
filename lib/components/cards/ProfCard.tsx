import millify from 'millify';
import Big from 'big.js';

import {useAppSelector} from '@/lib/store/hooks';

import BorderContainer from '../BorderContainer';

const ProfCard = () => {
  const stats = useAppSelector(state => state.auth.referral_stats);

  return (
    <div className='w-full flex flex-col mt-6'>
      <p className='hidden lg:block text-center mt-4'>Your Ambassador performance</p>
      <BorderContainer className='mt-6 shadow-2xl shadow-black/70'>
        <div className='z-10  relative w-full flex justify-between px-6 xs:px-10 lg:px-36 py-8 rounded-2xl text-5xl text-center text-cyan font-semibold bg-dark-blue overflow-hidden'>
          <div className="absolute left-[50%] -translate-x-[50%] -top-[95%] w-[30%] h-full green__gradient">
          </div>
          <div className=''>
            <p className='text-sm sm:text-xl xl:text-4xl mb-4'>
              <span className='text-lg sm:text-3xl xl:text-5xl'>R</span>EFERRAL&nbsp;&nbsp;
              <span className='text-lg sm:text-3xl xl:text-5xl'>P</span>ARTNERS
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
          <div className=''>
            <p className='text-sm sm:text-xl xl:text-4xl mb-4'>
              <span className='text-lg sm:text-3xl xl:text-5xl'>RFT</span>&nbsp;&nbsp;
              <span className='text-lg sm:text-3xl xl:text-5xl'>E</span>ARNED
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
      </BorderContainer>
    </div>
  );
};

export default ProfCard;