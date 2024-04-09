'use client';
import {useCallback, useMemo, useState} from 'react';
import urlJoin from 'url-join';
import Big from 'big.js';
import {toast} from 'react-toastify';
import {CheckIcon, CopyIcon} from '@chakra-ui/icons';

import {useAppSelector} from '@/lib/store/hooks';
import ReferralBoard from '@/lib/components/cards/ReferalCard';
import ProfCard from '@/lib/components/cards/ProfCard';
import MaskMaker from '@/lib/components/MaskMaker';
import BorderContainer from '@/lib/components/BorderContainer';
import DataTable from '@/lib/components/data-table/DataTable';
import {dateFormatter} from '@/lib/components/data-table/dateFormatter';
import useRefs from '@/lib/net/modules/ref/useRefs';

import type {FC} from 'react';
import type {RefData} from '@/lib/net/modules/ref/useRefs';
import type {Column, SortColumn} from 'react-data-grid';
import type {DataTableProps} from '@/lib/components/data-table/DataTable';

const COLUMNS: Column<RefData>[] = [
  {key: 'created_at', name: 'Since', sortable: true, sortDescendingFirst: true, renderCell: ({row}) => dateFormatter(row.created_at)},
  {key: 'dimp', name: 'Rewards, DIMP', sortable: true, sortDescendingFirst: false, renderCell: ({row}) => row.dimp > 0 ? <span className='text-green-600 font-semibold'>{(new Big(row.dimp ?? 0)).round(3,0).toFixed(3)}</span> : (new Big(row.dimp ?? 0)).round(3,0).toFixed(3)},
  {key: 'lvl', name: 'Level', sortable: true, sortDescendingFirst: false},
  {key: 'google_name', name: 'Ref Name'},
  {key: 'author_upline', name: 'Partners', sortable: true, sortDescendingFirst: false},
];

const INITIAL_SORT_COLUMNS: SortColumn[] = [{columnKey: 'created_at', direction: 'DESC'}];

const sortCompare: DataTableProps<RefData>['sortCompare'] = ({a, b, sortColumn}) => {
  const {columnKey} = sortColumn;

  switch (columnKey) {
    case 'created_at': {
      const dataA = new Date(a[columnKey]);
      const dataB = new Date(b[columnKey]);
      return dataA.getTime() - dataB.getTime();
    }
    case 'dimp': 
      return a[columnKey] - b[columnKey];
    case 'author_upline':
      return a[columnKey] - b[columnKey];
    case 'lvl': 
      return a[columnKey] - b[columnKey];
    default: 
      return 0;
  }
};

type CopyLinkProps = {
  url: string;
}

const CopyLink: FC<CopyLinkProps> = ({url}) => {
  const [copied, setCopied] = useState(false);

  const onClickHandler = useCallback(() => {
    window.navigator.clipboard.writeText(url);
    toast('Link Copied', {
      type: 'success',
      position: 'top-right',
      autoClose: 1000,
    });
    setCopied(true);
  }, [url]);

  return (
    <div className='surface-compact p-3 rounded-xl cursor-pointer bg-light-gray active:bg-gray' onClick={onClickHandler}>
      <div className='flex flex-row items-center gap-2'>
        {
          copied ?
            <CheckIcon color='#8E9FAE' boxSize={20} />
            :
            <CopyIcon color='#8E9FAE' boxSize={20} />
        }
        <div className='text-medium-gray text-sm xs:text-md xs:font-bold text-wrap'>
          {url}
        </div>
      </div>
    </div>
  );
};

const Referral = () => {
  const user = useAppSelector(state => state.auth.user);

  const {data, total, isFetching, page, setPage} = useRefs();

  const rows = useMemo(() => {
    if (!data) {
      return [];
    }

    return data.results;
  }, [data]);

  return (
    <div className='w-full mt-8'>
      <h1 className='mb-8 text-4xl lg:text-5xl font-normal text-center'>Referral Lounge</h1>
      <div className='w-full flex md:flex-row flex-col justify-center gap-4 sm:gap-10 mb-16'>
        <div className='w-md max-w-[90vw] mb-4 mx-auto'>
          <BorderContainer className='surface'>
            <div className='rounded-2xl bg-dark-blue'>
              <div className='min-h-[250px] surface gap-4 relative p-8 bg-black/20 text-white overflow-hidden'>
                <h3 className='mb-3 text-xl max-sm:text-base'>Program Rules & Terms of Use</h3>
                <div className='grow flex flex-row justify-between items-center gap-3'>
                  <div className='flex-1 text-md max-md:text-xs'>
                    Earn up to 15% Rewards when your referrals Earn tokens or Spend their budgets
                  </div>
                  <div className='flex-1 flex flex-row justify-center gap-4'>
                    <div>
                      <div className='text-sm whitespace-nowrap'>Level 1</div>
                      <div className='text-3xl font-bold text-cream drop-shadow-lg'>7%</div>
                    </div>
                    <div>
                      <div className='text-sm whitespace-nowrap'>Level 2</div>
                      <div className='text-3xl font-bold text-cream drop-shadow-lg'>5%</div>
                    </div>
                    <div>
                      <div className='text-sm whitespace-nowrap'>Level 3</div>
                      <div className='text-3xl font-bold text-cream drop-shadow-lg'>3%</div>
                    </div>
                  </div>
                </div>
                <MaskMaker position='middle-right' color='blue' width={200} height={200} />
                <MaskMaker position='middle-left' color='blue' width={200} height={200} />
              </div>
            </div>
          </BorderContainer>
        </div>
        {
          user &&
          <div className='w-md max-w-[90vw] mb-4 mx-auto text-white'>
            <BorderContainer className='surface'>
              <div className='relative rounded-2xl bg-dark-blue overflow-hidden'>
                <div className='min-h-[250px] max-w-[60%] md:max-w-full mx-auto  flex flex-col justify-center items-center gap-4'>
                  <CopyLink url={urlJoin(process.env.NEXT_PUBLIC_INVITE_URL!, user.ref_slug)} />
                  <div className='text-center text-white m-3 text-sm max-md:text-xs'>
                    Click on any link to Copy your referral URL. Share it to Invite Partners. Earn up to <b>15%</b> Commission from their activity
                  </div>
                  <CopyLink url={urlJoin(process.env.NEXT_PUBLIC_INVITE_URL!, String(user.id))} />
                </div>
                <MaskMaker position='middle-right' color='green' width={200} height={200} />
              </div>
            </BorderContainer>
          </div>
        }
      </div>
      <div className='flex flex-col mb-16 items-center text-white'>
        <h1 className='mb-1 text-4xl lg:text-5xl font-normal'>Referral Statistics</h1>
        <ReferralBoard />
        <ProfCard />
      </div>
      <div className='flex flex-col mb-4 items-center text-white'>
        <h1 className='mb-8 text-4xl lg:text-5xl font-normal'>Detailed Referral Statistics</h1>
        <div className='w-full'>
          <DataTable
            columns={COLUMNS}
            rows={rows}
            rowsTotal={total}
            initialSortColumns={INITIAL_SORT_COLUMNS}
            currentPage={page}
            isFetching={isFetching}
            sortCompare={sortCompare}
            onPageChange={setPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Referral;