'use client';
import {useRouter} from 'next/navigation';
import {useSession} from 'next-auth/react';
import Link from 'next/link';
import {useCallback, useMemo, useRef} from 'react';
import {useAccount} from 'wagmi';
import {useWeb3Modal} from '@web3modal/react';
import {WalletOutlined} from '@mui/icons-material';

import {useAppSelector} from '@/lib/store/hooks';
import useAuthSession from '@/lib/auth/hooks/useAuthSession';
import Wallet from '@/lib/wallet/wallet';
import Profile from '@/lib/profile/Profile';
import Button from '@/lib/components/button/Button';
import SiweButton from '@/app/signin/SiweButton';
import Header from '@/lib/components/layout/Header';
import Footer from '@/lib/components/layout/Footer';

import Landing from './Landing';

export default function Home() {
  const router = useRouter();
  const {status} = useSession();

  const user = useAppSelector(state => state.auth.user);
  const auth = useAppSelector(state => state.auth);
  const {session} = useAuthSession('siwe');

  const {address, isConnected} = useAccount();

  const {open} = useWeb3Modal();

  const modalOpened = useRef(false);

  const onConnect = useCallback(() => {
    router.push('/signin');
  }, []);

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
                  <SiweButton onHeader={true} />
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
          <Link href='/signin' className='text-white underline underline-offset-8'>
            Sign in
          </Link>
      }
    </div>
  ), [status, user, session, isConnected]);
  
  return (
    <div className='relative min-h-screen'>
      <Header trailing={headerTrailing} />
      <Landing />
      <Footer />
    </div>
  );
}
