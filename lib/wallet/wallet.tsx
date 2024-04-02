import {useCallback, useEffect, useLayoutEffect, useRef} from 'react';
import {WalletOutlined} from '@mui/icons-material';

import {useAppDispatch, useAppSelector} from '@/lib/store/hooks';
import {walletActiveToggled, walletToggleOff} from '@/lib/store/wallet/wallet-slice';
import {profileToggleOff} from '@/lib/store/profile/profile-slice';
import WalletMenu from '@/lib/wallet/wallet-kit/WalletMenu';

const Wallet = () => {
  const dispatch = useAppDispatch();
  const active = useAppSelector(state => state.wallet.active);
  const walletRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLDivElement>(null);

  const onToggle = useCallback(() => {
    dispatch(profileToggleOff());
    dispatch(walletActiveToggled());
  }, [dispatch]);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      walletRef.current && !walletRef.current.contains(event.target as Node) &&
      toggleButtonRef.current && !toggleButtonRef.current.contains(event.target as Node) && 
      active) {
      dispatch(walletToggleOff());
    }
  }, [dispatch, active]);

  useEffect(() => {
    dispatch(walletToggleOff());
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
        ref={walletRef}
        className={active ? 'block absolute top-[75px] -right-[100%]': 'hidden'}      
      >
        <WalletMenu />
      </div>
      <div
        ref={toggleButtonRef} // Attach the ref here
        className="flex flex-col text-center items-center rounded-full overflow-auto cursor-pointer"
        onClick={onToggle}
      >
        <WalletOutlined className="text-white" fontSize='large'/>
      </div>
    </div>
  );
};

export default Wallet;