import React from 'react'
import { TarrifItem } from '../../@types/interfaces/tarrifs.interface'

interface Props {
	data: TarrifItem
	userCountry: string
}
const TariffsItem: React.FC<Props> = ({ data, userCountry }) => {
	const countryPrice = data.prices.find(
		(price) => price.priceId === userCountry
	)
	const defaultPrice = data.defaultPrice
	const currentPrice = countryPrice ? countryPrice : defaultPrice
	return (
		<div className='tariffs__item'>
			<div className='tariffs__left'>
				<div className='tariffs__left_header'>
					<h3 className='tariffs__left_title'>Тариф</h3>
					<h3 className='tariffs__left_title'>{data.tarrifTitle}</h3>
				</div>
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
					{data.tarrifPossibilities.map((item) => {
						return (
							<div className='tariffs__items_item' key={item.possibilityId}>
								<div className='tariffs__item_point'></div>
								<p className='tariffs__item_title'>{item.possibilityTitle}</p>
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
	)
}

export default TariffsItem
