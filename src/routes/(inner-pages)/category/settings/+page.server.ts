import type { PageServerLoad } from './$types';
import { db } from '$lib/server/db';
import { users } from '$lib/server/db/schema';

export const load: PageServerLoad = async () => {
	const user = await db.select().from(users);

	return {
		user
	};
};
