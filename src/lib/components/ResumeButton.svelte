<script>
	import Download from '@lucide/svelte/icons/download';
	import { profile } from '#lib/data/profile.js';
	import { pointerGlow } from '#lib/pointerGlow.js';

	/** @type {{ variant?: 'primary' | 'outline' | 'ghost', class?: string, label?: string, pointerGlow?: boolean }} */
	let {
		variant = 'outline',
		class: className = '',
		label = 'Download Resume',
		pointerGlow: showPointerGlow = false
	} = $props();
</script>

<!-- Points at static/resume.pdf. Replace that file to update the download. -->
<a
	href={profile.resume.href}
	download={profile.resume.downloadName}
	use:pointerGlow
	class="btn btn-{variant} {className} {showPointerGlow ? 'pointer-glow' : ''}"
>
	<Download size={17} aria-hidden="true" />
	{label}
</a>
