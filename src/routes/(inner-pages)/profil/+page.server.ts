import * as auth from '$lib/server/auth';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { requireUser } from '$lib/server/auth';

export const load = async () => {
    return { user: requireUser() };
};

export const actions: Actions = {
	logout: async (event) => {
		if (!event.locals.session) {
			return fail(401);
		}
		await auth.invalidateSession(event.locals.session.userId);
		auth.deleteSessionTokenCookie(event);

		return redirect(302, '/login');
	}
};
