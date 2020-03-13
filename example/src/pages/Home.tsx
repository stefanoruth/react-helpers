import React from 'react'
import { Grid } from '@main'
import { Link } from 'react-router-dom'

const linkClass = 'p-4 rounded-lg text-white bg-blue-400 hover:bg-blue-500 flex justify-center items-center'

export const HomePage: React.FunctionComponent = props => {
	return (
		<div className="p-8">
			<h1 className="text-3xl">React Components</h1>
			<div>
				<Grid className="flex flex-wrap -mx-4" itemClass="">
					<Link className={linkClass} to="#">
						Grid
					</Link>
					<Link className={linkClass} to="#">
						Grid
					</Link>
					<Link className={linkClass} to="#">
						Grid
					</Link>
					<Link className={linkClass} to="#">
						Grid
					</Link>
					<Link className={linkClass} to="#">
						Grid
					</Link>
					<Link className={linkClass} to="#">
						Grid
					</Link>
					<Link className={linkClass} to="#">
						Grid
					</Link>
				</Grid>
			</div>
		</div>
	)
}
