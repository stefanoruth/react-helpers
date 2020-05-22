# React Components

## Features

- Supports drag, zoom and rotate interactions
- Provides crop dimensions as pixels and percentages
- Supports any images format (JPEG, PNG, even GIF) as url or base 64 string
- Supports any videos format supported in HTML5
- Mobile friendly

## Installation

```shell
yarn add react-easy-crop
```

or

```shell
npm install react-easy-crop --save
```

## Basic usage

```js
import { Portal, useScrollLockEffect, useTabFocus, useOnClickAway, useOnEscKey } from 'react-easy-crop'

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

[MIT](https://github.com/ricardo-ch/react-easy-crop/blob/master/LICENSE)