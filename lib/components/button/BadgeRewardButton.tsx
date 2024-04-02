'use client';
import {useCallback, useState} from 'react';
import {toast} from 'react-toastify';

import {useAppSelector} from '@/lib/store/hooks';
import {postServer} from '@/lib/net/fetch/fetch';

import Button from './Button';

import type {ApiError} from 'next/dist/server/api-utils';

function getSyncErrorMessage(err: ApiError, app_config) {
  let errorMessage = 'An unexpected error occurred. Please try again later.';
  if (err instanceof Error) {
    const obj = JSON.parse(err.message);
    errorMessage = obj.error;
  } else {
    errorMessage = err;
  }
  switch (errorMessage) {
    case 'min_withdrawal':
      return `Aria is powerful, yet resources are limited. Minimum Rewards to sync is DIMP ${app_config.settings.limits.withdraw_min_dimp}`;
    case 'wait until resolved':
      return 'Please wait the current Sync Request to get resolved! AI will analyze your contribution and approve rewards for organic activity.';
    default:
      return errorMessage;
  }
}

const BadgeRewardButton = ({dimpRewards}) => {
  const app_config = useAppSelector(state => state.auth.app_config);
  const [isOpen, setIsOpen] = useState(false);
  const toastId = 'syncToastId';

  const toggleDropdown = () => setIsOpen(!isOpen);

  const approveRewards = useCallback(async () => {
    toast('[1/2] Requesting DIMP Rewards sync...', {
      type: 'info',
      position: 'top-right',
      autoClose: false,
      toastId,
    });

    try {
      const response = await postServer('/tx/sync/', {amount: dimpRewards});
      if (response) {
        const data = await response;
        setIsOpen(false);
        toast.update(toastId, {
          render: '[2/2] Rewards sync request has been approved, please wait until resolved.',
          type: 'success',
          position: 'top-right',
          autoClose: 5000,
        });
      } else {
        const errorData = await JSON.parse(response);
        throw new Error(errorData.error || 'An unexpected error occurred');
      }
    } catch (err) {
      setIsOpen(false);
      toast.update(toastId, {
        render: getSyncErrorMessage(err as ApiError, app_config),
        type: 'warning',
        position: 'top-right',
        autoClose: 5000,
        icon: false,
      });
    }
  }, [dimpRewards, app_config]);

  return (
    <div className='text-center'>
      <Button variant='transparent' size='small' className='mt-2.5 mb-1.5 shadow-lg' onClick={approveRewards}>
        Request Rewards Sync
      </Button>
      <div className='text-white text-2xs'>*sync rewards to withdraw earnings</div>
    </div>
  );
};

export default BadgeRewardButton;