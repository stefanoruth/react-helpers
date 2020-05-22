import * as React from 'react'

export const useEventListener = <K extends keyof HTMLElementEventMap>(
    ref: React.RefObject<HTMLElement>,
    type: K,
    listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any,
    options: boolean | AddEventListenerOptions = false
): void => {
    React.useEffect(() => {
        if (!ref.current) {
            return
        }

        ref.current.addEventListener(type, listener, options)

        return () => {
            if (!ref.current) {
                return
            }

            ref.current.removeEventListener(type, listener, options)
        }
    }, [!!ref.current])
}
