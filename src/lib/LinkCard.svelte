<script lang="ts">
	import type { ComponentType, SvelteComponentTyped } from 'svelte/internal';

	export let href: string;
	export let title: string;
	export let icon: ComponentType<SvelteComponentTyped<any>> | undefined = undefined;
</script>

<a
	{href}
	target="_blank"
	rel="noopener noreferrer"
	class="w-full flex items-center p-1 rounded-md hover:scale-105 transition-all bg-zinc-100 mb-3 max-w-3xl"
>
	<div class="w-full flex text-center">
		{#if icon}
			<div class="w-10 h-10">
				<svelte:component this={icon} class="rounded-sm w-10 h-10" />
			</div>
		{/if}

		<h2 class="w-full flex justify-center items-center font-semibold text-zinc-700 -ml-10">
			{title}
		</h2>
	</div>
</a>
