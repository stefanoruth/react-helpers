import React from 'react'
import { ConfigProvider } from './utils'
import { Switch, Route } from 'react-router'
import { Home } from './pages/Home'
import { About } from './pages/About'

export const App: React.FunctionComponent = props => {
	return (
		<ConfigProvider value={{ env: process.env.NODE_ENV as string }}>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/about">
					<About></About>
				</Route>
			</Switch>
		</ConfigProvider>
	)
}
