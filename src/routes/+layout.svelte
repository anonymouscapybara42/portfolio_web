<script>
	import '../app.css';
	import { profile } from '#lib/data/profile.js';
	import NetworkBackground from '#lib/components/NetworkBackground.svelte';

	let { children } = $props();

	const base = profile.site.url.replace(/\/$/, '');
	const ogImage = base ? `${base}/og-image.png` : '/og-image.png';
</script>

<svelte:head>
	<title>{profile.site.title}</title>
	<meta name="description" content={profile.site.description} />
	<meta name="author" content={profile.name} />

	<meta property="og:type" content="website" />
	<meta property="og:title" content={profile.site.title} />
	<meta property="og:description" content={profile.site.description} />
	<meta property="og:site_name" content={profile.name} />
	{#if base}<meta property="og:url" content={base} />{/if}
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:alt" content="Ashley G. Glaraga: Web Developer and Computer Engineering Graduate" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={profile.site.title} />
	<meta name="twitter:description" content={profile.site.description} />
	{#if base}<link rel="canonical" href={base} />{/if}
</svelte:head>

<NetworkBackground />

<div class="site-content">
	<a
		href="#main"
		class="sr-only z-[100] rounded-md bg-accent px-4 py-2 font-semibold text-accent-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
	>
		Skip to content
	</a>

	{@render children()}
</div>

<style>
	.site-content {
		position: relative;
		z-index: 1;
	}
</style>
