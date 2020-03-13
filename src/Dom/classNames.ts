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
