import type { Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { users } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import bcrypt from 'bcryptjs';

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const username = data.get('username');
		const email = data.get('email');
		const password = data.get('password');
		const confirm = data.get('confirm');

		if (
			typeof username !== 'string' ||
			typeof email !== 'string' ||
			typeof password !== 'string' ||
			typeof confirm !== 'string'
		) {
			return fail(400, { error: 'Ugyldige data' });
		}

		if (password !== confirm) {
			return fail(400, { error: 'Kodeord matcher ikke' });
		}

		const existingUser = await db
			.select()
			.from(users)
			.where(eq(users.username, username))
			.limit(1)
			.then((res) => res[0]);

		if (existingUser) {
			return fail(400, { error: 'Brugernavn er allerede i brug' });
		}

		const hashedPassword = await bcrypt.hash(password, 12);

		await db.insert(users).values({
			username,
			password: hashedPassword,
			email
		});

		throw redirect(303, '/login');
	}
};
