import { error } from '@sveltejs/kit';
import { details } from '../data.js';

export function load({ params }) {
	const detail = details.find((detail) => detail.slug === params.slug);

	if (!detail) error(404);

	return {
		detail
	};
}
