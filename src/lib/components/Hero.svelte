<script>
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import ResumeButton from './ResumeButton.svelte';
	import CodeWindow from './CodeWindow.svelte';
	import { profile } from '#lib/data/profile.js';
</script>

<section id="home" class="relative pt-28 pb-16 md:pt-40 md:pb-28" aria-labelledby="hero-title">
	<div class="container-page grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
		<div class="animate-fade-up">
			<p
				class="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-[0.8rem] text-muted"
			>
				<span class="relative flex size-2" aria-hidden="true">
					<span class="absolute inline-flex size-full rounded-full bg-accent opacity-50 motion-safe:animate-ping"></span>
					<span class="relative inline-flex size-2 rounded-full bg-accent"></span>
				</span>
				{profile.interest}
			</p>

			<h1 id="hero-title" class="text-4xl font-semibold text-balance text-ink sm:text-5xl lg:text-6xl">
				{profile.name}
			</h1>

			<p class="mt-5 font-mono text-sm leading-relaxed text-accent sm:text-[0.95rem]">
				{profile.headline}
			</p>

			<p class="mt-6 max-w-xl text-pretty text-muted sm:text-lg">
				{profile.intro}
			</p>

			<div class="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
				<a href="#projects" class="btn btn-primary">
					View My Projects
					<ArrowRight size={17} aria-hidden="true" />
				</a>
				<a href="#contact" class="btn btn-outline">Contact Me</a>
				<ResumeButton variant="ghost" />
			</div>
		</div>

		<div class="animate-fade-up [animation-delay:150ms]">
			<CodeWindow />
		</div>
	</div>
</section>
