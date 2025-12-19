import { db } from '$lib/server/db';
import { iphonerepair, ipadrepair } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';

export const load = async () => {
	return {
		iphones: await db.select().from(iphonerepair).orderBy(iphonerepair.position),
		ipads: await db.select().from(ipadrepair).orderBy(ipadrepair.position)
	};
};

function parsePrices(formData: FormData, fields: string[]) {
	const data: Record<string, number | null> = {};
	for (const field of fields) {
		const value = formData.get(field);
		data[field] = value === '' ? null : Number(value);
	}
	return data;
}

export const actions = {
	addIphone: async ({ request }) => {
		const form = await request.formData();

		await db.insert(iphonerepair).values({
			name: String(form.get('name')),
			...parsePrices(form, [
				'screenprice',
				'screenproprice',
				'batteryprice',
				'backcameraprice',
				'backcameraglassprice',
				'frontcameraprice',
				'backcoverframeprice',
				'backcoverglassprice',
				'chargeportprice',
				'speakerprice'
			])
		});
    return { success: true };
	},

	updateIphone: async ({ request }) => {
		const form = await request.formData();
		const id = Number(form.get('id'));

        console.log(id)

		await db
			.update(iphonerepair)
			.set(parsePrices(form, [
				'screenprice',
				'screenproprice',
				'batteryprice',
				'backcameraprice',
				'backcameraglassprice',
				'frontcameraprice',
				'backcoverframeprice',
				'backcoverglassprice',
				'chargeportprice',
				'speakerprice'
			]))
			.where(eq(iphonerepair.id, id));
    return { success: true };
	},

	addIpad: async ({ request }) => {
		const form = await request.formData();

		await db.insert(ipadrepair).values({
			name: String(form.get('name')),
			...parsePrices(form, [
				'screenprice',
				'batteryprice',
				'lcdprice',
				'homebuttonprice',
				'frontcameraprice',
				'backcameraprice',
				'chargeportprice'
			])
		});
    return { success: true };
	},

	updateIpad: async ({ request }) => {
		const form = await request.formData();
		const id = Number(form.get('id'));

		await db
			.update(ipadrepair)
			.set(parsePrices(form, [
				'screenprice',
				'batteryprice',
				'lcdprice',
				'homebuttonprice',
				'frontcameraprice',
				'backcameraprice',
				'chargeportprice'
			]))
			.where(eq(ipadrepair.id, id));
    return { success: true };
	}
};
