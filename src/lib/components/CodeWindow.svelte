<figure class="portrait-figure">
	<div class="portrait-glow" aria-hidden="true"></div>
	<img
		class="portrait"
		src="/ashley-portrait.png"
		alt="Black-and-white portrait of Ashley G. Glaraga wearing a graduation gown"
		width="768"
		height="1151"
		fetchpriority="high"
	/>
	<figcaption class="sr-only">
		A black-and-white portrait of Ashley G. Glaraga, a Computer Engineering graduate.
	</figcaption>
</figure>

<style>
	.portrait-figure {
		position: relative;
		isolation: isolate;
		display: grid;
		place-items: end center;
		width: 100%;
		max-width: 34rem;
		height: clamp(28rem, 57vw, 40rem);
		margin: 0 auto;
		animation: portrait-open 750ms cubic-bezier(0.2, 0.75, 0.25, 1) both;
	}

	.portrait-glow {
		position: absolute;
		z-index: -1;
		right: 8%;
		bottom: 8%;
		width: 75%;
		aspect-ratio: 1;
		border-radius: 50%;
		background: color-mix(in oklab, var(--color-accent) 18%, transparent);
		filter: blur(5rem);
	}

	.portrait {
		position: absolute;
		inset: 0;
		display: block;
		width: 100%;
		height: 100%;
		min-height: 0;
		object-fit: contain;
		object-position: center bottom;
		filter: grayscale(1) brightness(1.04);
		mask-image: linear-gradient(to bottom, #000 72%, transparent 100%);
		animation: portrait-enter 850ms 100ms cubic-bezier(0.2, 0.75, 0.25, 1) both;
	}

	@keyframes portrait-open {
		from {
			opacity: 0;
			transform: translateY(1rem);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes portrait-enter {
		from {
			opacity: 0;
			transform: translateY(0.75rem) scale(0.985);
		}
		to {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
	}

	@media (max-width: 639px) {
		.portrait-figure {
			height: clamp(25rem, 110vw, 34rem);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.portrait-figure,
		.portrait {
			animation: none;
		}
	}
</style>
