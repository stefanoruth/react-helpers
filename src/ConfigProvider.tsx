import React from 'react'

export function BuildConfig<T>(
    initialConfig: T
): { useConfig: () => T; ConfigProvider: React.FunctionComponent<{ value: T }> } {
    const ConfigContext = React.createContext<T>(initialConfig)

    const useConfig = () => React.useContext(ConfigContext)

    const ConfigProvider: React.FunctionComponent<{ value: T }> = props => {
        return <ConfigContext.Provider value={props.value}>{props.children}</ConfigContext.Provider>
    }

    return { useConfig, ConfigProvider }
}
