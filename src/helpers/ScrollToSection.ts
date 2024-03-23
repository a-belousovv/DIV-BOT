export const scrollToSection = (sectionId: String) => {
	const section = document.querySelector(`${sectionId}`)
	if (!section) return null
	section.scrollIntoView({ behavior: 'smooth' })
}
