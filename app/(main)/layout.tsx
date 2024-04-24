'use client';
import {useSession} from 'next-auth/react';
import {usePathname, useRouter} from 'next/navigation';
import {useCallback, useEffect, useMemo, useRef} from 'react';
import {useAccount} from 'wagmi';
import {useWeb3Modal} from '@web3modal/react';
import {WalletOutlined} from '@mui/icons-material';

import {useAppSelector} from '@/lib/store/hooks';
import useAuthSession from '@/lib/auth/hooks/useAuthSession';
import useSocketDebug from '@/lib/net/ws/useSocketDebug';
import useSocketGlobalMessages from '@/lib/net/ws/useSocketGlobalMessages';
import Header from '@/lib/components/layout/Header';
import Footer from '@/lib/components/layout/Footer';
import Profile from '@/lib/profile/Profile';
import Wallet from '@/lib/wallet/wallet';
import Button from '@/lib/components/button/Button';
import SiweButton from '@/app/signin/SiweButton';
import MaskMaker from '@/lib/components/MaskMaker';

import type {FC, ReactNode} from 'react';

type Props = {
  children: ReactNode;
};

const MainLayout: FC<Props> = ({children}) => {
  useSocketDebug();
  useSocketGlobalMessages();

  const router = useRouter();
  const pathname = usePathname();

  const auth = useAppSelector(state => state.auth);
  const user = useAppSelector(state => state.auth.user);
  const {session} = useAuthSession('siwe');
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
    <div className='flex items-center gap-1'>
      {
        user ?
          <>
            {
              !auth.sessions.siwe ? 
                <>
                  <SiweButton 
                    className='flex flex-col align-middle items-center text-[10px]' 
                    onHeader={true}
                  />
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
            Sign in
          </Button>
      }
    </div>
  ), [status, user, session, isConnected]);

  return (
    <>
      <div className="fixed w-[100%] min-h-screen top-0 left-0 -z-10 bg-gradient-to-r from-[#092033] to-[#071C2E]">
      </div>
      <div className='relative overflow-clip lg:pb-20'>
        <Header trailing={headerTrailing} />
        {children}
        {
          pathname !== '/home' &&  
            <>
              <img src='/img/mesh.svg' className='-z-10 hidden lg:block absolute bottom-0 ' alt='mesh' />
              <img src='/img/Ellipse.svg' className='-z-10 hidden lg:block absolute bottom-0 right-0' alt='mesh' />
              <img src='/img/mesh.svg' className='-z-10 hidden lg:block absolute bottom-0 right-0' alt='mesh' />
              <MaskMaker width={1000} height={700} color='light__blue'position='top-left' className='-z-10 opacity-20' />
              <MaskMaker width={500} height={500} color='light__blue'position='middle-right' className='-z-10 translate-x-[50%]' />
              <MaskMaker width={500} height={500} color='dark__green' position='bottom-left' className='hidden lg:block -z-10 opacity-40' />
            </>
        }
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;