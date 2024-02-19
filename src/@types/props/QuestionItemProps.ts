export interface questionItemProps {
	title: string
	content: qustionItemContent[]
}

export interface qustionItemContent {
	title: string
	id: string
	isAddedImg?: boolean
	isAddedText?: boolean
	imgs?: string[]
	text?: string
}
