'use client';
import CommissionData from './CommissionData.json';

import type {FC} from 'react';

const ProgressBar: FC<{percent: number}> = ({percent}) => {
  return (
    <div className='col-span-8 h-2 rounded-[6px] bg-[#0079A6]'>
      <div className='h-2 rounded-[6px] bg-[#02ABEB]' style={{width: `${percent}%`}}>

      </div>
    </div>
  );
};

const CommossionTable = () => {
  return (
    <div className='min-w-[675px] px-8 lg:px-16 py-6 border-[0.5px] border-white/20 rounded-2xl bg-gradient-to-r from-sky-600/40 to-transparent shadow-2xl'>
      <div className='grid grid-cols-12 mb-2 text-normal-content lg:text-[16px] xl:text-[20px] font-bold'>
        <div className='col-span-1 '>Line</div>
        <div className='col-span-3 text-center'>Commission</div>
        <div className='col-span-4 text-center'>Requirement for unlocking</div>
        <div className='col-span-4'>Rank volume (RV) count</div>
      </div>
      <div className='grid'>
        {
          CommissionData.map((commission, index) => {
            return (
              <div key={index}>
                <div className='grid grid-cols-12 text-[8px] lg:text-[14px] '>
                  <span className='col-span-1'>{`${commission.line} line`}</span>
                  <span className='col-span-3 text-center'>{`${commission.commission} %`}</span>
                  <div className='col-span-4 flex justify-center'>
                    <div className='max-w-[50%] w-full text-left'>
                      <span>{commission.line-3<1 ? '_':`${commission.line-3} Rank`}</span>
                      <span className='ml-5 lg:ml-14 text-light-cyan'>{commission.line-3<1 ? '':commission.requirement}</span>
                    </div>
                  </div>
                  <div className='col-span-4 grid grid-cols-12 items-center'>
                    <span className='col-span-4'>{`${commission.rv_count} %`}</span>
                    <ProgressBar percent={commission.rv_count} />
                  </div>
                </div>
                {
                  commission.line !== 14 &&
                    <div className='my-1.5 h-[1px] bg-gradient-to-r from-transparent via-90% via-white/25 to-transparent'></div>
                }
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default CommossionTable;