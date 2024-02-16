import { useAppDispatch } from '../../redux/hooks'
import { setChoosesCourse, setIsOpenCart } from '../../redux/slices/CartSlice'

const Tariffs = () => {
	const dispatch = useAppDispatch()
	const tariffsItems = [
		{ id: '1', title: "Подписка на ᗪIᐯ'ный бот в течении 1 месяца;" },
		{
			id: '2',
			title: 'Чат участников для обмена опытом, вдохновения и мотивации;',
		},
		{ id: '3', title: 'Обратная связь от Алены или ее ассистента в чате;' },
		{ id: '4', title: 'Доступ к базе материалов.' },
	]

	const tariff = 'tariff-single'

	const handleClick = () => {
		dispatch(setIsOpenCart(true))
		dispatch(setChoosesCourse(`${tariff}-id`))
	}

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
								26 BYN
							</p>
							<p className='tariffs__prices_price'>19 BYN</p>
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
						<div className='tariffs__button' onClick={() => handleClick()}>
							ОПЛАТИТЬ УЧАСТИЕ
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Tariffs
