'use client';
import {createSlice} from '@reduxjs/toolkit';

type ProfileState = {
  active: boolean;
}

const initialState = (): ProfileState => ({
  active: false
});

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    profileActiveToggled: (state) => {
      state.active = !state.active;
    },
    profileToggleOff: (state) => {
      state.active = false;
    },
  },
});

export const {
  profileActiveToggled,
  profileToggleOff,
} = profileSlice.actions;

export default profileSlice;