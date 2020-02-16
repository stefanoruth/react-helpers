import * as React from 'react'

export const useOnKey = (keys: number | string | (number | string)[], callback: () => void) => {
	React.useEffect(() => {
		const keyPool = keys instanceof Array ? keys : [keys]

		const handler = (e: KeyboardEvent) => {
			if (keyPool.indexOf(e.keyCode || e.which) !== -1 || keyPool.indexOf(e.code) !== -1) {
				callback()
			}
		}

		document.addEventListener('keydown', handler)

		return () => {
			document.removeEventListener('keydown', handler)
		}
	}, [])
}

export const useOnEscKey = (callback: () => void) => useOnKey('Escape', callback)
