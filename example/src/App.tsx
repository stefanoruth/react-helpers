import React from 'react'
import { ConfigProvider } from './utils'
import { Switch, Route } from 'react-router'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { GridPage } from './pages/Grid'

export const App: React.FunctionComponent = () => {
	return (
		<ConfigProvider value={{ env: process.env.NODE_ENV as string }}>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/about">
					<About></About>
				</Route>
				<Route exact path="/grid">
					<GridPage></GridPage>
				</Route>
			</Switch>
		</ConfigProvider>
	)
}
