<script>
	import Search from '@lucide/svelte/icons/search';
	import Rocket from '@lucide/svelte/icons/rocket';
	import Users from '@lucide/svelte/icons/users';
	import SectionHeading from './SectionHeading.svelte';
	import { reveal } from '#lib/actions/reveal.js';
	import { about } from '#lib/data/profile.js';

	const icons = { search: Search, rocket: Rocket, users: Users };
</script>

<section id="about" class="section border-t border-line" aria-labelledby="about-title">
	<div class="container-page">
		<SectionHeading id="about-title" eyebrow="01 / About" title={about.heading} />

		<div class="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
			<div class="space-y-5 text-pretty text-muted sm:text-[1.05rem]" use:reveal>
				{#each about.paragraphs as paragraph}
					<p>{paragraph}</p>
				{/each}
			</div>
			<ul class="grid grid-cols-1 gap-4">
				{#each about.values as value, i (value.title)}
					{@const Icon = icons[/** @type {keyof typeof icons} */ (value.icon)]}
					<li class="card flex gap-4 p-5 transition-colors hover:border-line-strong" use:reveal={{ delay: i * 80 }}>
						<span
							class="flex size-10 shrink-0 items-center justify-center rounded-lg border border-line bg-surface-2 text-accent"
						>
							<Icon size={19} aria-hidden="true" />
						</span>
						<div>
							<h3 class="text-base font-semibold text-ink">{value.title}</h3>
							<p class="mt-1 text-sm text-muted">{value.text}</p>
						</div>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>
