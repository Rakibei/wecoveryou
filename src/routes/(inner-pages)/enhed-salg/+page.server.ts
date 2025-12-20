import { db } from '$lib/server/db';
import { iphonerepair, ipadrepair } from '$lib/server/db/schema';
import { calculateSellPrice } from '$lib/calc/price';
import { eq } from 'drizzle-orm';

export const load = async () => {
	return {
		iphones: await db.select().from(iphonerepair),
		ipads: await db.select().from(ipadrepair)
	};
};

export const actions = {
	calculate: async ({ request }) => {
		const data = await request.formData();

		const type = data.get('type');
		const name = data.get('name') as string;
		const repairs = data.getAll('repairs') as string[];

		const table = type === 'ipad' ? ipadrepair : iphonerepair;

		const device = await db
			.select()
			.from(table)
			.where(eq(table.name, name))
			.limit(1)
			.then((r) => r[0]);

		if (!device) {
			return { error: 'Device not found' };
		}

		return calculateSellPrice(device, repairs as any);
	}
};
