import { api } from '@/api';

import type { LoginRequest, UserResponse } from './types';

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<UserResponse, LoginRequest>({
      query: (credentials) => ({
        url: '/userLogin',
        method: 'POST',
        body: credentials,
      }),
    }),
    logout: build.mutation({
      query: () => '/userLogout',
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation } = authApi;
