<script>
	import GraduationCap from '@lucide/svelte/icons/graduation-cap';
	import MapPin from '@lucide/svelte/icons/map-pin';
	import SectionHeading from './SectionHeading.svelte';
	import { reveal } from '#lib/actions/reveal.js';
	import { education } from '#lib/data/profile.js';
</script>

<section id="education" class="section border-t border-line" aria-labelledby="education-title">
	<div class="container-page">
		<SectionHeading id="education-title" eyebrow="05 / Education" title="Education" />

		<article class="card flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8" use:reveal>
			<div class="flex gap-5">
				<span
					class="flex size-12 shrink-0 items-center justify-center rounded-xl border border-line bg-surface-2 text-accent"
				>
					<GraduationCap size={24} aria-hidden="true" />
				</span>
				<div>
					<h3 class="text-xl font-semibold text-ink">{education.degree}</h3>
					<p class="mt-1 text-muted">{education.university}</p>
					<p class="mt-2 inline-flex items-center gap-1.5 text-sm text-faint">
						<MapPin size={14} aria-hidden="true" />
						{education.location}
					</p>
				</div>
			</div>
			<p class="font-mono text-sm text-accent sm:text-right">{education.period}</p>
		</article>
	</div>
</section>
