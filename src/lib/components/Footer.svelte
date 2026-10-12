<script>
	import BrandIcon from './BrandIcon.svelte';
	import { contact, profile } from '#lib/data/profile.js';

	const year = new Date().getFullYear();
</script>

<footer class="border-t border-line py-10">
	<div class="container-page flex flex-col items-center justify-between gap-5 sm:flex-row">
		<p class="text-sm text-faint">
			© {year} {profile.name}. Built with SvelteKit and Tailwind CSS.
		</p>
		<ul class="flex items-center gap-1">
			<li>
				<a
					href={contact.github}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex size-11 items-center justify-center rounded-md text-muted transition-colors hover:text-ink"
					aria-label="GitHub (opens in a new tab)"
				>
					<BrandIcon name="github" size={20} />
				</a>
			</li>
			<li>
				<a
					href={contact.linkedin}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex size-11 items-center justify-center rounded-md text-muted transition-colors hover:text-ink"
					aria-label="LinkedIn (opens in a new tab)"
				>
					<BrandIcon name="linkedin" size={20} />
				</a>
			</li>
		</ul>
	</div>
</footer>
