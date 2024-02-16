import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<div className='footer'>
			<div className='block-container'>
				<div className='footer__box'>
					<div className='footer__item'>
						<Link to='/security' className='footer__item_text'>
							Безопасность платежей
						</Link>
					</div>
					<div className='footer__item'>
						<Link to='/public-contract' className='footer__item_text'>
							Публичная оферта
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
