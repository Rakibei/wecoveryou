import { pgTable, serial, integer, text } from 'drizzle-orm/pg-core';

export const user = pgTable('user', { id: serial('id').primaryKey(), age: integer('age').notNull() });

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
