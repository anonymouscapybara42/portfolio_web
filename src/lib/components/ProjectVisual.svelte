<script>
	/** Pure-CSS/SVG illustrations: abstract, no stock photos, no fake screenshots. */
	let { kind } = $props();
</script>

<div
	class="relative flex h-48 w-full items-center sm:h-56 justify-center overflow-hidden border-b border-line bg-surface-2"
	role="img"
	aria-label={kind === 'storefront'
		? 'Abstract illustration of an online storefront with a product grid and detail modal'
		: kind === 'mobile'
			? 'Abstract illustration of a mobile logbook app with a list of records'
			: 'Abstract illustration of an IoT dashboard with sensor charts, a camera feed and a device'}
>
	<!-- subtle dot grid -->
	<div
		class="absolute inset-0 opacity-40"
		style="background-image: radial-gradient(var(--color-line-strong) 1px, transparent 1px); background-size: 18px 18px;"
		aria-hidden="true"
	></div>

	{#if kind === 'storefront'}
		<svg viewBox="0 0 320 180" class="relative h-[88%] w-auto" aria-hidden="true">
			<rect x="10" y="10" width="300" height="160" rx="10" fill="var(--color-surface)" stroke="var(--color-line-strong)" />
			<rect x="10" y="10" width="300" height="24" rx="10" fill="var(--color-surface-2)" />
			<circle cx="26" cy="22" r="3" fill="var(--color-line-strong)" />
			<circle cx="37" cy="22" r="3" fill="var(--color-line-strong)" />
			<circle cx="48" cy="22" r="3" fill="var(--color-line-strong)" />
			{#each [0, 1, 2] as col}
				{#each [0, 1] as row}
					<rect x={26 + col * 92} y={48 + row * 60} width="80" height="50" rx="6" fill="var(--color-surface-2)" stroke="var(--color-line)" />
					<rect x={34 + col * 92} y={56 + row * 60} width="64" height="24" rx="3" fill="var(--color-line)" />
					<rect x={34 + col * 92} y={86 + row * 60} width="34" height="4" rx="2" fill="var(--color-line-strong)" />
				{/each}
			{/each}
			<!-- modal -->
			<rect x="100" y="52" width="130" height="90" rx="8" fill="var(--color-bg)" stroke="var(--color-accent)" stroke-width="1.5" />
			<rect x="112" y="64" width="46" height="40" rx="4" fill="var(--color-line)" />
			<rect x="168" y="66" width="52" height="5" rx="2.5" fill="var(--color-line-strong)" />
			<rect x="168" y="78" width="40" height="4" rx="2" fill="var(--color-line)" />
			<rect x="112" y="116" width="108" height="16" rx="5" fill="var(--color-accent)" />
		</svg>
	{:else if kind === 'mobile'}
		<svg viewBox="0 0 120 190" class="relative h-[86%]" aria-hidden="true">
			<rect x="10" y="4" width="100" height="182" rx="16" fill="var(--color-surface)" stroke="var(--color-line-strong)" stroke-width="1.5" />
			<rect x="46" y="10" width="28" height="5" rx="2.5" fill="var(--color-line-strong)" />
			<rect x="22" y="26" width="52" height="7" rx="3" fill="var(--color-ink)" opacity="0.85" />
			{#each [0, 1, 2, 3] as i}
				<rect x="20" y={46 + i * 34} width="80" height="28" rx="6" fill="var(--color-surface-2)" stroke="var(--color-line)" />
				<rect x="28" y={54 + i * 34} width="38" height="4" rx="2" fill="var(--color-line-strong)" />
				<rect x="28" y={63 + i * 34} width="26" height="3" rx="1.5" fill="var(--color-line)" />
				<circle cx="88" cy={60 + i * 34} r="5" fill={i === 0 ? 'var(--color-accent)' : 'var(--color-line-strong)'} />
			{/each}
		</svg>
	{:else}
		<svg viewBox="0 0 320 180" class="relative h-[88%] w-auto" aria-hidden="true">
			<rect x="10" y="10" width="300" height="160" rx="10" fill="var(--color-surface)" stroke="var(--color-line-strong)" />
			<!-- camera feed -->
			<rect x="22" y="24" width="120" height="74" rx="6" fill="var(--color-bg)" stroke="var(--color-line)" />
			<path d="M34 86c12-22 26-26 40-10s26 8 40-16" fill="none" stroke="var(--color-accent)" stroke-width="2" stroke-linecap="round" opacity="0.8" />
			<rect x="64" y="42" width="34" height="28" rx="3" fill="none" stroke="var(--color-accent)" stroke-dasharray="4 3" />
			<circle cx="32" cy="34" r="3" fill="var(--color-accent)" />
			<!-- chart -->
			<rect x="154" y="24" width="144" height="74" rx="6" fill="var(--color-surface-2)" stroke="var(--color-line)" />
			<polyline points="164,84 186,66 208,74 232,50 256,58 286,38" fill="none" stroke="var(--color-ink)" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" />
			<!-- sensor tiles -->
			{#each [0, 1, 2, 3] as i}
				<rect x={22 + i * 70} y="110" width="62" height="48" rx="6" fill="var(--color-surface-2)" stroke="var(--color-line)" />
				<rect x={30 + i * 70} y="120" width="26" height="4" rx="2" fill="var(--color-line-strong)" />
				<rect x={30 + i * 70} y="132" width="40" height="8" rx="3" fill={i === 3 ? 'var(--color-accent)' : 'var(--color-line-strong)'} />
			{/each}
		</svg>
	{/if}
</div>
