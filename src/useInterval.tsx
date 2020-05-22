import * as React from 'react'

// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
export const useInterval = (callback: () => void, delay: number) => {
	const savedCallback = React.useRef<undefined | (() => void)>()

	React.useEffect(() => {
		savedCallback.current = callback
	}, [callback])

	React.useEffect(() => {
		const handler = () => {
			if (savedCallback.current) {
				savedCallback.current()
			}
		}

		if (delay !== null) {
			const id = setInterval(handler, delay)
			return () => clearInterval(id)
		}
	}, [delay])
}
