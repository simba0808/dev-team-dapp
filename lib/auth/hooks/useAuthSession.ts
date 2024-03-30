'use client';
import {signOut, useSession} from 'next-auth/react';
import {useCallback} from 'react';

import {useAppDispatch, useAppSelector} from '@/lib/store/hooks';
import {authSessionDisconnected} from '@/lib/store/auth/auth-slice';

const useAuthSession = (provider: Provider) => {
  const {data} = useSession();
  const dispatch = useAppDispatch();
  const session = useAppSelector(state => state.auth.sessions[provider]?.data);

  const disconnect = useCallback(() => {
    if (provider === 'siwe' || data?.provider === provider) {
      signOut({redirect: false});
    }

    dispatch(authSessionDisconnected(provider));
  }, [data]);

  return {session, disconnect};
};

export default useAuthSession;