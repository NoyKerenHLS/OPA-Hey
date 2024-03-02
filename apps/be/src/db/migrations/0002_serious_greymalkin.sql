ALTER TABLE "orders" ALTER COLUMN "notes" SET DEFAULT '';--> statement-breakpoint
ALTER TABLE "orders" ALTER COLUMN "notes" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "orders" ALTER COLUMN "status" SET NOT NULL;