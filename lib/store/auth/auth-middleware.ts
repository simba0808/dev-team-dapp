import {createListenerMiddleware} from '@reduxjs/toolkit';
import {disconnect} from '@wagmi/core';

import {authSyncSession} from '@/lib/net/modules/auth';
import {removeLocalStorageItem, setLocalStorageItem} from '@/lib/storage';
import {authSessionDisconnected} from '@/lib/store/auth/auth-slice';

const authMiddleware = createListenerMiddleware();

authMiddleware.startListening({
  actionCreator: authSessionDisconnected,
  effect: (action) => {
    if (action.payload === 'siwe') {
      removeLocalStorageItem('token');
      // Clear WalletConnect and wagmi related data from localStorage
      localStorage.removeItem('walletconnect');
      localStorage.removeItem('wagmi.wallet');
      localStorage.removeItem('wagmi.store');
      localStorage.removeItem('wagmi.connected');
      disconnect();
    }
  }
});

authMiddleware.startListening({
  actionCreator: authSyncSession.fulfilled,
  effect: (action) => {
    setLocalStorageItem('token', action.payload.token);
  }
});

export default authMiddleware;