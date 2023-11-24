<script lang="ts">
	import type { ComponentType, SvelteComponentTyped } from 'svelte';
	import LinkCard from './LinkCard.svelte';

	let revealed = false;

	function reveal() {
		revealed = true;
	}

	export let revealText: string;
	export let href: string;
	export let title: string;
	export let icon: ComponentType<SvelteComponentTyped<any>> | undefined = undefined;
</script>

{#if revealed}
	<LinkCard {title} {href} {icon} />
{:else}
	<button
		class="w-full flex items-center p-1 rounded-md bg-zinc-100 mb-3 max-w-3xl"
		on:click={reveal}
	>
		<div class="w-full flex text-center">
			{#if icon}
				<div class="w-10 h-10">
					<svelte:component this={icon} class="rounded-sm w-10 h-10" />
				</div>
			{/if}

			<h2 class="w-full flex justify-center items-center font-semibold text-zinc-700 -ml-10">
				{revealText}
			</h2>
		</div>
	</button>
{/if}
