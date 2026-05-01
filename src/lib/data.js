import solarisGif from '$lib/assets/planets/solaris.gif';
import solarisBanner from '$lib/assets/banners/Solaris_Banner.png';
import masqueradeGif from '$lib/assets/planets/masquerade.gif';
import masqueradeBanner from '$lib/assets/banners/Masquerade_Banner.png';
import vexGif from '$lib/assets/planets/vex.gif';
import vexBanner from '$lib/assets/banners/Vex_Banner.png';
import vexPostcard from '$lib/assets/postcards/vexPostcard.png';
import earthGif from '$lib/assets/planets/earth.gif';

export const details = [
	{
		slug: 'Solaris',
		planetName: 'Solaris',
		rating: '1.2',
		price: '𝄽1,253',
		image: `${solarisGif}`,
		banner: `${solarisBanner}`,
		desc: "Solaris, a planet mostly covered by a 700 billion tons sentient gelatinous ocean. Come see tall extensors, complex shaped symmetriads, and mimoids that extrude masses of plasma that mimic the shapes of other things from clouds to human made object. Catch a peek of these temporary structures before they dissolve back into the ocean. Maybe you'll even see some rare free floating independents that detach themselves from the surface of Solaris. Be aware that there is no oxygen and Solaris' atmosphere is considered very toxic."
	},

	{
		slug: 'Masquerade',
		planetName: 'Masquerade',
		rating: '4.7',
		price: '𝄽55,290',
		image: `${masqueradeGif}`,
		banner: `${masqueradeBanner}`,
		desc: 'Masquerade is goldilocks planet with luscious forests and jungles. There are a few large land masses but the majority of the planet is covered in a gorgeous blue ocean. Many creatures inhabit this planet mimicking the flora and the other creatures around them.'
	},

	{
		slug: 'Vex',
		planetName: 'Vex',
		rating: '3.2',
		price: '𝄽1,500',
		image: `${vexGif}`,
		banner: `${vexBanner}`,
		modalImage: `${vexPostcard}`,
		desc: "Vex is a planet currently in an ice age and is home of the snifflers. Come see all the sniffler species before some of them go extinct. Although the majority of the planet may be frozen that doesn't mean it's not worth a visit. You can explore the snowy mountains, participate in snow activities like skiing, or you can visit the equator where it's less cold and spend time with irk snifflers the cutest and tamest of all the snifflers."
	},

	{
		slug: 'Earth',
		planetName: 'Earth',
		rating: '1.8',
		price: '𝄽1,893',
		image: `${earthGif}`,
		desc: 'Earth, .'
	}
];
