import { serial, pgTable, text, timestamp, varchar, pgEnum, uniqueIndex } from 'drizzle-orm/pg-core';

//Enums
export const userStatus = pgEnum('user-status', ['public', 'private']);

// Schemas

export const users = pgTable(
  'users',
  {
    id: serial('id').notNull().primaryKey(),
    email: text('email').notNull().unique(),
    encrypted_password: text('encrypted_password'),
    first_name: varchar('first_name', { length: 255 }),
    last_name: varchar('last_name', { length: 255 }),
    display_name: varchar('display_name', { length: 255 }),
    username: varchar('username', { length: 255 }).unique(),
    phone_number: varchar('phone_number', { length: 255 }).unique(),
    profile_picture: text('profile_picture'),
    status: userStatus('status').default('public'),
    bio: text('bio'),
    access_token: text('access_token'),
    refresh_token: text('refresh_token'),
    created_at: timestamp('created_at', { mode: 'date' }).notNull().defaultNow(),
    updated_at: timestamp('updated_at', { mode: 'date' }).notNull().defaultNow(),
  },
  (users) => {
    return {
      emailIdx: uniqueIndex('users_email_idx').on(users.email),
      usernameIndex: uniqueIndex('users_username_idx').on(users.username),
      phoneNumberIndex: uniqueIndex('users_phone_number_idx').on(users.phone_number),
      nameIndex: uniqueIndex('users_first_name_last_name_idx').on(users.first_name, users.last_name),
    };
  },
);

export const userProvider = pgTable(
  'user_provider',
  {
    id: serial('id').notNull().primaryKey(),
    user_id: serial('user_id')
      .notNull()
      .references(() => users.id),
    provider: varchar('provider', { length: 255 }).notNull(),
    provider_id: varchar('provider_id', { length: 255 }).notNull(),
    created_at: timestamp('created_at', { mode: 'date' }).notNull().defaultNow(),
    updated_at: timestamp('updated_at', { mode: 'date' }).notNull().defaultNow(),
  },
  (user_provider) => {
    return {
      providerIndx: uniqueIndex('user_providers_idx').on(user_provider.provider, user_provider.provider_id),
    };
  },
);
