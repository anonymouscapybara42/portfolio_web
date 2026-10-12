<script>
	import { onMount } from 'svelte';
	import ArrowUp from '@lucide/svelte/icons/arrow-up';

	let visible = $state(false);

	onMount(() => {
		const onScroll = () => (visible = window.scrollY > 700);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});

	function toTop() {
		const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
	}
</script>

{#if visible}
	<button
		type="button"
		onclick={toTop}
		class="fixed right-4 bottom-4 z-40 inline-flex size-12 items-center justify-center rounded-full border border-line-strong bg-surface text-ink shadow-lg shadow-black/40 transition-colors hover:border-accent hover:text-accent sm:right-6 sm:bottom-6"
		aria-label="Back to top"
	>
		<ArrowUp size={20} aria-hidden="true" />
	</button>
{/if}
