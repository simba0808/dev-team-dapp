import {createSlice} from '@reduxjs/toolkit';

import type {PayloadAction} from '@reduxjs/toolkit';
import type {Session} from 'next-auth';

type AuthState = {
  token?: string;
  sessions: Partial<Record<Provider, { data: Session; syncing?: boolean; synced?: boolean }>>;
  siweData?: {message: string; signature: string};
};

const initialState = (): AuthState => ({
  sessions: {},
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
    }
  },
  extraReducers: builder => {

  }
});

export const {
  authSessionReceived,
  authSessionDisconnected,
  authSiweDataInitialized
} = authSlice.actions;

export default authSlice;