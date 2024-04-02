import _ from 'lodash';
import {createSlice} from '@reduxjs/toolkit';

import {authSyncSession} from '@/lib/net/modules/auth';

import type {PayloadAction} from '@reduxjs/toolkit';
import type {Session} from 'next-auth';
import type {BaseSocketMessage} from '@/lib/net/ws/useAppSocket';

type AuthState = {
  token?: string;
  userId?: number;
  sessions: Partial<Record<Provider, { data: Session; syncing?: boolean; synced?: boolean }>>;
  siweData?: {message: string; signature: string};
  user?: BaseSocketMessage['user'];
  app_config: BaseSocketMessage['app_config'];
};

const initialState = (): AuthState => ({
  sessions: {},
  app_config: {
    dimp_usd_rate: 0.001,
  }
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
    }
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
} = authSlice.actions;

export default authSlice;