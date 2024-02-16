import SharedButton from '../shared/Shared-Button'
import QuestionItem from './QuestionItem'

const Question = () => {
	const questionArray = [
		{
			id: '1',
			title: 'Почему я могу считать тебя экспертом в фитнесе и доверять',
			content: [
				{ id: '1', title: 'Заполни сама' },
				{ id: '2', title: 'Заполни сама' },
			],
		},
		{
			id: '2',
			title: "Какие ключевые преимущества подписки на бот ᗪIᐯ'ный бот",
			content: [
				{
					id: '3',
					title:
						"Доступ к персональному “тренеру” в твоем телефоне с индивидуальным подходом Подписка стоит как одна тренировка с тренером, а приносить ценности в 10 раз выше Чат с ребятами, которых объединяет одна цель.',",
				},
				{
					id: '4',
					title:
						'Для поддержки и вдохновения Доступ к базе материалов по здоровью, питанию, дисциплине которая растет постоянно',
				},
			],
		},
		{
			id: '3',
			title: 'Подойдет ли это конкретно мне?',
			content: [
				{
					id: '4',
					title:
						'Если ты желаешь быть здоровым, энергичным, с высокой самооценкой и иметь поддерживающее окружение, то ДА',
				},
			],
		},
		{
			id: '4',
			title: 'Как продлевать подписку на бот?',
			content: [{ id: '5', title: 'Заполни сама' }],
		},
	]
	return (
		<div className='question'>
			<div className='block-container'>
				<div className='question__box'>
					<h3 className='question__title'>У тебя могли остаться вопросы</h3>
					<div className='question__items'>
						{questionArray.map((item) => {
							return (
								<QuestionItem
									key={item.id}
									title={item.title}
									content={item.content}
								/>
							)
						})}
					</div>
					<SharedButton href='#tariffs' color='blue' text='УЧАСТВОВАТЬ' />
				</div>
			</div>
		</div>
	)
}

export default Question
