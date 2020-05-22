export function isParentOf(parent: Element, child: Element) {
	let currentElement = child.parentElement

	while (currentElement) {
		if (currentElement === parent) {
			return true
		}

		currentElement = currentElement.parentElement
	}

	return false
}

export function isSameOrContains(container: Element, child: Element) {
	return container === child || isParentOf(container, child)
}

/**
 * Add a className to a dom element.
 */
export const addClassName = (element: HTMLElement, classList: string | string[]) => {
	if (typeof classList === 'string') {
		classList = classList.split(' ')
	}

	classList.forEach(className => {
		if (!element.classList.contains(className)) {
			element.classList.add(className)
		}
	})
}

/**
 * Removes a className from a dom element.
 */
export const removeClassName = (element: HTMLElement, classList: string | string[]) => {
	if (typeof classList === 'string') {
		classList = classList.split(' ')
	}

	classList.forEach(className => {
		if (element.classList.contains(className)) {
			element.classList.remove(className)
		}
	})
}
