import { useState } from 'react'
import BlueButtonClose from '../shared/Blue-Button-Close'
import { questionItemProps } from '../../@types/props/QuestionItemProps'

const QuestionItem: React.FC<questionItemProps> = ({ title, content }) => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<div className={`question__items_item ${isOpen ? 'show' : 'hide'}`}>
			<div className='question__item_header' onClick={() => setIsOpen(!isOpen)}>
				<p className='question__header_title'>{title}</p>
				<BlueButtonClose />
			</div>
			<div className='question__item_content'>
				{content.map((item) => {
					return (
						<div className='question__content_item' key={item.id}>
							<div className='question__item_info'>
								<div className='question__item_point'></div>
								<p className='question__item_text'>{item.title}</p>
							</div>
							{item.isAddedImg ? (
								<div className='question__item_imgs'>
									{item.imgs?.map((item) => (
										<img src={item} key={item} />
									))}
								</div>
							) : null}
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default QuestionItem
