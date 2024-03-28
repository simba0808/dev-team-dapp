'use client';
import {Suspense} from 'react';

import useAuthSession from '@/lib/auth/hooks/useAuthSession';
import Spinner from '@/lib/components/spinnner/Spinner';

import ProviderButton from './ProviderButton';
import ConnectWeb3Wallet from './ConnectWeb3Wallet';
import SigninErrorWrapper from './signinErrorWrapper';

import type {FC} from 'react';
import type {SignInPageErrorParam} from './signinErrorWrapper';

const SigninPage: FC<{searchParams: Record<string, string | undefined>}> = ({searchParams}) => {
  const {session} = useAuthSession('google');

  return (
    <>
      <div className='min-h-[100vh] flex items-center justify-center bg-dark-blue'>
        <div className='flex flex-col bg-black/20 px-10 py-10 text-white rounded-xl'>
          <h1 className='text-center mb-4'>
            Log in to Actocracy
          </h1>
          <div className='flex flex-col items-center w-md max-w-[90vw] mt-3'>
            <ConnectWeb3Wallet />
            <div className='divide-y-[1px]'>
              { !session ?
                <>
                  <div className='pb-5 surface'>
                    <div className='text-base text-center font-medium mb-3.5'>
                      Log in to Actocracy with Google oAuth
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
                    <h1 className='text-center mt-3 mb-4'>
                      Sign up with Google
                    </h1>
                    <div className='pb-5 surface'>
                      <div className='text-base text-center font-medium'>
                        Sign up to Actocracy with Google
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
                    Disconnect Google account from Actocracy
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
    </>
  );
};

export default SigninPage;