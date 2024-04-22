'use client';
import {useCallback, useMemo, useState} from 'react';
import urlJoin from 'url-join';
import Big from 'big.js';
import {toast} from 'react-toastify';
import {CheckIcon, CopyIcon} from '@chakra-ui/icons';

import {useAppSelector} from '@/lib/store/hooks';
import ReferralBoard from '@/lib/components/cards/ReferalCard';
import ProfCard from '@/lib/components/cards/ProfCard';
import BonusCard from '@/lib/components/cards/BonusCard';
import CommossionTable from '@/lib/components/tables/CommisstionTable';
import RankTable from '@/lib/components/tables/RankTable';
import BonusPoolTable from '@/lib/components/tables/BonusPoolTable';
import {dateFormatter} from '@/lib/components/data-table/dateFormatter';
import useRefs from '@/lib/net/modules/ref/useRefs';
import '@/lib/components/tables/table.scss';

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
    <div className='xs:max-w-[80%] w-full p-3 mx-auto rounded-lg bg-thick-dark-blue cursor-pointer' onClick={onClickHandler}>
      <div className='flex flex-row justify-center items-center gap-2'>
        <div className='text-landing-content lowercase text-wrap'>
          {url}
        </div>
        {
          copied ?
            <CheckIcon color='#8E9FAE' boxSize={20} />
            :
            <CopyIcon color='#8E9FAE' boxSize={20} />
        }
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

  const BonusRound = ({round, text}) => {
    return (
      <div className='flex'>
        <div className='text-[64px] lg:text-[128px] font-bold leading-[110%]'>{round}</div>
        <div className='text-normal-content ml-3 flex items-center text-[10px] md:text-[14px] xl:text-[18px] 2xl:text-[20px] font-medium'>
          {text}
        </div>
      </div>
    );
  };

  return (
    <div className='relative pb-20 text-white'>
      <div className='max-w-screen-2xl mx-auto pt-40 px-8 sm:px-10 mb-12 '>
        <h2 className='heading-h2 text-center mb-1'>Referral Stats</h2>
        {
          user &&
            <CopyLink url={urlJoin(process.env.NEXT_PUBLIC_INVITE_URL!, user.ref_slug)} />
        }
        <p className='text-landing-content mt-2 text-center'>Partners in your referral Structure</p>
        <ReferralBoard />
        <p className='text-landing-content my-3 text-center'>Your Ambassador performance</p>
        <ProfCard />
      </div>
      
      <div className='max-w-screen-2xl mx-auto px-8 sm:px-10 mb-12'>
        <h2 className='heading-h2 text-center mb-1'>Referral</h2>
        <p className='text-normal-content text-center uppercase mb-10'>
          You get a percentage of the amount spent by the referral on the validator.
          The higher your rank, the more levels you open to earn commissions.
          The rank volume (RV) shows how much of your sales are taken into account when you increase your rank.
          The affiliate commission you earn is accumulated on your affiliate balance and transferred to your active wallet balance every three days.
        </p>
        <div className='custom-scrollbar overflow-x-scroll pb-14 bg-transparent'>
          <CommossionTable />
        </div>
      </div>

      <div className='max-w-screen-2xl mx-auto px-8 sm:px-10 mb-12'>
        <h2 className='heading-h2 text-center mb-1'>Ranks</h2>
        <p className='text-normal-content text-center uppercase mb-10'>
          To unlock a rank you need to rack up a certain amount of sales, 
          once you rack up the required rank volume (RV) and the required validator, 
          you will receive a bonus that will be added directly to your active wallet balance.
        </p>
        <div className='custom-scrollbar overflow-x-scroll pb-14 bg-transparent'>
          <RankTable />
        </div>
      </div>
      
      <div className='w-full'>
        <div className='max-w-screen-2xl mx-auto px-8 sm:px-10 mb-12'>
          <h2 className='heading-h2 text-center mb-1'>Global Bonus Pool</h2>
          <p className='text-normal-content text-center uppercase mb-4 lg:mb-10'>
            A dynamic bonus that renews each calendar month on the first of the month.
          </p>
          <p className='text-landing-content text-center font-bold'>
            Conditions under which Bonus Pool will count: 
          </p>
        </div>
        <div className='w-full bg-gradient-to-r from-blue-500/30  to-transparent shadow-2xl mb-12'>
          <div className='max-w-screen-2xl mx-auto px-8 sm:px-12 grid grid-cols-2 lg:grid-cols-4 gap-x-4 sm:gap-x-20 text-[#00B2FF]'>
            <BonusRound round={1} text='A certain number of new registrations in the whole structure' />
            <BonusRound round={2} text='Number of new registrations in the first line' />
            <BonusRound round={3} text='Total turnover of the structure' />
            <BonusRound round={4} text='Rank Status' />
          </div>
        </div>
        <div className='max-w-screen-2xl mx-auto px-8 sm:px-10 mb-12'>
          <div className='custom-scrollbar overflow-x-scroll pb-14 bg-transparent'>
            <BonusPoolTable />
          </div>
        </div>
      </div>

      <div className='max-w-screen-2xl mx-auto px-8 sm:px-10 mb-12'>
        <h2 className='heading-h2 text-center mb-1'>Matching bonus</h2>
        <p className='lg:max-w-[60%] mx-auto text-normal-content text-center uppercase mb-10'>
          Starting from the Master rank, the leader starts earning a percentage of the bonus income of his partner, 
          who is in the first line. 
        </p>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-4 lg:gap-x-20 lg:gap-y-10 mb-8'>
          <BonusCard level={1} degree='Master' bonus={10} />
          <BonusCard level={2} degree='Pro' bonus={10} />
          <BonusCard level={3} degree='Manager' bonus={10} />
          <BonusCard level={4} degree='Director' bonus={10} />
          <BonusCard level={5} degree='Executive' bonus={10} />
          <BonusCard level={6} degree='Ambassador' bonus={10} />
        </div>
        <p className='text-normal-content text-center uppercase mb-10'>Bonus is accrued from bonus rewards only!</p>
      </div>

      <div className='max-w-screen-2xl mx-auto px-8 sm:px-10 mb-12'>
        <h2 className='heading-h2 text-center mb-1'>Revenue Bonus</h2>
        <p className='lg:max-w-[80%] mx-auto text-normal-content text-center uppercase mb-8'>
          It is possible to buy packages from $1000, the income from which can be multiplied 6 times. 
          When you reach the limit you need to buy a new package. 
          Build your team and get a fixed percentage equal to the direct bonus from the first line.
        </p>
        <div className='lg:max-w-[70%] mx-auto flex justify-center'>
          <img src='/img/Revenue.svg' className='w-full' alt='revenue' />
        </div>
      </div>
    </div>
  );
};

export default Referral;