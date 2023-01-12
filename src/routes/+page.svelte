<script lang="ts">
	import LinkCard from '$lib/LinkCard.svelte';
	import RevealLinkCard from '$lib/RevealLinkCard.svelte';
	import TikTokIcon from '$lib/TikTokIcon.svelte';
	import TwitchIcon from '$lib/TwitchIcon.svelte';
	import TwitterIcon from '$lib/TwitterIcon.svelte';
	import YoutubeIcon from '$lib/YoutubeIcon.svelte';
	import InstagramIcon from '$lib/InstagramIcon.svelte';
	import EmailIcon from '$lib/EmailIcon.svelte';
	import GithubIcon from '$lib/GithubIcon.svelte';

	import type { ComponentType, SvelteComponentTyped } from 'svelte';
	import type { PageData } from './$types';

	import logo from '$lib/assets/logo.jpeg';

	function renderIcon(
		icon: PageData['links'][0]['icon']
	): ComponentType<SvelteComponentTyped<any>> | undefined {
		switch (icon) {
			case 'twitch':
				return TwitchIcon;
			case 'youtube':
				return YoutubeIcon;
			case 'twitter':
				return TwitterIcon;
			case 'instagram':
				return InstagramIcon;
			case 'tiktok':
				return TikTokIcon;
			default:
				return undefined;
		}
	}

	export const email = 'lokuzt.sw@gmail.com';
	export let data: PageData;
</script>

<div class="w-full flex flex-col items-center justify-center mx-auto pt-16 px-8">
	<img src={logo} class="rounded-full" alt="Lokuzt" width={96} height={96} />

	<h1 class="font-bold mt-4 mb-8 text-xl text-white">Lokuzt</h1>

	{#each data.links as link}
		<LinkCard title={link.title} href={link.href} icon={renderIcon(link.icon)} />
	{/each}

	<RevealLinkCard revealText="Unlock E-mail" title={email} href="mailto:{email}" icon={EmailIcon} />

	<div class="flex items-center gap-4 mt-8 text-white">
		<a
			aria-label="Github link"
			href="https://github.com/JoaoCnh"
			target="_blank"
			rel="noopener noreferrer"
		>
			<GithubIcon class="w-10 h-10" />
		</a>
	</div>

	<footer class="mt-16 mb-8">
		<span>&copy; {new Date().getFullYear()} Lokuzt</span>
	</footer>
</div>
