import { useEffect, useState } from 'react'
import { useAppSelector } from '../../redux/hooks'
import { getUserCountry } from '../../helpers/getUserCountry'

const Tariffs = () => {
	const [userCountry, setUserCountry] = useState('Belarus')
	const defaultPrice = useAppSelector((state) => state.tarrifs.defaultPrice)
	const currentTarrif = 'tarrif-single'
	const tarrifs = useAppSelector((state) => state.tarrifs.tarrifs)
	const currentTarrifInfo = tarrifs.find(
		(item) => item.tarrifId == currentTarrif
	)
	let currentPrice = currentTarrifInfo?.prices.find(
		(item) => item.priceId == userCountry
	)

	useEffect(() => {
		const fetchUserCountry = async () => {
			const userCountry = await getUserCountry()

			setUserCountry(userCountry)
		}
		fetchUserCountry()
	}, [])

	if (!currentPrice) currentPrice = defaultPrice
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
								{currentPrice?.discountPrice} {currentPrice?.priceTitle}
							</p>
							<p className='tariffs__prices_price'>
								{currentPrice?.price} {currentPrice?.priceTitle}
							</p>
						</div>
					</div>
					<div className='tariffs__right'>
						<p className='tariffs__right_title'>Что входит</p>
						<div className='tariffs__right_items'>
							{currentTarrifInfo?.tarrifPossibilities.map((item) => {
								return (
									<div className='tariffs__items_item' key={item.possibilityId}>
										<div className='tariffs__item_point'></div>
										<p className='tariffs__item_title'>
											{item.possibilityTitle}
										</p>
									</div>
								)
							})}
						</div>
						<a
							target='_blank'
							href='https://t.me/diva_sportbot'
							className='tariffs__button'>
							ОПЛАТИТЬ УЧАСТИЕ
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Tariffs
