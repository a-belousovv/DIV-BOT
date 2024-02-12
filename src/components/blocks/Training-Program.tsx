import SharedButton from '../shared/Shared-Button'

const TrainingProgram = () => {
	const trainingProgramItems = [
		{
			id: '1',
			title: 'Подбирать персонализированную программу тренировки в зале',
		},
		{
			id: '2',
			title:
				'Адаптировать программу тренировок под три запроса: набор массы, похудение, поддержание формы',
		},
		{ id: '3', title: 'Давать наглядную инструкцию по выполнению упражнений' },
		{
			id: '4',
			title:
				'Заменять упражнения, которые вам кажутся сложными на альтернативные',
		},
		{
			id: '5',
			title: 'Делиться полезными материалами по здоровью, питанию, дисциплине.',
		},
	]
	return (
		<div className='program' id='program'>
			<div className='block-container'>
				<div className='program__box'>
					<div className='program__header'>
						<h3 className='program__header_title'>Что умеет это бот</h3>
						<p className='program__header_text-lesson-count'>12 УРОКОВ</p>
					</div>
					<div className='program__items'>
						{trainingProgramItems.map((item) => {
							return (
								<div className='program__items_item' key={item.id}>
									<p className='program__item_text-lesson'>Урок {item.id}.</p>
									<p className='program__item_title-lesson'>{item.title}</p>
								</div>
							)
						})}
						<div className='program__items_item-bonus'>
							<p className='program__item_text-lesson'>
								<span>+ Бонусный урок: </span> Чат с комьюнити <br />{' '}
								подписчиков бота (на время подписки)
							</p>
						</div>
					</div>
					<SharedButton href='#tariffs' text='УЧАСТВОВАТЬ' color='blue' />
				</div>
			</div>
		</div>
	)
}

export default TrainingProgram
