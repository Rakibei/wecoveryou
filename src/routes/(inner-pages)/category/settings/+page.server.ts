import type { PageServerLoad } from './$types';
import { db } from '$lib/server/db';
import { user } from '$lib/server/db/schema';

export const load: PageServerLoad = async () => {
	const u = await db.select().from(user);

	return {
		users: u
	};
};
