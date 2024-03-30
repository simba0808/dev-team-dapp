'use client';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import localStorage from 'redux-persist/lib/storage';
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from 'redux-persist/es/constants';

import authMiddleware from '@/lib/store/auth/auth-middleware';
import authSlice from '@/lib/store/auth/auth-slice';

import type {AnyAction, ThunkAction} from '@reduxjs/toolkit';

const authPersistConfig = {
  key: 'auth',
  version: 1,
  storage: localStorage,
  stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers({
  auth: persistReducer<ReturnType<typeof authSlice.reducer>>(authPersistConfig, authSlice.reducer),
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