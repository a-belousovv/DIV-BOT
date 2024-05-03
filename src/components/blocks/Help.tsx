const Help = () => {
	return (
		<section className='help'>
			<div className='block-container'>
				<div className='help__box'>
					<h3 className='help__title'>
						Если не нашел нужный ответ <br /> пиши в Telegram
					</h3>
					<div className='help__items'>
						<a
							target='_blank'
							href='https://t.me/sport_diva'
							className='help__items_item'>
							<div className='help__item_img'>
								<img src='/icons/Help/telegram-icon.svg' alt='Иконка телеграма' />
							</div>
							<p className='help__item_title'>
								Напишите мне <br /> в Telegram
							</p>
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Help
