<script>
	import MapPin from '@lucide/svelte/icons/map-pin';
	import SectionHeading from './SectionHeading.svelte';
	import { reveal } from '#lib/actions/reveal.js';
	import { experience } from '#lib/data/experience.js';
</script>

<section id="experience" class="section border-t border-line" aria-labelledby="experience-title">
	<div class="container-page">
		<SectionHeading
			id="experience-title"
			eyebrow="02 / Experience"
			title="Where I've Built and Shipped"
			intro="Design and development work, from marketing layouts to deployed applications."
		/>

		<ol class="relative space-y-8 border-l border-line pl-6 sm:pl-10">
			{#each experience as job, i (job.role + job.org)}
				<li class="relative" use:reveal={{ delay: i * 80 }}>
					<span
						class="absolute top-2 -left-[1.93rem] size-3 rounded-full border-2 border-accent bg-bg sm:-left-[2.93rem]"
						aria-hidden="true"
					></span>

					<article class="card p-6 transition-colors hover:border-line-strong sm:p-8">
						<div class="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
							<div>
								<h3 class="text-xl font-semibold text-ink">{job.role}</h3>
								<p class="text-muted">{job.org}</p>
							</div>
							<div class="sm:text-right">
								<p class="font-mono text-[0.8rem] text-accent">{job.date}</p>
								<p class="mt-1 inline-flex items-center gap-1.5 text-sm text-faint">
									<MapPin size={14} aria-hidden="true" />
									{job.location}
								</p>
							</div>
						</div>

						<p class="mt-4 text-sm text-ink/80 italic">{job.focus}</p>

						<ul class="mt-5 space-y-3 text-muted">
							{#each job.points as point}
								<li class="flex gap-3">
									<span class="mt-[0.7em] h-px w-3 shrink-0 bg-line-strong" aria-hidden="true"></span>
									<span>{point}</span>
								</li>
							{/each}
						</ul>
					</article>
				</li>
			{/each}
		</ol>
	</div>
</section>
