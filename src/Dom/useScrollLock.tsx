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
    const scroll = React.useRef<number>()

    React.useEffect(() => {
        if (!bodyRef.current) {
            bodyRef.current = document.body
        }
    }, [])

    const lock = () => {
        if (!bodyRef.current) {
            return false
        }

        if (typeof scroll.current !== 'undefined') {
            return false
        }

        const currentScroll = getScrollElement().scrollTop

        // Set lock styles
        bodyRef.current.style.position = 'fixed'
        bodyRef.current.style.left = '0px'
        bodyRef.current.style.width = '100%'
        bodyRef.current.style.top = `-${currentScroll}px`

        scroll.current = currentScroll

        return true
    }

    const unlock = () => {
        if (!bodyRef.current) {
            return false
        }

        if (typeof scroll.current === 'undefined') {
            return false
        }

        // Reset styles
        bodyRef.current.style.position = ''
        bodyRef.current.style.left = ''
        bodyRef.current.style.width = ''
        bodyRef.current.style.top = ''

        getScrollElement().scrollTop = scroll.current

        scroll.current = undefined

        return true
    }

    return {
        lock,
        unlock,
    }
}
