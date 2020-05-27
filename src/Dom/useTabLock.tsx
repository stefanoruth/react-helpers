import * as React from 'react'
import focusTrap from 'focus-trap'

export const useTabLock = (ref: React.RefObject<HTMLElement>, getElement?: (el: HTMLElement) => HTMLElement) => {
    React.useEffect(() => {
        if (!ref.current) {
            return
        }

        const elm = getElement ? getElement(ref.current) : ref.current

        const focusNode = focusTrap(elm)

        focusNode.activate()

        return () => {
            focusNode.deactivate()
        }
    }, [!!ref.current])
}
