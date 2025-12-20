import { db } from '$lib/server/db';
import { iphonerepair, ipadrepair } from '$lib/server/db/schema';
import { eq, sql } from 'drizzle-orm';

export const load = async () => {
	return {
		iphones: await db.select().from(iphonerepair).orderBy(iphonerepair.position),
		ipads: await db.select().from(ipadrepair).orderBy(ipadrepair.position)
	};
};

function parsePrices<T extends readonly string[]>(
	formData: FormData,
	fields: T
): { [K in T[number]]: string | null } {
	const data = {} as { [K in T[number]]: string | null };

	for (const field of fields) {
		const key = field as T[number];
		const value = formData.get(key);
		data[key] = value === '' || value === null ? null : String(value);
	}

	return data;
}

export const actions = {
	addIphone: async ({ request }) => {
		const form = await request.formData();

		const [{ max }] = await db
			.select({ max: sql<number>`max(${iphonerepair.position})` })
			.from(iphonerepair);

		await db.insert(iphonerepair).values({
			name: String(form.get('name')),
			position: (max ?? -1) + 1,
			baseprice: String(form.get('baseprice')),
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
			] as const)
		});
    return { success: true };
	},

	updateIphone: async ({ request }) => {
	const form = await request.formData();
	const id = Number(form.get('id'));
	const name = String(form.get('name'));

	await db
		.update(iphonerepair)
		.set({
			name,
			...parsePrices(form, [
				'baseprice',
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
		})
		.where(eq(iphonerepair.id, id));
		return { success: true };
	},

	addIpad: async ({ request }) => {
		const form = await request.formData();

		const [{ max }] = await db
			.select({ max: sql<number>`max(${ipadrepair.position})` })
			.from(ipadrepair);

		await db.insert(ipadrepair).values({
			name: String(form.get('name')),
			position: (max ?? -1) + 1,
			baseprice: String(form.get('baseprice')),
			...parsePrices(form, [
				'screenprice',
				'batteryprice',
				'lcdprice',
				'homebuttonprice',
				'frontcameraprice',
				'backcameraprice',
				'chargeportprice'
			] as const)
		});
    return { success: true };
	},

	updateIpad: async ({ request }) => {
		const form = await request.formData();
		const id = Number(form.get('id'));
		const name = String(form.get('name'));

		await db
			.update(ipadrepair)
			.set({
			name,
			...parsePrices(form, [
				'baseprice',
				'screenprice',
				'batteryprice',
				'lcdprice',
				'homebuttonprice',
				'frontcameraprice',
				'backcameraprice',
				'chargeportprice'
			])
		})
			.where(eq(ipadrepair.id, id));
    return { success: true };
	}
};
