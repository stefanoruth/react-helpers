import * as React from 'react'
import { createPortal } from 'react-dom'

export const Portal: React.FunctionComponent<{ selector?: string }> = ({ children, selector = '#portal' }) => {
    if (typeof window === 'undefined') {
        return null
    }

    const target = document.querySelector(selector)

    if (!target) {
        throw new Error(`Unable to find element matching selector: "${selector}"`)
    }

    return createPortal(children, target)
}
