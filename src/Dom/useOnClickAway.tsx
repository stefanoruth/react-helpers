import * as React from 'react'
import { isSameOrContains } from './helpers'

export const useOnClickAway = (ref: React.RefObject<Element | null>, callback: (e: MouseEvent) => void) => {
	React.useEffect(() => {
		if (!ref.current) {
			return
		}

		const handler = (e: MouseEvent) => {
			if (ref.current && !isSameOrContains(ref.current, e.target as Element)) {
				callback(e)
			}
		}

		document.addEventListener('click', handler)

		return () => {
			document.removeEventListener('click', handler)
		}
	}, [!!ref.current, callback])
}
