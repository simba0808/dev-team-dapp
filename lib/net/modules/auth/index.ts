'use client';
import {getCookie} from 'cookies-next';
import urlJoin from 'url-join';

import {APIError} from '@/lib/net/fetch/APIError';
import {createAppAsyncThunk} from '@/lib/store/thunk';
import {getFingerprint} from '@/lib/fingerprint';
import {fetchServer, postServer} from '@/lib/net/fetch/fetch';

import type {AppThunkAction, RootState} from '@/lib/store';

type AllSessionsData = Record<`${Provider}_id` | `${Provider}_name` | `${Provider}_email`, string>;
type dispatchResultType = {
  jwt: string;
  user: {
    id: number;
  };
  is_signup: boolean;
}

const getAllSessionsData = (sessions: RootState['auth']['sessions']) => {
  return (Object.keys(sessions) as Provider[]).reduce<Partial<AllSessionsData>>((acc, provider) => {
    const sessionData = sessions[provider]?.data;
    if (sessionData) {
      acc = {
        ...acc,
        [`${provider}_id`]: sessionData.providerAccountId,
        [`${provider}_name`]: sessionData.user?.name,
        [`${provider}_email`]: sessionData.user?.email,
      };
    }
    return acc;
  }, {});
};

export const authChallenge = async (address: string) => {
  const {nonce} = await fetchServer(urlJoin('/auth/nonce', address));
  return nonce;
};

export const authSyncSession = createAppAsyncThunk(
  'auth/sync-session',
  async (provider: Provider, {dispatch, rejectWithValue}) => {
    let result: dispatchResultType;

    try {
      switch (provider) {
        case 'siwe': {
          result = await dispatch(authSiwe()) as dispatchResultType ;
          break;
        }
        case 'google': {
          result = await dispatch(authOAuth(provider)) as dispatchResultType;
          break;
        }
      }

      if (result) {
        return {token: result.jwt, userId: result.user.id, is_signup: result.is_signup};
      }

      return rejectWithValue(provider);
    } catch (error) {
      if (error instanceof APIError) {
        return rejectWithValue(error.data);
      }

      return rejectWithValue(provider);
    }
  }
);

export const authSiwe = (): AppThunkAction => async (dispatch, getState) => {
  const siweData = getState().auth.siweData;

  if (!siweData) {
    return;
  }

  const fingerprint = await getFingerprint();

  const sessions = getState().auth.sessions;

  const result = await postServer('/auth/signin', {
    ...siweData,
    ...getAllSessionsData(sessions),
    fingerprint,
    invite_link: getCookie('ref_slug'),
    locale: getCookie('locale'),
    referer: getCookie('referer'),
    utm: getCookie('utm'),
    ip: getCookie('ip'),
  });

  return result;
};

export const authOAuth = (provider: Provider): AppThunkAction => async (dispatch, getState) => {
  const fingerprint = await getFingerprint();

  const sessions = getState().auth.sessions;
  let refSlug = getCookie('ref_slug');
  // if (!refSlug) {
  //   const refSlugLS = localStorage.getItem('ref_slug');
  //   if (refSlugLS) {
  //     refSlug = refSlugLS;
  //   }
  // }
  const result = await postServer('/auth/oauth', {
    ...getAllSessionsData(sessions),
    fingerprint,
    invite_link: refSlug,
    locale: getCookie('locale'),
    referer: getCookie('referer'),
    utm: getCookie('utm'),
    ip: getCookie('ip'),
    address: sessions.siwe?.data?.providerAccountId,
  });

  return result;
};