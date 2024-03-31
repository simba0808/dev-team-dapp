'use client';
import {createSlice} from '@reduxjs/toolkit';

type WalletState = {
  active: boolean;
}

const initialState = (): WalletState => ({
  active: false,
});

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    walletActiveToggled: (state) => {
      state.active = !state.active;
    },
    walletToggleOff: (state) => {
      state.active = false;
    },
  },
});

export const {
  walletActiveToggled,
  walletToggleOff,
} = walletSlice.actions;

export default walletSlice;