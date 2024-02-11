import { useState } from 'react'

const QuestionItem = () => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<div className={`question__items_item ${isOpen ? 'show' : 'hide'}`}>
			<div className='question__item_header' onClick={() => setIsOpen(!isOpen)}>
				<p className='question__header_title'>
					Какой нужен бюджет на закупку рекламы?
				</p>
				<div className='question__header_button'></div>
			</div>
			<div className='question__item_content'>
				<div className='question__content_item'>
					<div className='question__item_point'></div>
					<p className='question__item_text'>
						Цены на рекламу в инста-пабликах начинаются от 300 рублей. Вы можете
						протестировать свой креатив на маленьких бюджетах, а после
						увеличивать до любых объемов.
					</p>
				</div>
				<div className='question__content_item'>
					<div className='question__item_point'></div>
					<p className='question__item_text'>
						Цены на рекламу в инста-пабликах начинаются от 300 рублей. Вы можете
						протестировать свой креатив на маленьких бюджетах, а после
						увеличивать до любых объемов.
					</p>
				</div>
			</div>
		</div>
	)
}

export default QuestionItem
