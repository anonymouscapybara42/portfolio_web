<script>
	import ExternalLink from '@lucide/svelte/icons/external-link';
	import Check from '@lucide/svelte/icons/check';
	import ProjectVisual from './ProjectVisual.svelte';
	import BrandIcon from './BrandIcon.svelte';
	import { reveal } from '#lib/actions/reveal.js';

	/**
	 * @type {{ project: import('#lib/data/projects.js').projects[number], index?: number }}
	 */
	let { project, index = 0 } = $props();
</script>

<article
	class="card group flex h-full flex-col overflow-hidden transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-line-strong"
	use:reveal={{ delay: (index % 2) * 90 }}
	aria-labelledby="project-{project.id}"
>
	<ProjectVisual kind={project.visual} />

	<div class="flex flex-1 flex-col p-6 sm:p-7">
		<p class="eyebrow">{project.category}</p>
		<h3 id="project-{project.id}" class="mt-2 text-2xl font-semibold text-ink">{project.title}</h3>

		<p class="mt-4 text-pretty text-muted">{project.description}</p>

		{#if project.highlight}
			<div class="mt-5 rounded-lg border border-accent/30 bg-accent/5 p-4">
				<p class="eyebrow mb-1.5">Technical highlight</p>
				<p class="text-sm text-ink/90">{project.highlight}</p>
			</div>
		{/if}

		<h4 class="mt-6 text-xs font-semibold tracking-wider text-faint uppercase">Key features</h4>
		<ul class="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 text-sm text-muted sm:grid-cols-2">
			{#each project.features as feature}
				<li class="flex gap-2.5">
					<Check size={15} class="mt-1 shrink-0 text-accent" aria-hidden="true" />
					<span>{feature}</span>
				</li>
			{/each}
		</ul>

		<ul class="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
			{#each project.tech as t}
				<li class="tag">{t}</li>
			{/each}
		</ul>

		<!-- Buttons render only when a real URL exists in data/projects.js -->
		{#if project.live || project.source}
			<div class="mt-7 flex flex-wrap gap-3 pt-1">
				{#if project.live}
					<a
						href={project.live}
						target="_blank"
						rel="noopener noreferrer"
						class="btn btn-primary"
					>
						View Live Website
						<ExternalLink size={16} aria-hidden="true" />
						<span class="sr-only">(opens in a new tab)</span>
					</a>
				{/if}
				{#if project.source}
					<a
						href={project.source}
						target="_blank"
						rel="noopener noreferrer"
						class="btn btn-outline"
					>
						<BrandIcon name="github" size={16} />
						View Source
						<span class="sr-only">(opens in a new tab)</span>
					</a>
				{/if}
			</div>
		{/if}
	</div>
</article>
