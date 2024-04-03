import _ from 'lodash';
import {createSlice} from '@reduxjs/toolkit';

import {authSyncSession} from '@/lib/net/modules/auth';

import type {PayloadAction} from '@reduxjs/toolkit';
import type {Session} from 'next-auth';
import type {BaseSocketMessage} from '@/lib/net/ws/useAppSocket';
import type {SocketMessageSync} from '@/lib/net/ws/useSocketGlobalMessages';

type AuthState = {
  token?: string;
  userId?: number;
  sessions: Partial<Record<Provider, { data: Session; syncing?: boolean; synced?: boolean }>>;
  siweData?: {message: string; signature: string};
  user?: BaseSocketMessage['user'];
  app_config: BaseSocketMessage['app_config'];
  referral_stats: SocketMessageSync['referral_stats'];
};

const initialState = (): AuthState => ({
  sessions: {},
  app_config: {
    dimp_usd_rate: 0.001,
  },
  referral_stats: {
    total_counter: 0,
    lvl_one_counter: 0,
    lvl_two_counter: 0,
    lvl_three_counter: 0,
    dimp_total: 0,
    dimp_lvl_one: 0,
    dimp_lvl_two: 0,
    dimp_lvl_three: 0,
  },
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authSessionReceived: ({sessions}, action: PayloadAction<{provider: Provider; session: Session}>) => {
      if (sessions[action.payload.provider]?.data.providerAccountId !== action.payload.session.providerAccountId) {
        sessions[action.payload.provider] = {data: action.payload.session};
      }
    },
    authSessionDisconnected: (state, action: PayloadAction<Provider>) => {
      if (action.payload === 'siwe') {
        return initialState();
      } else {
        state.sessions[action.payload] = undefined;
      }
    },
    authSiweDataInitialized: (state, action: PayloadAction<AuthState['siweData']>) => {
      state.siweData = action.payload;
    },
    authUserDataReceived: (state, action: PayloadAction<AuthState['user']>) => {
      if (!_.isEqual(state.user, action.payload)) {
        state.user = action.payload;
      }
    },
    authAppConfigReceived: (state, action: PayloadAction<AuthState['app_config']>) => {
      if (!_.isEqual(state.app_config, action.payload)) {
        state.app_config = action.payload;
      }
    },
    authReferralStatsReceived: (state, action: PayloadAction<AuthState['referral_stats']>) => {
      if (!_.isEqual(state.referral_stats, action.payload)) {
        state.referral_stats = action.payload;
      }
    },
  },
  extraReducers: builder => {
    builder.addCase(authSyncSession.pending, (state, action) => {
      const providerSession = state.sessions[action.meta.arg];
      if (providerSession) {
        providerSession.syncing = true;
      }
    });
    builder.addCase(authSyncSession.rejected, (state, action) => {
      const providerSession = state.sessions[action.meta.arg];
      if (providerSession) {
        providerSession.syncing = false;
      }
    });
    builder.addCase(authSyncSession.fulfilled, (state, action) => {
      state.token = action.payload.token;

      const providerSession = state.sessions[action.meta.arg];
      if (providerSession) {
        providerSession.syncing = false;
        providerSession.synced = true;
      }
    });
  }
});

export const {
  authSessionReceived,
  authSessionDisconnected,
  authSiweDataInitialized,
  authUserDataReceived,
  authAppConfigReceived,
  authReferralStatsReceived,
} = authSlice.actions;

export default authSlice;