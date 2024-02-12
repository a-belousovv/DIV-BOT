import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { changeIsOpenCart } from '../../redux/slices/CartSlice'

const Tariffs = () => {
	const dispatch = useAppDispatch()
	const tariffsItems = [
		{ id: '1', title: 'Подписка на бот LEVEL UP в течении 1 месяца;' },
		{
			id: '2',
			title: 'Чат участников для обмена опытом, вдохновения и мотивации;',
		},
		{ id: '3', title: 'Обратная связь от Алены или ее ассистента в чате;' },
		{ id: '4', title: 'Доступ к базе материалов.' },
	]

	const coutryPrice = useAppSelector((state) => state.cart.countryPrice)
	const coutryPriceDiscount = useAppSelector(
		(state) => state.cart.countryDiscountPrice
	)

	return (
		<div className='tariffs' id='tariffs'>
			<div className='block-container'>
				<div className='tariffs__box'>
					<div className='tariffs__left'>
						<h3 className='tariffs__left_title'>
							Тариф <br /> Единый
						</h3>
						<div className='tariffs__left_prices'>
							<p className='tariffs__prices_price tariffs__prices_price-discount'>
								{coutryPriceDiscount}
							</p>
							<p className='tariffs__prices_price'>{coutryPrice}</p>
						</div>
					</div>
					<div className='tariffs__right'>
						<p className='tariffs__right_title'>Что входит</p>
						<div className='tariffs__right_items'>
							{tariffsItems.map((item) => {
								return (
									<div className='tariffs__items_item' key={item.id}>
										<div className='tariffs__item_point'></div>
										<p className='tariffs__item_title'>{item.title}</p>
									</div>
								)
							})}
						</div>
						<div
							className='tariffs__button'
							onClick={() => dispatch(changeIsOpenCart(true))}>
							ОПЛАТИТЬ УЧАСТИЕ
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Tariffs
