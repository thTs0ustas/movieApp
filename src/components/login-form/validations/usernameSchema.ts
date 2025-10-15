import { z } from 'zod';

export const usernameSchema = z
  .string()
  .nonempty('Username is required')
  .min(3, 'Username must be at least 3 characters long');
