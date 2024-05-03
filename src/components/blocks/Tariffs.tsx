import { useEffect, useState } from 'react'
import { useAppSelector } from '../../redux/hooks'
import { getUserCountry } from '../../helpers/getUserCountry'

const Tariffs = () => {
	const [userCountry, setUserCountry] = useState('Беларусь')
	const tarrifs = useAppSelector((state) => state.tarrifs.tarrifs)
	const currentTarrifTitle = 'tarrif-single'
	const currentTarrif = tarrifs.find((tariff) => tariff.tarrifId == currentTarrifTitle)
	const defaultPrice = currentTarrif?.defaultPrice
	let currentPrice = currentTarrif?.prices.find(
		(item) => item.priceId == userCountry
	)

	useEffect(() => {
		getUserCountry().then((country) => {
			if (typeof country == 'string') {
				setUserCountry(country)
			}
		})
	}, [])

	if (!currentPrice) currentPrice = defaultPrice
	return (
		<section className='tariffs' id='tariffs'>
			<div className='block-container'>
				<div className='tariffs__box'>
					<div className='tariffs__left'>
						<h3 className='tariffs__left_title'>
							{currentTarrif?.tarrifTitle}
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
							{currentTarrif?.tarrifPossibilities.map((item) => {
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
		</section>
	)
}

export default Tariffs
