import { createAction, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { setUser } from '@/models/auth/actions';
import { RootState } from '@/store/rootReducer';

import type { AuthState } from './types';

export const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearUser(state) {
      state.isLoggedIn = false;
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createAction<RootState>(HYDRATE), (_, { payload }) => {
        return payload.auth;
      })
      .addCase(setUser, (_, { payload }) => {
        return payload;
      });
  },
});

export const { clearUser } = authSlice.actions;
export const userReducer = authSlice.reducer;
export const userSliceName = authSlice.name;
