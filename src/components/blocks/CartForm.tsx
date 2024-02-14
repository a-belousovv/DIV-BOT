import { SubmitHandler, useForm } from 'react-hook-form'
import { CartFormInterface } from '../../@types/interfaces/CartInterfaces/types'
import { useAppSelector } from '../../redux/hooks'

const CartForm = () => {
	const cart = useAppSelector((state) => state.cart.cart)
	const totalPrice = useAppSelector((state) => state.cart.totalPrice)
	const totalCount = useAppSelector((state) => state.cart.totalCount)
	const userCountryFindData = useAppSelector(
		(state) => state.cart.userCountryFindData
	)
	const { register, handleSubmit, reset } = useForm<CartFormInterface>()

	const onSubmit: SubmitHandler<CartFormInterface> = (data) => {
		console.log({
			...data,
			totalPrice: `${totalPrice} ${userCountryFindData.priceTitle}`,
			totalCount: totalCount,
			cart: cart,
		})
		alert('Ваша заявка успешно принята')
		reset()
	}
	return (
		<form action='' className='cart__form' onSubmit={handleSubmit(onSubmit)}>
			<div className='cart__form_item'>
				<input
					minLength={3}
					maxLength={10}
					required
					{...register('name')}
					type='name'
					className='cart__form_input'
					placeholder='Имя'
				/>
			</div>
			<div className='cart__form_item cart__form_item-phone'>
				<input
					required
					{...register('phone')}
					type='number'
					className='cart__form_input'
					placeholder='+375293912716'
				/>
			</div>
			<div className='cart__form_item'>
				<input
					required
					{...register('telegram')}
					type='text'
					className='cart__form_input'
					placeholder='Никнейм в Telegram'
				/>
			</div>
			<div className='cart__form_item'>
				<input
					required
					{...register('email')}
					type='email'
					className='cart__form_input'
					placeholder='E-mail'
				/>
			</div>
			<button type='submit' className='cart__form_button'>
				ОПЛАТИТЬ УЧАСТИЕ
			</button>
			<p className='cart__form_text'>
				Нажимая на кнопку "Оплатить участие" вы принимаете{' '}
				<span>политику конфиденциальности</span>
			</p>
		</form>
	)
}

export default CartForm
