import * as React from 'react'

type OnKey = (keys: number | string | (number | string)[], callback: () => void) => void

export const useOnKey: OnKey = (keys, callback) => {
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
