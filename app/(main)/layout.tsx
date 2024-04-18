'use client';
import {useSession} from 'next-auth/react';
import {useRouter} from 'next/navigation';
import {useCallback, useEffect, useMemo, useRef} from 'react';
import {useAccount} from 'wagmi';
import {useWeb3Modal} from '@web3modal/react';
import {WalletOutlined} from '@mui/icons-material';

import {useAppSelector} from '@/lib/store/hooks';
import useSocketDebug from '@/lib/net/ws/useSocketDebug';
import useSocketGlobalMessages from '@/lib/net/ws/useSocketGlobalMessages';
import Header from '@/lib/components/layout/Header';
import Profile from '@/lib/profile/Profile';
import Wallet from '@/lib/wallet/wallet';
import Button from '@/lib/components/button/Button';
import SiweButton from '@/app/signin/SiweButton';

import type {FC, ReactNode} from 'react';

type Props = {
  children: ReactNode;
};

const MainLayout: FC<Props> = ({children}) => {
  useSocketDebug();
  useSocketGlobalMessages();

  const router = useRouter();

  const auth = useAppSelector(state => state.auth);
  const user = useAppSelector(state => state.auth.user);
  const {address, isConnected} = useAccount();
  const {status} = useSession();

  const {open} = useWeb3Modal();

  const modalOpened = useRef(false);

  useEffect(() => {
    console.log(user);
  }, [user]);

  const onReconnect = useCallback(() => {
    if(!address) {
      localStorage.removeItem('walletconnect');
      localStorage.removeItem('wagmi.wallet');
      localStorage.removeItem('wagmi.store');
      localStorage.removeItem('wagmi.connected');

      modalOpened.current = true;
      open();
      return;
    }
  }, [address]);

  const headerTrailing = useMemo(() => (
    <div className='flex gap-2'>
      {
        user ?
          <>
            {
              !auth.sessions.siwe ? 
                <>
                  <SiweButton className='flex flex-col align-middle items-center mt-[0.1rem]' />
                  <Profile />
                </>
                : isConnected ? (
                  <>
                    <Wallet />
                    <Profile />
                  </>
                ) : (
                  <>
                    <Button
                      size='small'
                      variant='transparent'
                      onClick={onReconnect}
                      className='m-auto bg-transparent p-0'
                    >
                      <WalletOutlined className="text-white/60" fontSize='large'/>
                    </Button>
                    <Profile/>
                  </>
                )
            }
          </>
          :
          <Button variant='transparent' size='small' onClick={() => router.push('/signin')}>
            Log in
          </Button>
      }
    </div>
  ), [status, user, isConnected]);

  return (
    <>
      <div className="fixed w-[100%] min-h-screen top-0 left-0 -z-10 bg-dark-blue">
      </div>
      <Header trailing={headerTrailing} />
      {children}
    </>
  );
};

export default MainLayout;