import SharedButton from '../shared/Shared-Button'
import QuestionItem from './QuestionItem'

const Question = () => {
	return (
		<div className='question'>
			<div className='block-container'>
				<div className='question__box'>
					<h3 className='question__title'>Вопросы</h3>
					<div className='question__items'>
						{[0, 1, 2, 3, 4, 5].map((item) => {
							return <QuestionItem key={item} />
						})}
					</div>
					<SharedButton href='#tariffs' color='blue' text='УЧАСТВОВАТЬ' />
				</div>
			</div>
		</div>
	)
}

export default Question
