import { pgTable, serial, varchar, text, timestamp, boolean } from 'drizzle-orm/pg-core';

export const user = pgTable('users', {
	id: serial('id').primaryKey(),
  guid: text('guid').unique().notNull(),
	username: varchar('username', { length: 256 }).unique().notNull(),
	passwordHash: varchar('password', { length: 256 }).notNull(),
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

export const session = pgTable('session', {
	id: text('id').primaryKey(),
	userId: text('user_guid')
		.notNull()
		.references(() => user.guid),
	expiresAt: timestamp('expires_at', { withTimezone: true, mode: 'date' }).notNull(),
	rememberMe: boolean('remember_me').notNull().default(false)
});

export type Session = typeof session.$inferSelect;

export type User = typeof user.$inferSelect;
