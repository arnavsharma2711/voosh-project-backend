import { z } from 'zod';
import { passwordSchema } from './common.schema';

export const updateUserInfoSchema = z.object({
  display_name: z.string({
    required_error: 'Display name is required.',
    invalid_type_error: 'Display name must be a text.',
  }),
  first_name: z.string().optional().nullable(),
  last_name: z.string().optional().nullable(),
  phone_number: z.string().optional().nullable(),
  profile_picture: z.string().optional().nullable(),
  bio: z.string().optional().nullable(),
});

export const passwordUpdateSchema = z.object({
  old_password: z.string({
    required_error: 'Old password is required.',
    invalid_type_error: 'Old password must be a text.',
  }),
  new_password: passwordSchema,
});

export const emailUpdateSchema = z.object({
  email: z
    .string({
      required_error: 'Email is required.',
      invalid_type_error: 'Email must be a text.',
    })
    .email(),
});

export const usernameUpdateSchema = z.object({
  username: z.string({
    required_error: 'Username is required.',
    invalid_type_error: 'Username must be a text.',
  }),
});

export const statusUpdateSchema = z.object({
  status: z.union([z.literal('public'), z.literal('private')]),
});
