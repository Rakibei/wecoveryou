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
