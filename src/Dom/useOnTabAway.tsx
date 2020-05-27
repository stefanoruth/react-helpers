import * as React from 'react'
import { isSameOrContains } from './helpers'

export const useOnTabAway = (
    ref: React.RefObject<HTMLElement>,
    callback: (e: KeyboardEvent) => void,
    deps?: React.DependencyList
) => {
    React.useEffect(() => {
        if (!ref.current) {
            return
        }

        const keyPool = [9]

        const handler = (e: KeyboardEvent) => {
            if (!ref.current) {
                return
            }

            if (keyPool.indexOf(e.keyCode || e.which) !== -1) {
                const inFocus = document.activeElement && isSameOrContains(ref.current, document.activeElement)

                if (!inFocus) {
                    callback(e)
                }
            }
        }

        document.addEventListener('keyup', handler)

        return () => {
            document.removeEventListener('keyup', handler)
        }
    }, [!!ref.current, ...(deps || [])])
}
