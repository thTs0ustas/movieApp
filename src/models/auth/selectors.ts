import type { RootState } from '@/store/rootReducer';

export const selectUser = (state: RootState) => state.auth.user;
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectToken = (state: RootState) => state.auth.token;
