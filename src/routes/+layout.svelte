<script>
	import '../app.css';

	import logo from '$lib/assets/logo.jpeg';

	export const title = 'Lokuzt link-tree';
	export const description = "Lokuzt's Social Links & Contacts";
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://lokuzt-tree.vercel.app/" />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:image" content={logo} />
</svelte:head>

<slot />
