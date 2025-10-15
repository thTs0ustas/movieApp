import { z } from 'zod';

export const passwordSchema = z
  .string()
  .nonempty('Password is required')
  .min(4, 'Password must be at least 4 characters long')
  .regex(/[0-9]/, 'Must contain at least one number')
  .regex(/[a-zA-Z]/, 'Must contain at least one letter');
