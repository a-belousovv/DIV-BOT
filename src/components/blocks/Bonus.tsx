import SharedButton from '../shared/Shared-Button'

const Bonus = () => {
	return (
		<section className='bonus'>
			<div className='block-container'>
				<div className='bonus__box'>
					<div className='bonus__content'>
						<h3 className='bonus__content_title'>+ 2 крутых бонуса</h3>
						<div className='bonus__content_items'>
							<div className='bonus__content_item'>
								<p className='bonus__content_text'>
									<span>
										Ежемесячная возможность попасть на тренировку с Аленой
										офлайн ⚡️
									</span>
									<br /> Раз в месяц я буду приглашать до 8 желающих на
									совместную групповую тренировку вместе со мной. Это
									возможность личного общения и обсуждения Ваших запросов со
									мной.
								</p>
								<div className='bonus__content_img'>
									<img src='/pictures/Bonus/Bonus-left.webp' alt='Первый бонус' />
								</div>
							</div>
							<div className='bonus__content_item'>
								<p className='bonus__content_text'>
									<span>
										Бесплатное обновление бота на протяжении 6 месяцев🤓
									</span>
									<br />
									База материалов будет пополняться еженедельно новыми
									упражнениями и направлениями тренировок. Стоимость подписки
									будет увеличиваться соразмерно ценности для новых участников.
								</p>
								<div className='bonus__content_img'>
									<img src='/pictures/Bonus/Bonus-right.webp' alt='Второй бонус' />
								</div>
							</div>
						</div>
						<SharedButton href='#tariffs' color='blue' text='УЧАСТВОВАТЬ' />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Bonus
