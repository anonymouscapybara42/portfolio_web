/**
 * Svelte action: fades an element in when it scrolls into view.
 * Adds `data-reveal`; the CSS only hides it once `html.js-reveal` is set,
 * so nothing is hidden if JavaScript or IntersectionObserver is unavailable.
 *
 * @param {HTMLElement} node
 * @param {{ delay?: number }} [options]
 */
export function reveal(node, options = {}) {
	node.setAttribute('data-reveal', '');
	if (options.delay) node.style.transitionDelay = `${options.delay}ms`;

	const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	if (reduce || !('IntersectionObserver' in window)) {
		node.classList.add('is-visible');
		return {};
	}

	document.documentElement.classList.add('js-reveal');

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					entry.target.classList.add('is-visible');
					observer.unobserve(entry.target);
				}
			}
		},
		{ threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
	);
	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
