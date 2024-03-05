import ReturnButton from '../components/shared/Return-Button'

const Order = () => {
	return (
		<div className='order'>
			<div className='block-container'>
				<div className='order__box'>
					<ReturnButton />
					<div className='order__content'>
						<h4 className='order__title'>Описание процедуры заказа услуги</h4>
						<p className='order__text'>
							Нажмите "оплатить участие" – вы будете перенаправлены в телеграм
							бот - в боте в меню выберите /tariffs "Оплатить подписку" - будет
							сгенерирована ссылка для оплаты услуги. Кликнув на ссылку, вы
							перейдете на специальную защищенную платежную страницу
							процессинговой системы WebPay. Для оплаты вам необходимо ввести
							свои карточные данные и подтвердить платеж, нажав кнопку
							«Оплатить».
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Order
