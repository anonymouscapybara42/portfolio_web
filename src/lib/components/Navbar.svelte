<script>
	import { onMount, tick } from 'svelte';
	import Menu from '@lucide/svelte/icons/menu';
	import X from '@lucide/svelte/icons/x';
	import ResumeButton from './ResumeButton.svelte';
	import { navLinks, profile } from '#lib/data/profile.js';
	import { pointerGlow } from '#lib/pointerGlow.js';

	let open = $state(false);
	let scrolled = $state(false);
	let active = $state('#home');
	/** @type {HTMLButtonElement | undefined} */
	let toggleBtn = $state();
	/** @type {HTMLElement | undefined} */
	let menu = $state();

	async function toggle() {
		open = !open;
		if (open) {
			await tick();
			menu?.querySelector('a')?.focus();
		}
	}

	function close(returnFocus = false) {
		if (!open) return;
		open = false;
		if (returnFocus) toggleBtn?.focus();
	}

	/** @param {KeyboardEvent} e */
	function onKeydown(e) {
		if (!open) return;
		if (e.key === 'Escape') {
			close(true);
			return;
		}
		// Keep keyboard focus inside the open menu (plus the toggle button).
		if (e.key === 'Tab' && menu && toggleBtn) {
			const focusable = [
				toggleBtn,
				...menu.querySelectorAll('a[href], button:not([disabled])')
			];
			const first = focusable[0];
			const last = focusable[focusable.length - 1];
			const current = document.activeElement;
			if (e.shiftKey && current === first) {
				e.preventDefault();
				/** @type {HTMLElement} */ (last).focus();
			} else if (!e.shiftKey && current === last) {
				e.preventDefault();
				/** @type {HTMLElement} */ (first).focus();
			}
		}
	}

	onMount(() => {
		const onScroll = () => (scrolled = window.scrollY > 8);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });

		// Close the mobile menu if the viewport grows to desktop width.
		const mq = window.matchMedia('(min-width: 768px)');
		const onMq = () => mq.matches && (open = false);
		mq.addEventListener('change', onMq);

		// Scroll-spy: highlight the section nearest the top third of the viewport.
		// Observe every section (including Education, which has no nav link) so the
		// highlight clears instead of sticking to the previous link.
		const sections = [...document.querySelectorAll('main > section[id]')];
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) active = `#${entry.target.id}`;
				}
			},
			{ rootMargin: '-35% 0px -55% 0px' }
		);
		sections.forEach((s) => observer.observe(s));

		return () => {
			window.removeEventListener('scroll', onScroll);
			mq.removeEventListener('change', onMq);
			observer.disconnect();
		};
	});

	// Lock page scroll while the mobile menu is open.
	$effect(() => {
		document.documentElement.style.overflow = open ? 'hidden' : '';
		return () => {
			document.documentElement.style.overflow = '';
		};
	});
</script>

<svelte:window onkeydown={onKeydown} />

<header
	class="fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 {scrolled || open
		? 'border-line bg-bg/90 backdrop-blur-sm'
		: 'border-transparent bg-transparent'}"
>
	<nav class="container-page flex h-16 items-center justify-between" aria-label="Primary">
		<a
			href="#home"
			class="font-mono text-[0.95rem] font-semibold tracking-tight text-ink"
			onclick={() => close()}
		>
			<span class="text-accent">&lt;</span>{profile.name}<span class="text-accent">/&gt;</span>
		</a>

		<!-- Desktop -->
		<ul class="hidden items-center gap-1 md:flex">
			{#each navLinks as link (link.href)}
				<li>
					<a
						href={link.href}
						use:pointerGlow
						aria-current={active === link.href ? 'true' : undefined}
						class="pointer-glow relative block rounded-md px-3 py-2 text-sm transition-colors {active === link.href
							? 'text-ink'
							: 'text-muted hover:text-ink'}"
					>
						{link.label}
						{#if active === link.href}
							<span class="absolute inset-x-0 bottom-0.5 mx-auto h-px w-4 bg-accent" aria-hidden="true"></span>
						{/if}
					</a>
				</li>
			{/each}
			<li class="ml-3">
				<ResumeButton
					variant="outline"
					class="!min-h-10 !py-2 !text-sm"
					pointerGlow={true}
				/>
			</li>
		</ul>

		<!-- Mobile toggle -->
		<button
			bind:this={toggleBtn}
			type="button"
			use:pointerGlow
			class="pointer-glow -mr-2 inline-flex size-11 items-center justify-center rounded-md text-ink md:hidden"
			aria-expanded={open}
			aria-controls="mobile-menu"
			aria-label={open ? 'Close menu' : 'Open menu'}
			onclick={toggle}
		>
			{#if open}<X size={22} aria-hidden="true" />{:else}<Menu size={22} aria-hidden="true" />{/if}
		</button>
	</nav>
</header>

<!-- Mobile menu. Lives OUTSIDE <header>: the header's backdrop-blur creates a
     containing block that would trap this fixed-position panel inside the 64px bar. -->
{#if open}
	<div
		bind:this={menu}
		id="mobile-menu"
		class="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-line bg-bg md:hidden"
	>
		<ul class="container-page flex flex-col py-4">
			{#each navLinks as link (link.href)}
				<li>
					<a
						href={link.href}
						use:pointerGlow
						onclick={() => close()}
						aria-current={active === link.href ? 'true' : undefined}
						class="pointer-glow flex min-h-12 items-center justify-between border-b border-line py-3 text-lg {active ===
						link.href
							? 'text-ink'
							: 'text-muted'}"
					>
						{link.label}
						{#if active === link.href}<span class="size-1.5 rounded-full bg-accent"></span>{/if}
					</a>
				</li>
			{/each}
			<li class="pt-6">
				<ResumeButton variant="primary" class="w-full" pointerGlow={true} />
			</li>
		</ul>
	</div>
{/if}
