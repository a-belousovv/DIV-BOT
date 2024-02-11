import React from 'react'

interface SharedButtonProps {
	color: string
	text: string
	href: string
}

const SharedButton: React.FC<SharedButtonProps> = ({ color, text, href }) => {
	return (
		<a href={`${href}`} className={`shared-button ${color}`}>
			{text}
		</a>
	)
}

export default SharedButton
