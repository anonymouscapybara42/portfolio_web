<script>
	import { onMount } from 'svelte';

	let container;
	let vantaScripts;

	function loadScript(src) {
		return new Promise((resolve, reject) => {
			const script = document.createElement('script');
			script.src = src;
			script.async = true;
			script.crossOrigin = 'anonymous';
			script.onload = resolve;
			script.onerror = () => reject(new Error(`Failed to load animation script: ${src}`));
			document.head.append(script);
		});
	}

	function loadVantaScripts() {
		vantaScripts ??= loadScript(
			'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js'
		).then(() =>
			loadScript('https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.net.min.js')
		);

		return vantaScripts;
	}

	onMount(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

		let effect;
		let cancelled = false;

		async function initialize() {
			try {
				await loadVantaScripts();
				if (cancelled) return;
				if (!container || !window.VANTA?.NET) {
					throw new Error('Vanta.NET did not initialize correctly.');
				}

				effect = window.VANTA.NET({
					el: container,
					mouseControls: true,
					touchControls: true,
					gyroControls: false,
					minHeight: 200,
					minWidth: 200,
					scale: 1,
					scaleMobile: 1,
					color: 0xa3e635,
					backgroundColor: 0x0b0c0f,
					points: 8,
					maxDistance: 22,
					spacing: 18,
					showDots: true
				});
			} catch (error) {
				console.error('Unable to initialize the portfolio background animation.', error);
			}
		}

		void initialize();

		return () => {
			cancelled = true;
			effect?.destroy();
		};
	});
</script>

<div class="network-background" bind:this={container} aria-hidden="true"></div>

<style>
	.network-background {
		position: fixed;
		inset: 0;
		z-index: 0;
		pointer-events: none;
	}

	.network-background :global(canvas) {
		display: block;
		opacity: 0.55;
	}
</style>
