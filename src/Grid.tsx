import * as React from 'react'

export const Grid: React.FunctionComponent<{ className?: string; itemClass?: string }> = props => {
    return (
        <div className={props.className}>
            {props.children &&
                React.Children.map(props.children, child => {
                    return <div className={props.itemClass}>{child}</div>
                })}
        </div>
    )
}
