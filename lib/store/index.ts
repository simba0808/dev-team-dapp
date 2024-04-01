'use client';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import localStorage from 'redux-persist/lib/storage';
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from 'redux-persist/es/constants';

import authMiddleware from '@/lib/store/auth/auth-middleware';
import authSlice from '@/lib/store/auth/auth-slice';
import walletSlice from '@/lib/store/wallet/wallet-slice';
import profileSlice from '@/lib/store//profile/profile-slice';

import type {AnyAction, ThunkAction} from '@reduxjs/toolkit';

const authPersistConfig = {
  key: 'auth',
  version: 1,
  storage: localStorage,
  stateReconciler: autoMergeLevel2,
};

const walletPersistConfig = {
  key: 'wallet',
  version: 1,
  storage: localStorage,
};

const profilePersistConfig = {
  key: 'profile',
  version: 1,
  storage: localStorage,
};

const rootReducer = combineReducers({
  auth: persistReducer<ReturnType<typeof authSlice.reducer>>(authPersistConfig, authSlice.reducer),
  wallet: persistReducer(walletPersistConfig, walletSlice.reducer),
  profile: persistReducer(profilePersistConfig, profileSlice.reducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).prepend(authMiddleware.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunkAction<R = unknown> = ThunkAction<R, RootState, unknown, AnyAction>;