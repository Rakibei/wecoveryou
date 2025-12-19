import type { PageServerLoad } from './$types';
import { db } from '$lib/server/db';
import { iphonerepair, ipadrepair } from '$lib/server/db/schema';

export const load: PageServerLoad = async () => {
	const iphonerepairs = await db.select().from(iphonerepair).orderBy(iphonerepair.position);
	const ipadrepairs = await db.select().from(ipadrepair).orderBy(ipadrepair.position);

	return {
		iphonerepairs: iphonerepairs,
		ipadrepairs: ipadrepairs
	};
};
