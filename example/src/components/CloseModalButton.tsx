import React from 'react'

export const CloseModalButton: React.FunctionComponent<{ onClick: () => void }> = props => (
	<button className={'absolute top-0 right-0 h-6 w-6 mt-4 mr-4'} onClick={props.onClick}>
		X
	</button>
)
