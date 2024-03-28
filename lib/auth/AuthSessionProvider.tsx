'use client';
import {SessionProvider, signOut} from 'next-auth/react';
import {useRouter} from 'next/navigation';
import React, {useEffect} from 'react';
import {toast} from 'react-toastify';

import {authSyncSession} from '@/lib/net/modules/auth';
import {useAppDispatch, useAppSelector} from '@/lib/store/hooks';
import {authSessionDisconnected, authSessionReceived} from '@/lib/store/auth/auth-slice';

import type {FC} from 'react';
import type {Session} from 'next-auth';

type Props = {
  session: Session | null;
  children: React.ReactNode;
};

const AuthSessionProvider: FC<Props> = ({session, children}) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const storedSession  = useAppSelector(state => session ? state.auth.sessions[session.provider] : null);

  useEffect(() => {
    if (session) {
      dispatch(authSessionReceived({provider: session.provider, session: session}));
    }
  }, [dispatch, session]);

  useEffect(() => {
    const syncSession = async () => {
      if (storedSession && storedSession.data && !storedSession.syncing && !storedSession.synced) {
        try {
          const result = await dispatch(authSyncSession(storedSession.data.provider)).unwrap();
          if (result.userId) {
            router.push('/dashboard');
          }
        } catch (error) {
          const getMessage = (err) => {
            if (err.status == 403) {
              return 'Please Log in to your Actocracy account with Web3 or Google, then try again.';
            }
            const errorMessage = err.error;
            switch (errorMessage) {
              case 'complete_signup':
                return 'Your Actocracy account is currently in Limited mode. To complete your sign-up process, please return to the device where you initially signed in and connect your Web3 Wallet';

              case 'log in with google':
                return 'Please Log in to Actocracy account with Google, then try again.';

              case 'log out with google':
                return 'Please Log out from your Actocracy account and try again.';

              case 'log out with web3':
                return 'Please Log out from your Actocracy account and try again.';

              case 'max accounts':
                return 'You have reached your maximum accounts capacity for the selected provider.';

              case 'already linked':
                return 'This account has already been linked to Actocracy.';

              default:
                return `We're sorry, but we couldn't sign you in with your ${storedSession.data.provider} account. Please try again, or let us know if you're experiencing any issues.`;
            }
          };

          toast(getMessage(error), {
            type: 'error',
            position: 'top-right',
            autoClose: 10000,
            icon: false,
          });

          dispatch(authSessionDisconnected(storedSession.data.provider));
          signOut({redirect: false});
        }
      }
    };
    
    syncSession();
  }, [storedSession?.data]);

  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  );
};

export default AuthSessionProvider;