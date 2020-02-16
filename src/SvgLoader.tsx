import * as React from 'react'

export const SvgLoader: React.FunctionComponent<{
	url: string
	className?: string
}> = props => {
	const [svg, setSvg] = React.useState('')

	React.useEffect(() => {
		const abortController = new AbortController()
		const signal = abortController.signal

		fetch(props.url, { signal })
			.then(res => res.text())
			.then(value => {
				setSvg(value)
			})
			.catch(err => {
				if (err.name !== 'AbortError') {
					throw err
				}
			})

		return () => {
			abortController.abort()
		}
	}, [])

	return <i className={props.className} dangerouslySetInnerHTML={{ __html: svg }} />
}
