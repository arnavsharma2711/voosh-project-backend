DO $$ BEGIN
 CREATE TYPE "user-status" AS ENUM('public', 'private');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"encrypted_password" text,
	"first_name" varchar(255),
	"last_name" varchar(255),
	"display_name" varchar(255),
	"username" varchar(255),
	"phone_number" varchar(255),
	"profile_picture" text,
	"status" "user-status" DEFAULT 'public',
	"bio" text,
	"access_token" text,
	"refresh_token" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email"),
	CONSTRAINT "users_username_unique" UNIQUE("username"),
	CONSTRAINT "users_phone_number_unique" UNIQUE("phone_number")
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "users_email_idx" ON "users" ("email");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "users_username_idx" ON "users" ("username");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "users_phone_number_idx" ON "users" ("phone_number");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "users_first_name_last_name_idx" ON "users" ("first_name","last_name");