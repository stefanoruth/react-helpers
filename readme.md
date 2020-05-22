# React Helpers

A small set of components to help bulding simpler code.

![version](https://badgen.net/npm/v/@stefanoruth/react-helpers)
![license](https://badgen.net/github/license/@stefanoruth/react-helpers)
![size](https://badgen.net/bundlephobia/minzip/@stefanoruth/react-helpers)

## Features

-   Scroll lock
-   Focus trap
-   Click away listener
-   Keyboard listiner
-   Simple Portals
-   ClassName builder
-   Config Builder
-   Interval Hook

## Installation

```shell
yarn add @stefanoruth/react-helpers
```

or

```shell
npm install @stefanoruth/react-helpers --save
```

## Basic usage

```js
import { Portal, useScrollLockEffect, useTabFocus, useOnClickAway, useOnEscKey } from '@stefanoruth/react-helpers'

export const Modal: React.FunctionComponent<{ onClose: () => void }> = props => {
    const modalRef = React.useRef < HTMLDivElement > null

    useScrollLockEffect()

    useTabFocus(modalRef)

    useOnClickAway(modalRef, () => {
        props.onClose()
    })

    useOnEscKey(() => {
        props.onClose()
    })

    return (
        <Portal>
            <div ref={modalRef}>
                <button onClick={props.onClose}>Close</button>
                {props.children}
            </div>
        </Portal>
    )
}
```

## Development

https://reactjs.org/warnings/invalid-hook-call-warning.html#duplicate-react

```
npm link example/node_modules/react

yarn dev
```

## License

[MIT](https://github.com/stefanoruth/react-helpers/blob/master/LICENSE)
