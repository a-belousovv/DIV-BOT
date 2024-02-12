import React from 'react'
import { SharedButtonProps } from '../../@types/props/SharedButtonProps'

const SharedButton: React.FC<SharedButtonProps> = ({ color, text, href }) => {
	return (
		<a href={`${href}`} className={`shared-button ${color}`}>
			{text}
		</a>
	)
}

export default SharedButton
