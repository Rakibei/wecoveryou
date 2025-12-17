import type { PageServerLoad } from './$types';
import { db } from '$lib/server/db';
import { users } from '$lib/server/db/schema';

export const load: PageServerLoad = async ({ url }) => {
	const q = url.searchParams.get('q');

	const user = await db.select().from(users);

	const filtered = q ? user.filter((u) => u.username.toString().includes(q)) : user;

	return {
		users: filtered,
		query: q
	};
};
