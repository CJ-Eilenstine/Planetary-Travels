import { details } from '../../lib/data.js';

export function load() {
	return {
		summaries: details.map((detail) => ({
			slug: detail.slug,
			planetName: detail.planetName,
			rating: detail.rating,
			price: detail.price,
			src: detail.src,
			alt: detail.alt,
			desc: detail.desc
		}))
	};
}
