import CartForm from './CartForm'

const Cart = () => {
	const isOpenCart = true

	return (
		<div className={`cart ${isOpenCart ? 'show' : 'hide'}`}>
			<div className='cart__background'></div>
			<div className='cart__button-close'>
				<div className='cart__button_content-close'></div>
			</div>
			<div className='cart__content'>
				<h3 className='cart__content_title'>Ваш заказ:</h3>
				<div className='cart__product'>
					<p className='cart__product_text'>Закупка</p>
					<div className='cart__product_right'>
						<div className='cart__product_info'>
							<div className='cart__info_button cart__info_button-minus'>
								<img src='/icons/Cart/cart__button-minus.svg' alt='' />
							</div>
							<p className='cart__info_text'>0</p>
							<div className='cart__info_button cart__info_button-plus'>
								<img src='/icons/Cart/cart__button-plus.svg' alt='' />
							</div>
						</div>
						<p className='cart__product_price-total'>0 BYN</p>
						<div className='cart__product_delete'>
							<img src='/icons/Cart/cart__button-plus.svg' alt='' />
						</div>
					</div>
				</div>
				<p className='cart__totalPrice'>Сумма: 0 BYN</p>
				<CartForm />
			</div>
		</div>
	)
}

export default Cart
