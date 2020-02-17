import * as React from 'react'

export type PortalChildren = {
	selector: string
	content: any
}

const PortalContext = React.createContext<PortalChildren[]>([])
PortalContext.displayName = 'PortalContext'

export { PortalContext }
