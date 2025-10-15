import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import { api } from '@/api';
import { queryErrorLogger } from '@/store/middlewares/errors/errorMiddleware';

import { rootReducer } from './rootReducer';

export const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware, queryErrorLogger),
  });

export const wrapper = createWrapper<ReturnType<typeof makeStore>>(makeStore);

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore['dispatch'];
