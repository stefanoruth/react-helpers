import * as React from 'react'
import { Portal, css, useScrollLockEffect, useOnEscKey, useOnClickAway, useTabFocus } from '@main'
import { CloseModalButton } from './CloseModalButton'

export const Modal: React.FunctionComponent<{
	onClose?: () => void
	className?: string
	size?: 'sm' | 'md' | 'lg'
	closeButton?: boolean
}> = props => {
	const modalRef = React.useRef<HTMLDivElement>(null)

	useScrollLockEffect()

	useTabFocus(modalRef, el => el.parentElement!)

	useOnClickAway(modalRef, () => {
		if (props.onClose) {
			props.onClose()
		}
	})

	useOnEscKey(() => {
		if (props.onClose) {
			props.onClose()
		}
	})

	return (
		<Portal>
			<div className="fixed inset-0 flex flex-col justify-end sm:justify-center items-center overlay">
				<div className="bg-gray-400 opacity-75 absolute inset-0" />
				<div
					ref={modalRef}
					className={css(
						'relative bg-white sm:rounded sm:shadow max-h-full w-full sm:h-auto sm:w-auto sm:max-h-1/5',
						props.size === 'sm' && 'sm:w-full max-w-sm',
						props.size === 'md' && 'sm:w-full max-w-md',
						props.size === 'lg' && 'sm:w-full max-w-3xl',
						props.className
					)}>
					{props.onClose && props.closeButton && <CloseModalButton onClick={props.onClose} />}
					<div className="overflow-y-auto h-full w-full">{props.children}</div>
				</div>
			</div>
		</Portal>
	)
}
