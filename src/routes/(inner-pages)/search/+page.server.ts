import type { PageServerLoad } from './$types';
import { db } from '$lib/server/db';
import { user } from '$lib/server/db/schema';

export const load: PageServerLoad = async ({ url }) => {
	const q = url.searchParams.get('q');

	const u = await db.select().from(user);

	const filtered = q ? u.filter((u) => u.username.toString().includes(q.toLowerCase())) : u;

	return {
		users: filtered,
		query: q
	};
};
