<script lang="ts">
    import LinkCard from '$lib/LinkCard.svelte';
	import TikTokIcon from '$lib/TikTokIcon.svelte';
	import TwitchIcon from '$lib/TwitchIcon.svelte';
	import TwitterIcon from '$lib/TwitterIcon.svelte';
	import YoutubeIcon from '$lib/YoutubeIcon.svelte';
	import InstagramIcon from '$lib/InstagramIcon.svelte';
	import GithubIcon from '$lib/GithubIcon.svelte';

	import type { ComponentType, SvelteComponentTyped } from 'svelte';
	import type { PageData } from './$types';

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

	export let data: PageData;
</script>

<div class="w-full flex flex-col items-center justify-center mx-auto mt-16 px-8">
	<h1 class="font-bold mt-4 mb-8 text-xl text-white">Lokuzt</h1>

	{#each data.links as link}
		<LinkCard title={link.title} href={link.href} icon={renderIcon(link.icon)} />
	{/each}

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
</div>
