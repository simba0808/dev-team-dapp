'use client';
import {Suspense, useState} from 'react';

import useAuthSession from '@/lib/auth/hooks/useAuthSession';
import Spinner from '@/lib/components/spinnner/Spinner';
import ConnectWalletModal from '@/lib/web3/components/ConnectWalletModal';
import Header from '@/lib/components/layout/Header';

import ProviderButton from './ProviderButton';
import ConnectWeb3Wallet from './ConnectWeb3Wallet';
import SigninErrorWrapper from './SigninErrorWrapper';

import type {FC} from 'react';
import type {SignInPageErrorParam} from './SigninErrorWrapper';

const SigninPage: FC<{searchParams: Record<string, string | undefined>}> = ({searchParams}) => {
  const {session} = useAuthSession('google');

  const [web3ModalOpen, setWeb3ModalOpen] = useState(false);

  const closeWeb3Modal = () => {
    setWeb3ModalOpen(false);
  };

  return (
    <>
      <Header />
      <div className='min-h-[100vh] flex items-center justify-center bg-dark-blue'>
        <div className='flex flex-col bg-black/20 px-10 py-10 text-white rounded-xl'>
          <h1 className='text-center mb-4'>
            Log in to ProGFi
          </h1>
          <div className='flex flex-col items-center gap-2 w-md max-w-[90vw] mt-3'>
            <ConnectWeb3Wallet />
            {/* <Button onClick={() => setWeb3ModalOpen(true)} variant='transparent' size='large'>
              Connect Wallet
            </Button> */}
            <div className='flex flex-col gap-4 divide-y-[1px]'>
              { !session ?
                <>
                  <div className='pb-5 surface'>
                    <div className='text-base text-center font-medium mb-3.5'>
                      Log in to ProGFi with Google oAuth
                    </div>
                    <Suspense fallback={<Spinner size='large' />}>
                      <SigninErrorWrapper error={searchParams.error as SignInPageErrorParam}>
                        <div className='flex flex-col items-center gap-4'>
                          <ProviderButton provider={{id: 'google', name: 'Google'}} size='medium'/>
                        </div>
                      </SigninErrorWrapper>
                    </Suspense>
                  </div>
                  <div>
                    <h1 className='text-center mt-2 mb-4'>
                      Sign up with Google
                    </h1>
                    <div className='pb-5 surface'>
                      <div className='text-base text-center font-medium'>
                        Sign up to ProGFi with Google
                        <div className='text-xs mt-1 mb-3.5'>Have no account yet?</div>
                      </div>
                      <Suspense fallback={<Spinner size='large' />}>
                        <SigninErrorWrapper error={searchParams.error as SignInPageErrorParam}>
                          <div className='flex flex-col items-center gap-4'>
                            <ProviderButton provider={{id: 'google', name: 'Google'}} size='medium'/>
                          </div>
                        </SigninErrorWrapper>
                      </Suspense>
                    </div>
                  </div>
                </> :
                <div className='pb-5 surface'>
                  <div className='text-base text-center font-medium mb-3.5'>
                    Disconnect Google account from ProGFi
                  </div>
                  <Suspense fallback={<Spinner size='large' />}>
                    <SigninErrorWrapper error={searchParams.error as SignInPageErrorParam}>
                      <ProviderButton provider={{id: 'google', name: 'Google'}} size='medium'/>
                    </SigninErrorWrapper>
                  </Suspense>
                </div> }
            </div>
          </div>
        </div>
      </div>
      <ConnectWalletModal isOpen={web3ModalOpen} onClose={closeWeb3Modal}/>
    </>
  );
};

export default SigninPage;