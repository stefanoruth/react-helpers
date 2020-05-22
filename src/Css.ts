export const classNames = (...args: (string | number | boolean | undefined | void)[]) =>
	args
		.filter(value => {
			if (typeof value === 'string') {
				return true
			}

			return false
		})
		.join(' ')
		.trim()
