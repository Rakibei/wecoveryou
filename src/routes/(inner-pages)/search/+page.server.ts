import type { PageServerLoad } from './$types';
import { db } from '$lib/server/db';
import { user } from '$lib/server/db/schema';

export const load: PageServerLoad = async ({ url }) => {
	const q = url.searchParams.get('q');

	const users = await db.select().from(user);

	const filtered = q ? users.filter((u) => u.age.toString().includes(q)) : users;

	return {
		users: filtered,
		query: q
	};
};
