export const css = (...args: any[]) =>
	args
		.filter(value => {
			if (typeof value === 'string') {
				return true
			}

			return false
		})
		.join(' ')
		.trim()
