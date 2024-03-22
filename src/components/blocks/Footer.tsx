import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer__box'>
				<div className='footer__top'>
					<div className='footer__content_item'>
						<Link to='/security' className='footer__item_text'>
							Безопасность платежей
						</Link>
					</div>
					<div className='footer__content_item'>
						<a
							target='_blank'
							href='/pdf/webpay_example.pdf'
							className='footer__item_text'>
							Образец чека
						</a>
					</div>
					<div className='footer__content_item'>
						<Link to='/public-contract' className='footer__item_text'>
							Публичная оферта
						</Link>
					</div>
					<div className='footer__content_item'>
						<Link to='/order' className='footer__item_text'>
							Описание процедуры заказа услуги
						</Link>
					</div>
					<div className='footer__content_item'>
						<Link to='/order-help' className='footer__item_text'>
							Способ оплаты услуги
						</Link>
					</div>
				</div>
				<div className='footer__bottom'>
					<div className='footer__info'>
						<p className='footer__info_text'>
							ИП Окотчик Елена Константиновна УНП 591625019 <br />
							свидетельство о государственной регистрации от 14.10.2022 <br />
							выданное Новогрудский райисполкомом
						</p>
						<p className='footer__info_text'>
							Беларусь, Новогрудок, 231400 ул. Совесткая, д. 12, кв. 32
						</p>
					</div>
					<div className='footer__items'>
						<div className='footer__img'>
							<img src='/icons/Footer/footer__icon.jpg' alt='' />
						</div>
						<div className='footer__info contacts'>
							<a
								target='_blank'
								href='https://t.me/sport_diva'
								className='footer__info_text'>
								@sport_diva
							</a>
							<p className='footer__info_text link'>+375333283667</p>
							<p className='footer__info_text'>режим работы: круглосуточно</p>
						</div>
					</div>
					<div className='footer__content'>
						<div className='footer__content_bottom'>
							<img src='/pictures/Footer/footer-banks.png' alt='' />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
