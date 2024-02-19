import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import axios from 'axios'
import CartForm from './CartForm'
import {
	deleteChooseCourse,
	setChoosesUserCountry,
	setIsOpenCart,
	setChoosesActiveCourse,
} from '../../redux/slices/CartSlice'

const Cart = () => {
	//import selectors
	const isOpenCart = useAppSelector((state) => state.cart.isOpenCart)
	const choosesCourse = useAppSelector((state) => state.cart.choosesCourse)
	const chooseUserCountry = useAppSelector(
		(state) => state.cart.choosesUserCountry
	)
	const courses = useAppSelector((state) => state.cart.courses)
	//states
	const [userIpAddress, setUserIpAddress] = useState('')
	const activeCourse = useAppSelector((state) => state.cart.activeCourse)

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
			if (!data) dispatch(setChoosesUserCountry('Belarus'))
			dispatch(setChoosesUserCountry(data.country))
		} catch (e) {
			console.error(e)
		}
	}

	const deleteChooseCourseHandler = () => {
		dispatch(deleteChooseCourse())
		dispatch(setIsOpenCart(false))
	}

	useEffect(() => {
		getUserIp()
		getUserCountry()
	}, [])

	useEffect(() => {
		if (choosesCourse) {
			const course = courses.find((item) => item.id == choosesCourse)
			if (course) {
				const findCountryCourse = course.countries.find(
					(item) => item.id === chooseUserCountry
				)
				if (findCountryCourse) {
					dispatch(setChoosesActiveCourse(findCountryCourse))
				}
			}
		}
	}, [choosesCourse])

	//render

	if (!activeCourse) return null
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
					<p className='cart__product_text'>{activeCourse.courseTitle}</p>
					<div className='cart__product_right'>
						{/* <div className='cart__product_info'>
							<div className='cart__info_button cart__info_button-minus'>
								<img src='/icons/Cart/cart__button-minus.svg' alt='' />
							</div>
							<p className='cart__info_text'>0</p>
							<div className='cart__info_button cart__info_button-plus'>
								<img src='/icons/Cart/cart__button-plus.svg' alt='' />
							</div>
						</div> */}
						<p className='cart__product_price-total'>{`${activeCourse.price} ${activeCourse.priceTitle}`}</p>
						<div
							className='cart__product_delete'
							onClick={() => deleteChooseCourseHandler()}>
							<img src='/icons/Cart/cart__button-plus.svg' alt='' />
						</div>
					</div>
				</div>
				{/* <p className='cart__totalPrice'>Сумма: 0</p> */}
				<CartForm />
			</div>
		</div>
	)
}

export default Cart
