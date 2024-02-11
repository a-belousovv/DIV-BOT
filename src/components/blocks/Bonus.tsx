import SharedButton from '../shared/Shared-Button'

const Bonus = () => {
	return (
		<div className='bonus'>
			<div className='block-container'>
				<div className='bonus__box'>
					<div className='bonus__content'>
						<h3 className='bonus__content_title'>+ Жирный бонус</h3>
						<p className='bonus__content_text'>
							Список
							<span> из 42 пабликов, </span>в <br /> которых я выбил скидку для{' '}
							<br />
							участников этого курса
						</p>
						<SharedButton href='#tariffs' color='blue' text='УЧАСТВОВАТЬ' />
					</div>
					<div className='bonus__img'>
						<img src='/pictures/Bonus/Bonus-Stats.png' alt='' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Bonus
