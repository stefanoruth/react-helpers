const buildClass = (...args: any[]) =>
	args
		.filter(value => {
			if (typeof value === 'string') {
				return true
			}

			return false
		})
		.join(' ')
		.trim()

const addClass = (element: HTMLElement, classList: string | string[]) => {
	if (typeof classList === 'string') {
		classList = classList.split(' ')
	}

	classList.forEach(className => {
		if (!element.classList.contains(className)) {
			element.classList.add(className)
		}
	})
}

const removeClass = (element: HTMLElement, classList: string | string[]) => {
	if (typeof classList === 'string') {
		classList = classList.split(' ')
	}

	classList.forEach(className => {
		if (element.classList.contains(className)) {
			element.classList.remove(className)
		}
	})
}

export const css = {
	addClass,
	removeClass,
	buildClass,
}
