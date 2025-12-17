CREATE TABLE "ipadrepair" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"screen" text,
	"battery" text,
	"lcd" text,
	"homebutton" text,
	"frontcamera" text,
	"backcamera" text,
	"chargeport" text,
	CONSTRAINT "ipadrepair_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "phonerepair" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"screen" text,
	"screenpro" text,
	"battery" text,
	"backcamera" text,
	"backcameraglass" text,
	"frontcamera" text,
	"backcoverframe" text,
	"backcoverglass" text,
	"chargeport" text,
	"speaker" text,
	CONSTRAINT "phonerepair_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" varchar(256) NOT NULL,
	"password" varchar(256) NOT NULL,
	"email" varchar(256) NOT NULL,
	"fullname" varchar(256),
	"phone" varchar(20),
	"address" text,
	"role" varchar(50) DEFAULT 'user' NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
