import type { Actions, PageServerLoad } from './$types';
import { redirect, fail } from '@sveltejs/kit';
import { signIn } from '$lib/auth';

export const load: PageServerLoad = async ({ locals }) => {
	if (locals.session) {
		throw redirect(302, '/');
	}
};

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const username = data.get('username');
		const password = data.get('password');

		if (typeof username !== 'string' || typeof password !== 'string') {
			return fail(400, { error: 'Ugyldige loginoplysninger' });
		}

		const result = await signIn('credentials', {
			username,
			password,
			redirect: false
		});

		if (!result?.ok) {
			return fail(400, {
				error: 'Forkert brugernavn eller kodeord'
			});
		}

		throw redirect(303, '/');
	}
};
