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

export const userInfoSchema = z.object({
  id: z.number(),
  email: z.string().email(),
  display_name: z.string(),
  username: z.string(),
  first_name: z.string().optional().nullable(),
  last_name: z.string().optional().nullable(),
  phone_number: z.string().optional().nullable(),
  profile_picture: z.string().optional().nullable(),
  bio: z.string().optional().nullable(),
  status: z.string().optional().nullable(),
});
