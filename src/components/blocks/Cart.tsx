import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import axios from 'axios'
import CartForm from './CartForm'
import {
	decrementCartItemCount,
	deleteCartItem,
	incrementCartItemCount,
	setIsOpenCart,
	setTotalCount,
	setTotalPrice,
	setUserCountry,
	setUserCountryFindData,
} from '../../redux/slices/CartSlice'

const Cart = () => {
	//import selectors
	const isOpenCart = useAppSelector((state) => state.cart.isOpenCart)
	const coursePriceData = useAppSelector((state) => state.cart.coursePriceData)
	const cart = useAppSelector((state) => state.cart.cart)
	const userCountryFindData = useAppSelector(
		(state) => state.cart.userCountryFindData
	)
	//states
	const [userIpAddress, setUserIpAddress] = useState('')
	const [userCountryData, setUserCountryData] = useState('')
	const totalPrice = cart.reduce(
		(acc, item) => acc + item.count * item.price,
		0
	)
	const totalCount = cart.reduce((acc, item) => acc + item.count, 0)
	//function

	const dispatch = useAppDispatch()

	const getUserIp = async () => {
		try {
			const { data } = await axios.get('https://api.ipify.org')
			setUserIpAddress(data)
		} catch (e) {
			console.error(e)
		}
	}

	const getUserCountry = async () => {
		try {
			const { data } = await axios.get(
				`http://ip-api.com/json/${userIpAddress}`
			)
			if (!data) setUserCountryData('USA')
			const findItem = coursePriceData.find((item) => item.id == data.country)
			if (!findItem)
				setUserCountryFindData({
					id: 'Usa',
					discountPrice: '9',
					price: 4,
					priceTitle: 'USD',
				})
			if (findItem) dispatch(setUserCountryFindData(findItem))
		} catch (e) {
			console.error(e)
		}
	}

	useEffect(() => {
		getUserIp()
		getUserCountry()
		dispatch(setUserCountry(userCountryData))
	}, [])

	useEffect(() => {
		if (cart.length == 0) dispatch(setIsOpenCart(false))
	}, [cart])

	useEffect(() => {
		dispatch(setTotalCount(totalCount))
		dispatch(setTotalPrice(totalPrice))
	}, [dispatch, totalCount, totalPrice])

	if (!userCountryFindData) return null
	//render
	return (
		<div className={`cart ${isOpenCart ? 'show' : 'hide'}`}>
			<div className='cart__background'></div>
			<div
				className='cart__button-close'
				onClick={() => dispatch(setIsOpenCart(false))}>
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
								onClick={() =>
									dispatch(decrementCartItemCount('tariff-single'))
								}>
								<img src='/icons/Cart/cart__button-minus.svg' alt='' />
							</div>
							<p className='cart__info_text'>{totalCount}</p>
							<div
								className='cart__info_button cart__info_button-plus'
								onClick={() =>
									dispatch(incrementCartItemCount('tariff-single'))
								}>
								<img src='/icons/Cart/cart__button-plus.svg' alt='' />
							</div>
						</div>
						<p className='cart__product_price-total'>
							{' '}
							{`${totalPrice} ${userCountryFindData.priceTitle}`}
						</p>
						<div
							className='cart__product_delete'
							onClick={() => dispatch(deleteCartItem('tariff-single'))}>
							<img src='/icons/Cart/cart__button-plus.svg' alt='' />
						</div>
					</div>
				</div>
				<p className='cart__totalPrice'>
					Сумма: {`${totalPrice} ${userCountryFindData.priceTitle}`}
				</p>
				<CartForm />
			</div>
		</div>
	)
}

export default Cart
