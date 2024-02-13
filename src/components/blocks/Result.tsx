import SharedButton from '../shared/Shared-Button'

const Result = () => {
	return (
		<div className='result'>
			<div className='block-container'>
				<div className='result__box'>
					<h3 className='result__title'>Мой продукты очень любят</h3>
					<h4 className='result__subtitle'>
						<span>+20.000 подписчиков </span>
						за 6 месяцев
					</h4>
					<p className='result__text'>
						*Средняя цена целевого подписчика выходит 24 рубля
					</p>
					<div className='result__img'>
						<img src='/pictures/Result/Result-Instagram-picture.png' alt='' />
						<SharedButton href='#tariffs' color='blue' text='ОПЛАТИТЬ' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Result
