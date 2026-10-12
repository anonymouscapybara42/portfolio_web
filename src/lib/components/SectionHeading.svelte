<script>
	import { reveal } from '#lib/actions/reveal.js';

	let { id, eyebrow, title, intro = '' } = $props();
</script>

<header class="mb-12 max-w-2xl md:mb-16" use:reveal>
	<p class="eyebrow mb-3">{eyebrow}</p>
	<h2 {id} class="text-3xl font-semibold text-balance text-ink sm:text-4xl">{title}</h2>
	{#if intro}
		<p class="mt-4 text-muted">{intro}</p>
	{/if}
</header>
