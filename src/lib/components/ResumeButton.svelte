<script>
	import Download from '@lucide/svelte/icons/download';
	import { profile } from '#lib/data/profile.js';

	/** @type {{ variant?: 'primary' | 'outline' | 'ghost', class?: string, label?: string }} */
	let { variant = 'outline', class: className = '', label = 'Download Resume' } = $props();
</script>

<!-- Points at static/resume.pdf. Replace that file to update the download. -->
<a
	href={profile.resume.href}
	download={profile.resume.downloadName}
	class="btn btn-{variant} {className}"
>
	<Download size={17} aria-hidden="true" />
	{label}
</a>
