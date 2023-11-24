import type { PageServerLoad } from './$types';

type PossibleIcon = 'twitch' | 'youtube' | 'twitter' | 'instagram' | 'tiktok';

interface Link {
	href: string;
	title: string;
	icon: PossibleIcon;
}

interface Data {
	links: Link[];
}

export const load: PageServerLoad = (async ({ setHeaders }) => {
	setHeaders({
		'cache-control': `s-maxage=${1000 * 60 * 60 * 24}`
	});

	return {
		links: [
			{
				title: 'Twitch',
				href: 'https://twitch.tv/lokuzt_sw',
				icon: 'twitch'
			},
			{
				title: 'Youtube',
				href: 'https://www.youtube.com/c/LokuztSW',
				icon: 'youtube'
			},
			{
				title: 'Twitter',
				href: 'https://twitter.com/joao_cnh',
				icon: 'twitter'
			},
			{
				title: 'Instagram',
				href: 'https://www.instagram.com/lokuzt_sw/',
				icon: 'instagram'
			},
			{
				title: 'TikTok',
				href: 'https://www.tiktok.com/@lokuzt_sw',
				icon: 'tiktok'
			}
		]
	};
});
