import * as React from 'react'

export const useGlobalEvent = <K extends keyof DocumentEventMap>(
    type: K,
    listener: (this: Document, ev: DocumentEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions
): void => {
    React.useEffect(() => {
        document.addEventListener(type, listener, options)

        return () => {
            document.removeEventListener(type, listener, options)
        }
    }, [])
}
