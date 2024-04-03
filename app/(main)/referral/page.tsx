'use client';
import {useCallback, useState} from 'react';
import urlJoin from 'url-join';
import {toast} from 'react-toastify';
import {CheckIcon, CopyIcon} from '@chakra-ui/icons';

import {useAppSelector} from '@/lib/store/hooks';
import ReferralBoard from '@/lib/components/cards/ReferalCard';
import ProfCard from '@/lib/components/cards/ProfCard';
import MaskMaker from '@/lib/components/MaskMaker';

import type {FC} from 'react';

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
    <div className="surface-compact p-3 rounded-xl cursor-pointer bg-light-gray active:bg-gray" onClick={onClickHandler}>
      <div className="flex flex-row items-center gap-2">
        {
          copied ?
            <CheckIcon color="#8E9FAE" boxSize={20} />
            :
            <CopyIcon color="#8E9FAE" boxSize={20} />
        }
        <div className="text-medium-gray font-bold text-wrap">
          {url}
        </div>
      </div>
    </div>
  );
};

const Referral = () => {
  const user = useAppSelector(state => state.auth.user);

  return (
    <div className='w-full'>
      <h1 className="mb-8 sm:mb-16 text-center">Referral lounge</h1>
      <div className='w-full flex md:flex-row flex-col justify-center gap-4 sm:gap-10 mb-16'>
        <div className="w-md max-w-[90vw] mb-4 mx-auto">
          <div className='surface p-[1px] bg-gradient-to-r from-dark-blue to-gray-400'>
            <div className='rounded-2xl bg-dark-blue'>
              <div className="min-h-[250px] surface gap-4 relative p-8 bg-black/20 text-white overflow-hidden">
                <h3 className="mb-3 text-xl max-sm:text-base">Program Rules & Terms of Use</h3>
                <div className="grow flex flex-row justify-between items-center gap-3">
                  <div className="flex-1 text-md max-md:text-xs">
                    Earn up to 15% Rewards when your referrals Earn tokens or Spend their budgets
                  </div>
                  <div className="flex-1 flex flex-row justify-center gap-4">
                    <div>
                      <div className="text-sm whitespace-nowrap">Level 1</div>
                      <div className="text-3xl font-bold text-cream drop-shadow-lg">7%</div>
                    </div>
                    <div>
                      <div className="text-sm whitespace-nowrap">Level 2</div>
                      <div className="text-3xl font-bold text-cream drop-shadow-lg">5%</div>
                    </div>
                    <div>
                      <div className="text-sm whitespace-nowrap">Level 3</div>
                      <div className="text-3xl font-bold text-cream drop-shadow-lg">3%</div>
                    </div>
                  </div>
                </div>
                <MaskMaker position='middle-right' color='blue' width={200} height={200} />
                <MaskMaker position='middle-left' color='blue' width={200} height={200} />
              </div>
            </div>
          </div>
        </div>
        {
          user &&
          <div className="w-md max-w-[90vw] mb-4 mx-auto text-white">
            <div className='surface p-[1px] bg-gradient-to-r from-dark-blue to-gray-400'>
              <div className='rounded-2xl bg-dark-blue'>
                <div className="min-h-[250px] relative overflow-hidden flex flex-col justify-center items-center gap-4 rounded-2xl bg-black/20">
                  <CopyLink url={urlJoin(process.env.NEXT_PUBLIC_INVITE_URL!, user.ref_slug)} />
                  <div className="text-center text-white m-3 text-sm max-md:text-xs">
                    Click on any link to Copy your referral URL. Share it to Invite Partners. Earn up to <b>15%</b> Commission from their activity
                  </div>
                  <CopyLink url={urlJoin(process.env.NEXT_PUBLIC_INVITE_URL!, String(user.id))} />
                  <MaskMaker position='middle-right' color='green' width={200} height={200} />
                </div>

              </div>
            </div>
          </div>
        }
      </div>
      <div className="flex flex-col mt-6 mb-4 items-center text-white">
        <h1 className="mb-1">Referral Statistics</h1>
        <ReferralBoard />
        <ProfCard />
      </div>
    </div>
  );
};

export default Referral;