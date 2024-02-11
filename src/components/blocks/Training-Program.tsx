import SharedButton from '../shared/Shared-Button'

const TrainingProgram = () => {
	return (
		<div className='program' id='program'>
			<div className='block-container'>
				<div className='program__box'>
					<div className='program__header'>
						<h3 className='program__header_title'>Программа обучения</h3>
						<p className='program__header_text-lesson-count'>12 УРОКОВ</p>
					</div>
					<div className='program__items'>
						{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => {
							return (
								<div className='program__items_item' key={item}>
									<p className='program__item_text-lesson'>Урок {item + 1}.</p>
									<p className='program__item_title-lesson'>
										Общая схема закупки рекламы
									</p>
								</div>
							)
						})}
						<div className='program__items_item-bonus'>
							<p className='program__item_text-lesson'>
								<span>+ Бонусный урок: </span> Список <br /> проверенных
								пабликов со скидкой
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
