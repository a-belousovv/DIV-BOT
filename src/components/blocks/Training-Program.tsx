import SharedButton from '../shared/Shared-Button'

const TrainingProgram = () => {
	return (
		<div className='program' id='program'>
			<div className='block-container'>
				<div className='program__box'>
					<div className='program__header'>
						<h3 className='program__header_title'>Что умеет этот бот</h3>
					</div>
					<div className='program__items'>
						<div className='program__items_item'>
							<div className='program__item_point'></div>
							<p className='program__item_title-lesson'>
								Подбирать персонализированную программу по направлениям: <br />-
								<i>тренажерный зал (верх\низ\фулбоди с выбором групп мышц)</i>{' '}
								<br /> -{' '}
								<i>
									домашние тренировки (силовые и кардио, с инвентарем и без)
								</i>{' '}
								<br /> -{' '}
								<i>
									стрейчинг (позвоночник и спина, продольный и поперечный
									шпагаты)
								</i>{' '}
								<br />- <i>работа с осанкой</i> <br /> + разминка, заминка и
								комплекс на пресс к каждой тренировке
							</p>
						</div>
						<div className='program__items_item'>
							<div className='program__item_point'></div>
							<p className='program__item_title-lesson'>
								Адаптировать программу тренировок в зависимости: <br /> -{' '}
								<i> от цели (набор массы, похудение, поддержание формы)</i>{' '}
								<br /> - <i>от времени (30 минут, 60 минут, 90 минут)</i>
							</p>
						</div>
						<div className='program__items_item'>
							<div className='program__item_point'></div>
							<p className='program__item_title-lesson'>
								Давать инструкцию по технике выполнения упражнений в
								видеоформате + текстовое описание
							</p>
						</div>
						<div className='program__items_item'>
							<div className='program__item_point'></div>
							<p className='program__item_title-lesson'>
								Заменять упражнения на альтернативные, если какого-то тренажера
								нет в зале, или упражнение кажется сложным для вас, или вы
								просто не любите его
							</p>
						</div>
						<div className='program__items_item-bonus'>
							<p className='program__item_text-lesson'>
								<span>+ БОНУС для подписчиков бота (на время подписки) </span>{' '}
								<br />
								чат с единомышленниками и поддержкой экспертов + закрытый
								телеграм-канал с полезными материалами по здоровью, питанию,
								дисциплине
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
