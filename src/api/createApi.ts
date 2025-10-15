import { createApi } from '@reduxjs/toolkit/query/react';
import { PayloadAction, Action } from '@reduxjs/toolkit';
import { CombinedState, EndpointDefinitions } from '@reduxjs/toolkit/query';
import { HYDRATE } from 'next-redux-wrapper';

import { RootState } from '@/store/rootReducer';

import { baseQuery } from './baseQuery';

function isHydrateAction(action: Action): action is PayloadAction<RootState> {
  return action.type === HYDRATE;
}
export const api = createApi({
  reducerPath: 'api',
  baseQuery,
  tagTypes: ['Movie', 'Movies'],
  endpoints: () => ({}),
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: 900,
  extractRehydrationInfo(
    action,
    { reducerPath },
  ): CombinedState<EndpointDefinitions, 'Movie' | 'Movies', 'api'> | undefined {
    if (isHydrateAction(action)) {
      return action.payload[reducerPath];
    }
  },
});
