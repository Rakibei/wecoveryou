import { json } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { iphonerepair, ipadrepair } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';

export async function POST({ request, url }) {
	const type = url.searchParams.get('type');
	const items: { id: number; position: number }[] = await request.json();

	if (type === 'iphone') {
		for (const item of items) {
			await db
				.update(iphonerepair)
				.set({ position: item.position })
				.where(eq(iphonerepair.id, item.id));
		}
	}

	if (type === 'ipad') {
		for (const item of items) {
			await db
				.update(ipadrepair)
				.set({ position: item.position })
				.where(eq(ipadrepair.id, item.id));
		}
	}

	return json({ success: true });
}
