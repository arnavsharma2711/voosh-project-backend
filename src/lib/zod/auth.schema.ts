import { z } from 'zod';
import { passwordSchema } from './common.schema';

export const registerNewUserSchema = z.object({
  display_name: z.string({
    required_error: 'Display Name is required.',
    invalid_type_error: 'Display Name must be a text.',
  }),
  email: z
    .string({
      required_error: 'Email is required.',
      invalid_type_error: 'Email must be a text.',
    })
    .email({ message: 'Please provide a valid email.' })
    .toLowerCase(),
  password: passwordSchema,
});

export const authenticateUserSchema = z.object({
  identifier: z.string({
    required_error: 'Email, username, phone_number is required.',
    invalid_type_error: 'Email, username, phone_number must be a text.',
  }),
  password: z.string({
    required_error: 'Password is required.',
    invalid_type_error: 'Password must be a text.',
  }),
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
  status: z.union([z.literal('public'), z.literal('private')]),
});
