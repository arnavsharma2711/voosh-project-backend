import { z } from 'zod';

export const passwordSchema = z
  .string({
    required_error: 'Password is required.',
    invalid_type_error: 'Password must be a text.',
  })
  .refine((value: string) => value.length >= 8, {
    message: 'Password must be at least 8 characters long.',
  })
  .refine((value: string) => /[A-Z]/.test(value), {
    message: 'Password must contain at least one uppercase letter.',
  })
  // eslint-disable-next-line no-useless-escape
  .refine((value: string) => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value), {
    message: 'Password must contain at least one special character.',
  });
