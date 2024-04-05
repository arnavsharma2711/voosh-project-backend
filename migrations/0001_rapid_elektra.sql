CREATE TABLE IF NOT EXISTS "user_provider" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" serial NOT NULL,
	"provider" varchar(255) NOT NULL,
	"provider_id" varchar(255) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "user_providers_idx" ON "user_provider" ("provider","provider_id");--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_provider" ADD CONSTRAINT "user_provider_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
