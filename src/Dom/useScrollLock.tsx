import * as React from 'react'

const getScrollElement = () => document.scrollingElement || document.documentElement || document.body

export const useScrollLockEffect = () => {
	const scroll = useScrollLock()

	React.useEffect(() => {
		scroll.lock()

		return () => {
			scroll.unlock()
		}
	}, [scroll])
}

export const useScrollLock = () => {
	const bodyRef = React.useRef<HTMLElement>()
	const [scroll, setScroll] = React.useState<number | undefined>()

	React.useEffect(() => {
		if (!bodyRef.current) {
			bodyRef.current = document.body
		}
	}, [])

	const lock = React.useCallback(() => {
		if (!bodyRef.current) {
			return
		}

		if (typeof scroll !== 'undefined') {
			return
		}

		const currentScroll = getScrollElement().scrollTop

		// Set lock styles
		bodyRef.current.style.position = 'fixed'
		bodyRef.current.style.left = '0px'
		bodyRef.current.style.width = '100%'
		bodyRef.current.style.top = `-${currentScroll}px`

		setScroll(currentScroll)
	}, [!!bodyRef.current, scroll])

	const unlock = React.useCallback(() => {
		if (!bodyRef.current) {
			return
		}

		if (typeof scroll === 'undefined') {
			return
		}

		// Reset styles
		bodyRef.current.style.position = ''
		bodyRef.current.style.left = ''
		bodyRef.current.style.width = ''
		bodyRef.current.style.top = ''

		getScrollElement().scrollTop = scroll

		setScroll(undefined)
	}, [!!bodyRef.current, scroll])

	return {
		lock,
		unlock,
	}
}
