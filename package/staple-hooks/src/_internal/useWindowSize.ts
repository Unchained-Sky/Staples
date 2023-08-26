import { useState } from 'react'

import useMountEffect from './useMountEffect'

interface WindowSize {
	width: number;
	height: number;
}

const useWindowSize = (): WindowSize => {

	const [[width, height], setSize] = useState<[width: number, height: number]>([0, 0])

	useMountEffect(() => {
		const updateSize = (): void => {
			setSize([window.innerWidth, window.innerHeight])
		}

		updateSize()

		window.addEventListener('resize', updateSize)
		return () => window.removeEventListener('resize', updateSize)
	})

	return ({
		width,
		height
	})
}

export default useWindowSize