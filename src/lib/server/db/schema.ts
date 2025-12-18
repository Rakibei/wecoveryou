import { pgTable, serial, varchar, text, timestamp, integer, primaryKey } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
	id: serial('id').primaryKey(),
	username: varchar('username', { length: 256 }).unique().notNull(),
	password: varchar('password', { length: 256 }).notNull(),
	email: varchar('email', { length: 256 }).unique(),
	fullname: varchar('fullname', { length: 256 }),
	phone: varchar('phone', { length: 20 }),
	address: text('address'),
	role: varchar('role', { length: 50 }).notNull().default('user')
});

export const iphonerepair = pgTable('phonerepair', {
	id: serial('id').primaryKey(),
	name: text('name').unique().notNull(),
	screenprice: text('screen'),
	screenproprice: text('screenpro'),
	batteryprice: text('battery'),
	backcameraprice: text('backcamera'),
	backcameraglassprice: text('backcameraglass'),
	frontcameraprice: text('frontcamera'),
	backcoverframeprice: text('backcoverframe'),
	backcoverglassprice: text('backcoverglass'),
	chargeportprice: text('chargeport'),
	speakerprice: text('speaker')
});

export const ipadrepair = pgTable('ipadrepair', {
	id: serial('id').primaryKey(),
	name: text('name').unique().notNull(),
	screenprice: text('screen'),
	batteryprice: text('battery'),
	lcdprice: text('lcd'),
	homebuttonprice: text('homebutton'),
	frontcameraprice: text('frontcamera'),
	backcameraprice: text('backcamera'),
	chargeportprice: text('chargeport')
});

export const accounts = pgTable(
  "account",
  {
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: text('type').notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => [
    {
      compoundKey: primaryKey({
        columns: [account.provider, account.providerAccountId],
      }),
    },
  ]
)

export const sessions = pgTable("session", {
  sessionToken: text("sessionToken").primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
})

export const verificationTokens = pgTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (verificationToken) => [
    {
      compositePk: primaryKey({
        columns: [verificationToken.identifier, verificationToken.token],
      }),
    },
  ]
)