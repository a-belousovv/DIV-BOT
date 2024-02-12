import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import {
	changeCartCountValue,
	changeIsOpenCart,
	setCountryDiscountPrice,
	setCountryPrice,
	setTotalPrice,
} from '../../redux/slices/CartSlice'

import { FetchIpInfoFindItem } from '../../@types/interfaces/FetchIpInfoFindItem'
import CartForm from './CartForm'

const Cart = () => {
	const isOpenCart = useAppSelector((state) => state.cart.isOpenCart)
	const cartCount = useAppSelector((state) => state.cart.cartCount)
	const countryArray = useAppSelector((state) => state.cart.countryArray)
	const dispatch = useAppDispatch()

	const [ipAddress, setIpAddress] = useState('')
	const [geoInfo, setGeoInfo] = useState<FetchIpInfoFindItem>()

	const getVisitorIP = async () => {
		try {
			const response = await fetch('https://api.ipify.org')
			const data = await response.json()
			setIpAddress(data)
		} catch (e) {
			console.error(e)
		}
	}
	const fetchIPInfo = async () => {
		try {
			const response = await fetch(`http://ip-api.com/json/${ipAddress}`)
			const data = await response.json()
			const findItem = countryArray.find((item) => item.title == data.country)
			setGeoInfo(findItem)
		} catch (e) {
			console.error(e)
		}
	}

	useEffect(() => {
		getVisitorIP()
		fetchIPInfo()
	}, [])

	if (!geoInfo) return null

	const findCoursePrice = geoInfo.coursePrice
	const findCourseCountryTitle = geoInfo.courseCountryTitle
	const totalPrice = cartCount * findCoursePrice
	dispatch(setTotalPrice(`${totalPrice}${findCourseCountryTitle}`))
	dispatch(setCountryPrice(`${findCoursePrice}${findCourseCountryTitle}`))
	dispatch(
		setCountryDiscountPrice(
			`${geoInfo.courseDiscountPrice}${findCourseCountryTitle}`
		)
	)

	return (
		<div className={`cart ${isOpenCart ? 'show' : 'hide'}`}>
			<div className='cart__background'></div>
			<div
				className='cart__button-close'
				onClick={() => dispatch(changeIsOpenCart(false))}>
				<div className='cart__button_content-close'></div>
			</div>
			<div className='cart__content'>
				<h3 className='cart__content_title'>Ваш заказ:</h3>
				<div className='cart__product'>
					<p className='cart__product_text'>Закупка</p>
					<div className='cart__product_right'>
						<div className='cart__product_info'>
							<div
								className='cart__info_button cart__info_button-minus'
								onClick={() => dispatch(changeCartCountValue('decrement'))}>
								<img src='/icons/Cart/cart__button-minus.svg' alt='' />
							</div>
							<p className='cart__info_text'>{cartCount}</p>
							<div
								className='cart__info_button cart__info_button-plus'
								onClick={() => dispatch(changeCartCountValue('increment'))}>
								<img src='/icons/Cart/cart__button-plus.svg' alt='' />
							</div>
						</div>
						<p className='cart__product_price-total'>
							{totalPrice} {findCourseCountryTitle}
						</p>
						<div className='cart__product_delete'>
							<img src='/icons/Cart/cart__button-plus.svg' alt='' />
						</div>
					</div>
				</div>
				<p className='cart__totalPrice'>
					Сумма: {totalPrice} {findCourseCountryTitle}
				</p>
				<CartForm />
			</div>
		</div>
	)
}

export default Cart
