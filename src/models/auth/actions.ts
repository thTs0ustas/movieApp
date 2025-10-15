import { createAction } from '@reduxjs/toolkit';

import { AuthState } from '@/models/auth/types';

export const setUser = createAction<AuthState>('auth/setUser');
