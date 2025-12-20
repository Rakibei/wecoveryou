import { pgTable, serial, varchar, text, timestamp, boolean, integer, numeric } from 'drizzle-orm/pg-core';

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
	position: integer('position').notNull().default(0),
	name: text('name').unique().notNull(),
	baseprice: numeric('base', { precision: 12, scale: 2 }).notNull(),
	screenprice: numeric('screen', { precision: 12, scale: 2 }),
	screenproprice: numeric('screenpro', { precision: 12, scale: 2 }),
	batteryprice: numeric('battery', { precision: 12, scale: 2 }),
	backcameraprice: numeric('backcamera', { precision: 12, scale: 2 }),
	backcameraglassprice: numeric('backcameraglass', { precision: 12, scale: 2 }),
	frontcameraprice: numeric('frontcamera', { precision: 12, scale: 2 }),
	backcoverframeprice: numeric('backcoverframe', { precision: 12, scale: 2 }),
	backcoverglassprice: numeric('backcoverglass', { precision: 12, scale: 2 }),
	chargeportprice: numeric('chargeport', { precision: 12, scale: 2 }),
	speakerprice: numeric('speaker', { precision: 12, scale: 2 })
});

export const ipadrepair = pgTable('ipadrepair', {
	id: serial('id').primaryKey(),
	position: integer('position').notNull().default(0),
	name: text('name').unique().notNull(),
	baseprice: numeric('base', { precision: 12, scale: 2 }).notNull(),
	screenprice: numeric('screen', { precision: 12, scale: 2 }),
	batteryprice: numeric('battery', { precision: 12, scale: 2 }),
	lcdprice: numeric('lcd', { precision: 12, scale: 2 }),
	homebuttonprice: numeric('homebutton', { precision: 12, scale: 2 }),
	frontcameraprice: numeric('frontcamera', { precision: 12, scale: 2 }),
	backcameraprice: numeric('backcamera', { precision: 12, scale: 2 }),
	chargeportprice: numeric('chargeport', { precision: 12, scale: 2 })
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
