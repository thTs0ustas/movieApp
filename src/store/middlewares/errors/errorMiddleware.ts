import { isRejectedWithValue, PayloadAction } from '@reduxjs/toolkit';
import type { Middleware } from '@reduxjs/toolkit';
import { toast } from 'sonner';

import { ErrorResponse } from '@/store/middlewares/errors/types';

export const queryErrorLogger: Middleware = () => (next) => (action) => {
  const typedAction = action as PayloadAction<ErrorResponse>;
  if (isRejectedWithValue(typedAction)) {
    toast.warning(
      'data' in typedAction.error
        ? (typedAction.error?.data as { message: string }).message
        : typedAction.payload.data?.error,
    );
  }

  return next(action);
};
