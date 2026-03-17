import { details } from './data.js';

export function load() {
	return {
		summaries: details.map((detail) => ({
			slug: detail.slug,
			planetName: detail.planetName,
			rating: detail.rating,
			price: detail.price,
			desc: detail.desc
		}))
	};
}
