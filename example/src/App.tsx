import React from 'react'
import { ConfigProvider } from './utils'
import { Switch, Route } from 'react-router'
import { HomePage } from './pages/Home'
import { AboutPage } from './pages/About'
import { GridPage } from './pages/Grid'
import { ModalPage } from './pages/Modal'

export const App: React.FunctionComponent = () => {
    return (
        <ConfigProvider value={{ env: process.env.NODE_ENV as string }}>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/about">
                    <AboutPage />
                </Route>
                <Route exact path="/grid">
                    <GridPage />
                </Route>
                <Route exact path="/modal">
                    <ModalPage />
                </Route>
            </Switch>
        </ConfigProvider>
    )
}
