import React from 'react'
import { SharedButtonProps } from '../../@types/props/SharedButtonProps'
import { scrollToSection } from '../../helpers/ScrollToSection'

const SharedButton: React.FC<SharedButtonProps> = ({ color, text, href }) => {
	return (
		<div
			onClick={() => scrollToSection(href)}
			className={`shared-button ${color}`}>
			{text}
		</div>
	)
}

export default SharedButton
