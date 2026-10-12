<script>
	import SectionHeading from './SectionHeading.svelte';
	import ProjectCard from './ProjectCard.svelte';
	import { projects } from '#lib/data/projects.js';

	// TemplateDepot and Co-Lab sit side by side; VertiApp spans the full row.
</script>

<section id="projects" class="section border-t border-line" aria-labelledby="projects-title">
	<div class="container-page">
		<SectionHeading
			id="projects-title"
			eyebrow="03 / Projects"
			title="Featured Projects"
			intro="A production website, a mobile application, and a multidisciplinary IoT and AI system."
		/>

		<div class="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
			{#each projects as project, i (project.id)}
				<div class={i === projects.length - 1 && projects.length % 2 === 1 ? 'lg:col-span-2' : ''}>
					<ProjectCard {project} index={i} />
				</div>
			{/each}
		</div>
	</div>
</section>
