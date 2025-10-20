import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { APP_URL } from '@/config';

export const baseQuery = fetchBaseQuery({
  baseUrl: `${APP_URL}/api`,
  prepareHeaders: (headers) => {
    headers.set('Content-Type', 'application/json');

    return headers;
  },
});
