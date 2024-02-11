const Tariffs = () => {
	return (
		<div className='tariffs' id='tariffs'>
			<div className='block-container'>
				<div className='tariffs__box'>
					<div className='tariffs__left'>
						<h3 className='tariffs__left_title'>
							Единый <br /> тариф
						</h3>
						<div className='tariffs__left_prices'>
							<p className='tariffs__prices_price tariffs__prices_price-discount'>
								12.000 ₽
							</p>
							<p className='tariffs__prices_price'>2.990 ₽</p>
						</div>
					</div>
					<div className='tariffs__right'>
						<p className='tariffs__right_title'>Что входит</p>
						<div className='tariffs__right_items'>
							{[0, 1, 2, 3].map((item) => {
								return (
									<div className='tariffs__items_item' key={item}>
										<div className='tariffs__item_point'></div>
										<p className='tariffs__item_title'>12 пошаговых уроков</p>
									</div>
								)
							})}
						</div>
						<div className='tariffs__button'>ОПЛАТИТЬ УЧАСТИЕ</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Tariffs
