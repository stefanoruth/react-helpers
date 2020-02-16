import React from 'react'
import { Portal } from 'react-library'

export const About: React.FunctionComponent = props => {
	const [open, setOpen] = React.useState(false)
	console.log(open)
	return (
		<div>
			<div>About</div>
			<div>
				<button onClick={() => setOpen(true)}>Open</button>
			</div>

			{open && (
				<Portal>
					<div>Hej</div>
					<button onClick={() => setOpen(false)}>Close</button>
				</Portal>
			)}
		</div>
	)
}