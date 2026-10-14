/** @param {HTMLElement} node */
export function pointerGlow(node) {
	/** @param {PointerEvent} event */
	function updatePosition(event) {
		const bounds = node.getBoundingClientRect();
		node.style.setProperty('--pointer-x', `${event.clientX - bounds.left}px`);
		node.style.setProperty('--pointer-y', `${event.clientY - bounds.top}px`);
	}

	node.addEventListener('pointermove', updatePosition);

	return {
		destroy() {
			node.removeEventListener('pointermove', updatePosition);
		}
	};
}
