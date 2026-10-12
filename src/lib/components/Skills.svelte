<script>
	import Braces from '@lucide/svelte/icons/braces';
	import LayoutDashboard from '@lucide/svelte/icons/layout-dashboard';
	import Server from '@lucide/svelte/icons/server';
	import Database from '@lucide/svelte/icons/database';
	import Cpu from '@lucide/svelte/icons/cpu';
	import Wrench from '@lucide/svelte/icons/wrench';
	import SectionHeading from './SectionHeading.svelte';
	import { reveal } from '#lib/actions/reveal.js';
	import { skills } from '#lib/data/skills.js';

	const icons = {
		braces: Braces,
		layout: LayoutDashboard,
		server: Server,
		database: Database,
		cpu: Cpu,
		wrench: Wrench
	};
</script>

<section id="skills" class="section border-t border-line" aria-labelledby="skills-title">
	<div class="container-page">
		<SectionHeading
			id="skills-title"
			eyebrow="04 / Skills"
			title="Technical Skills"
			intro="The languages, frameworks, and tools I've worked with, grouped by area."
		/>

		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{#each skills as group, i (group.category)}
				{@const Icon = icons[/** @type {keyof typeof icons} */ (group.icon)]}
				<section
					class="card p-6 transition-colors hover:border-line-strong"
					aria-labelledby="skills-{i}"
					use:reveal={{ delay: (i % 3) * 70 }}
				>
					<div class="flex items-center gap-3">
						<span
							class="flex size-9 items-center justify-center rounded-lg border border-line bg-surface-2 text-accent"
						>
							<Icon size={18} aria-hidden="true" />
						</span>
						<h3 id="skills-{i}" class="text-base font-semibold text-ink">{group.category}</h3>
					</div>
					<ul class="mt-5 flex flex-wrap gap-2">
						{#each group.items as item}
							<li class="tag">{item}</li>
						{/each}
					</ul>
				</section>
			{/each}
		</div>
	</div>
</section>
