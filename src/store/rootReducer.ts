import { combineReducers } from '@reduxjs/toolkit';

import { api } from '@/api';
import { userReducer, userSliceName } from '@/models/auth/slice';

export const rootReducer = combineReducers({
  [userSliceName]: userReducer,
  [api.reducerPath]: api.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
