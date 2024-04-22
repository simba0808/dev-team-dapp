import millify from 'millify';
import Big from 'big.js';

import {useAppSelector} from '@/lib/store/hooks';

import BorderContainer from '../BorderContainer';

const ProfCard = () => {
  const stats = useAppSelector(state => state.auth.referral_stats);

  return (
    <div className='w-full flex flex-col mt-6'>
      <BorderContainer className='shadow-2xl shadow-black/70'>
        <div className='z-10 relative w-full flex justify-between px-6 xs:px-10 lg:px-36 py-8 rounded-2xl text-center text-cyan font-semibold bg-dark-blue overflow-hidden'>
          <div className="absolute left-[50%] -translate-x-[50%] -top-[95%] w-[70%] lg:w-[30%] h-full green__gradient">
          </div>
          <div className='flex flex-col items-center justify-center'>
            <p className='text-[12px] sm:text-[24px] xl:text-[48px] lg:mb-4'>
              <span className='text-[12px] sm:text-[24px] xl:text-[48px]'>R</span>EFERRAL&nbsp;&nbsp;
              <span className='text-[12px] sm:text-[24px] xl:text-[48px]'>P</span>ARTNERS
            </p>
            <span className='text-[32px] lg:text-[64px]'>
              {
                millify(stats.total_counter, {
                  precision: 0,
                  locales: 'mfe',
                  lowercase: true,
                })
              }
            </span>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <p className='text-[12px] sm:text-[24px] xl:text-[48px] lg:mb-4'>
              <span className='text-[12px] sm:text-[24px] xl:text-[48px]'>RFT</span>&nbsp;&nbsp;
              <span className='text-[12px] sm:text-[24px] xl:text-[48px]'>E</span>ARNED
            </p>
            <span className='text-[32px] lg:text-[64px]'>
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