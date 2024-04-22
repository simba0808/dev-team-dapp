import {twMerge} from 'tailwind-merge';

import CommissionData from './CommissionData.json';

const RankTable = () => {
  return (
    <div className='min-w-[757px] border-[0.5px] border-white/20 rounded-xl lg:rounded-2xl bg-gradient-to-r from-sky-600/40 to-transparent shadow-2xl'>
      <div className='relative'>
        <div className='grid grid-rows-3'>
          <div className='rank-table-gradient-row-border'>
            {
              CommissionData.map((commission, index) => {
                if(commission.requirement !== '') {
                  return (
                    <div key={commission.requirement} className='flex justify-center items-center'>
                      <span className='py-6 text-[8px] md:text-[10px] xl:text-[14px] text-center font-bold'>
                        {commission.requirement}
                      </span>
                    </div>
                  );
                }
              })
            }
          </div>
          <div className='rank-table-gradient-row-border'>
            {
              CommissionData.map((commission, index) => {
                if(commission.requirement !== '') {
                  return (
                    <div key={commission.requirement} className='flex justify-center items-center'>
                      <span className='py-6 text-[8px] lg:text-[12px] 2xl:text-[16px] text-center'>
                        TURNOVER<br/>
                        {commission.turnover/1000000>=1?`${commission.turnover/1000000} млн`:`${commission.turnover/1000}K`}
                      </span>
                    </div>
                  );
                }
              })
            }
          </div>
          <div className='rank-table-gradient-row-border'>
            {
              CommissionData.map((commission, index) => {
                if(commission.requirement !== '') {
                  return (
                    <div key={commission.requirement} className='flex justify-center items-center'>
                      <span className='py-6 text-[8px] lg:text-[12px] 2xl:text-[16px] text-center'>
                        REWARD<br/>
                        {commission.turnover*0.04/1000000>=1?`${commission.turnover*0.04/1000000}MILLION`:`${commission.turnover*0.04/1000>=1?`${commission.turnover*0.04/1000}K`:commission.turnover*0.04}`}$
                      </span>
                    </div>
                  );
                }
              })
            }
          </div>
        </div>
        <div className='-z-10 absolute top-0 w-full h-full grid grid-cols-12'>
          {
            CommissionData.map((commission, index) => {
              if(commission.requirement !== '') {
                return (
                  <div 
                    key={commission.line} 
                    className={twMerge(
                      'rank-table-gradient-column-border',
                      index%2 ? 'bg-gradient-to-t from-[#007499] to-transparent':''
                    )}

                  >
                  </div>
                );
              }
            })
          }
        </div>
      </div>

    </div>
  );
};

export default RankTable;