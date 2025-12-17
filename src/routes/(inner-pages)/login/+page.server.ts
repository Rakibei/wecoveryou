import type { Actions, PageServerLoad } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import { db } from '$lib/server/db'; // your drizzle instance
import { users } from '$lib/server/db/schema'; // your users table
import { eq } from 'drizzle-orm';
import bcrypt from 'bcrypt';

// Optional: if you want to block access when already logged in
/*export const load: PageServerLoad = async ({ locals }) => {
	if (locals.users) {
		throw redirect(302, '/');
	}
};*/

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();
		const username = data.get('username');
		const password = data.get('password');
		//const remember = data.get('remember');

		if (typeof username !== 'string' || typeof password !== 'string') {
			return fail(400, { error: 'Ugyldige loginoplysninger' });
		}

		// Fetch user from database
		const user = await db.query.users.findFirst({
			where: eq(users.username, username)
		});

		if (!user) {
			return fail(400, { error: 'Forkert brugernavn eller kodeord' });
		}

		// Compare password (assuming bcrypt hash)
		const validPassword = await bcrypt.compare(password, user.password);

		if (!validPassword) {
			return fail(400, { error: 'Forkert brugernavn eller kodeord' });
		}

		// Create session (example using a simple cookie-based session id)
		// Replace this with Lucia, Auth.js, or your own session table if desired
		/*
        const sessionId = crypto.randomUUID();

		await db.insert( sessions table ).values({
			id: sessionId,
			userId: user.id,
			expiresAt: new Date(Date.now() + (remember ? 1000 * 60 * 60 * 24 * 30 : 1000 * 60 * 60 * 24))
		});

		cookies.set('session', sessionId, {
			path: '/',
			httpOnly: true,
			sameSite: 'lax',
			secure: true,
			maxAge: remember ? 60 * 60 * 24 * 30 : 60 * 60 * 24
		});
        */

		throw redirect(303, '/');
	}
};
