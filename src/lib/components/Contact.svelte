<script>
	import Mail from '@lucide/svelte/icons/mail';
	import Phone from '@lucide/svelte/icons/phone';
	import Send from '@lucide/svelte/icons/send';
	import CircleAlert from '@lucide/svelte/icons/circle-alert';
	import Check from '@lucide/svelte/icons/check';
	import SectionHeading from './SectionHeading.svelte';
	import BrandIcon from './BrandIcon.svelte';
	import ResumeButton from './ResumeButton.svelte';
	import { reveal } from '#lib/actions/reveal.js';
	import { contact } from '#lib/data/profile.js';

	const hasBackend = Boolean(contact.formEndpoint);

	/** @type {'idle' | 'sending' | 'sent' | 'mailto' | 'error'} */
	let status = $state('idle');

	/** @param {SubmitEvent} event */
	async function onSubmit(event) {
		event.preventDefault();
		const form = /** @type {HTMLFormElement} */ (event.currentTarget);
		const data = new FormData(form);

		if (hasBackend) {
			status = 'sending';
			try {
				const res = await fetch(contact.formEndpoint, {
					method: 'POST',
					body: data,
					headers: { Accept: 'application/json' }
				});
				if (!res.ok) throw new Error(`HTTP ${res.status}`);
				status = 'sent';
				form.reset();
			} catch {
				status = 'error';
			}
			return;
		}

		// No backend configured: open the visitor's email app with the message pre-filled.
		const subject = String(data.get('subject') || 'Portfolio inquiry');
		const body = `${data.get('message') || ''}\n\n— ${data.get('name') || ''} (${data.get('email') || ''})`;
		window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
		status = 'mailto';
	}

	const field =
		'mt-2 block w-full rounded-lg border border-line-strong bg-bg px-3.5 py-3 text-base text-ink placeholder:text-faint transition-colors hover:border-muted focus:border-accent focus:outline-none focus-visible:outline-none focus:ring-2 focus:ring-accent/40';
</script>

<section id="contact" class="section border-t border-line" aria-labelledby="contact-title">
	<div class="container-page">
		<SectionHeading id="contact-title" eyebrow="06 / Contact" title={contact.heading} intro={contact.paragraph} />

		<div class="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
			<div use:reveal>
				<ul class="space-y-3">
					<li>
						<a
							href="mailto:{contact.email}"
							class="card group flex items-center gap-4 p-4 transition-colors hover:border-line-strong"
						>
							<span class="flex size-10 shrink-0 items-center justify-center rounded-lg border border-line bg-surface-2 text-accent">
								<Mail size={18} aria-hidden="true" />
							</span>
							<span class="min-w-0">
								<span class="block text-xs text-faint">Email</span>
								<span class="block truncate text-ink">{contact.email}</span>
							</span>
						</a>
					</li>
					<li>
						<a
							href="tel:{contact.phone.replace(/[^+\d]/g, '')}"
							class="card group flex items-center gap-4 p-4 transition-colors hover:border-line-strong"
						>
							<span class="flex size-10 shrink-0 items-center justify-center rounded-lg border border-line bg-surface-2 text-accent">
								<Phone size={18} aria-hidden="true" />
							</span>
							<span>
								<span class="block text-xs text-faint">Phone</span>
								<span class="block text-ink">{contact.phone}</span>
							</span>
						</a>
					</li>
					<li>
						<a
							href={contact.linkedin}
							target="_blank"
							rel="noopener noreferrer"
							class="card group flex items-center gap-4 p-4 transition-colors hover:border-line-strong"
						>
							<span class="flex size-10 shrink-0 items-center justify-center rounded-lg border border-line bg-surface-2 text-accent">
								<BrandIcon name="linkedin" size={18} />
							</span>
							<span class="min-w-0">
								<span class="block text-xs text-faint">LinkedIn</span>
								<span class="block truncate text-ink">linkedin.com/in/ashley-glaraga</span>
							</span>
							<span class="sr-only">(opens in a new tab)</span>
						</a>
					</li>
					<li>
						<a
							href={contact.github}
							target="_blank"
							rel="noopener noreferrer"
							class="card group flex items-center gap-4 p-4 transition-colors hover:border-line-strong"
						>
							<span class="flex size-10 shrink-0 items-center justify-center rounded-lg border border-line bg-surface-2 text-accent">
								<BrandIcon name="github" size={18} />
							</span>
							<span class="min-w-0">
								<span class="block text-xs text-faint">GitHub</span>
								<span class="block truncate text-ink">github.com/anonymouscapybara42</span>
							</span>
							<span class="sr-only">(opens in a new tab)</span>
						</a>
					</li>
				</ul>

				<div class="mt-6">
					<ResumeButton variant="outline" />
				</div>
			</div>

			<form class="card p-6 sm:p-8" onsubmit={onSubmit} use:reveal={{ delay: 90 }}>
				<div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
					<div>
						<label for="cf-name" class="text-sm font-medium text-ink">Name</label>
						<input id="cf-name" name="name" type="text" required autocomplete="name" class={field} />
					</div>
					<div>
						<label for="cf-email" class="text-sm font-medium text-ink">Email</label>
						<input id="cf-email" name="email" type="email" required autocomplete="email" class={field} />
					</div>
				</div>
				<div class="mt-5">
					<label for="cf-subject" class="text-sm font-medium text-ink">Subject</label>
					<input id="cf-subject" name="subject" type="text" required class={field} />
				</div>
				<div class="mt-5">
					<label for="cf-message" class="text-sm font-medium text-ink">Message</label>
					<textarea id="cf-message" name="message" rows="5" required class="{field} resize-y"></textarea>
				</div>

				<div class="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
					<button type="submit" class="btn btn-primary" disabled={status === 'sending'}>
						<Send size={16} aria-hidden="true" />
						{status === 'sending' ? 'Sending…' : hasBackend ? 'Send Message' : 'Open in Email App'}
					</button>

					<p class="text-sm text-faint sm:max-w-[16rem] sm:text-right">
						{#if hasBackend}
							Your message is sent directly to {contact.email}.
						{:else}
							This form has no server. It opens your email app with the message ready to send.
						{/if}
					</p>
				</div>

				<div aria-live="polite" class="mt-4 empty:mt-0">
					{#if status === 'sent'}
						<p class="flex items-center gap-2 text-sm text-accent">
							<Check size={16} aria-hidden="true" /> Message sent. Thank you!
						</p>
					{:else if status === 'mailto'}
						<p class="text-sm text-muted">
							Your email app should have opened. If nothing happened, email me directly at
							<a class="text-accent underline underline-offset-4" href="mailto:{contact.email}">{contact.email}</a>.
						</p>
					{:else if status === 'error'}
						<p class="flex items-start gap-2 text-sm text-red-400">
							<CircleAlert size={16} class="mt-0.5 shrink-0" aria-hidden="true" />
							<span>
								The message could not be sent. Please email
								<a class="underline underline-offset-4" href="mailto:{contact.email}">{contact.email}</a> instead.
							</span>
						</p>
					{/if}
				</div>
			</form>
		</div>
	</div>
</section>
