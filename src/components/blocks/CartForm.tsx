import { SubmitHandler, useForm } from 'react-hook-form'
import { CartFormInterface } from '../../@types/interfaces/CartInterfaces/types'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { setIsOpenCart } from '../../redux/slices/CartSlice'

const CartForm = () => {
	const { register, handleSubmit, reset } = useForm<CartFormInterface>()
	const activeCourse = useAppSelector((state) => state.cart.activeCourse)
	const dispatch = useAppDispatch()
	const onSubmit: SubmitHandler<CartFormInterface> = (data) => {
		console.log({ ...data, ...activeCourse, date: new Date() })
		reset()
		alert('Ваша заявка успешно принята')
		dispatch(setIsOpenCart(false))
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
