'use client';
import {useCallback, useEffect, useLayoutEffect, useRef} from 'react';
import {AccountCircleOutlined} from '@mui/icons-material';

import {useAppDispatch, useAppSelector} from '@/lib/store/hooks';
import {profileActiveToggled, profileToggleOff} from '@/lib/store/profile/profile-slice';
import {walletToggleOff} from '@/lib/store/wallet/wallet-slice';
import ProfileMenu from '@/lib/profile/profile-kit/ProfileMenu';

const Profile = () => {
  const dispatch = useAppDispatch();
  const active = useAppSelector(state => state.profile.active);
  const profileRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const onToggle = useCallback(() => {
    dispatch(walletToggleOff());
    dispatch(profileActiveToggled());
  }, [dispatch]);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      profileRef.current && !profileRef.current.contains(event.target as Node) &&
      buttonRef.current && !buttonRef.current.contains(event.target as Node) && 
      active) {
      dispatch(profileToggleOff());
    }
  }, [dispatch, active]);

  useEffect(() => {
    dispatch(profileToggleOff());
  }, [dispatch]);

  useLayoutEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  useLayoutEffect(() => {
    if (active) {
      document.body.classList.add('max-sm:lock-scroll');
    } else {
      document.body.classList.remove('max-sm:lock-scroll');
    }
  }, [active]);

  return (
    <div className='relative'>
      <div
        ref={profileRef}
        className={active ? 'block absolute top-[75px] -right-[100%]': 'hidden'}
      >
        <ProfileMenu />
      </div>
      <div
        ref={buttonRef} // Attach the ref to the button div
        className="flex flex-col text-center items-center rounded-full overflow-auto cursor-pointer"
        onClick={onToggle}
      >
        <AccountCircleOutlined className="text-white" fontSize='large'/>
      </div>
    </div>
  );
};

export default Profile;