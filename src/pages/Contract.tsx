const Contract = () => {
	const contractInfo = [
		{
			id: '1',
			title: '1. ПРЕДМЕТ ДОГОВОРА',
			subtitles: [
				'1.1. Исполнитель обязуется оказать Заказчику услуги попредоставлению информации и консультирования в <a href="/">сфере социального маркетинга</a>',
				'1.2. Исполнитель обязуется оказать Заказчику услуги попредоставлению информации и консультирования в сфере социального маркетинга.',
				'1.3. Исполнитель обязуется оказать Заказчику услуги попредоставлению информации и консультирования в сфере социального маркетинга.',
				'1.4. Исполнитель обязуется оказать Заказчику услуги попредоставлению информации и консультирования в сфере социального маркетинга.',
				'1.5. Исполнитель обязуется оказать Заказчику услуги попредоставлению информации и консультирования в сфере социального маркетинга.',
				'1.6. Исполнитель обязуется оказать Заказчику услуги попредоставлению информации и консультирования в сфере социального маркетинга.',
				'1.7. Исполнитель обязуется оказать Заказчику услуги попредоставлению информации и консультирования в сфере социального маркетинга.',
			],
		},
	]
	return (
		<div className='public-contract'>
			<div className='block-container'>
				<div className='public-contract__box'>
					<h1 className='public-contract__title'>ПУБЛИЧНЫЙ ДОГОВОР</h1>
					<div className='public-contract__info'>
						<p className='public-contract__text'>ред. 16.02.2024</p>
						<p className='public-contract__text'>г. Минск</p>
					</div>
					<div className='public-contract__list'>
						{contractInfo.map((item) => {
							return (
								<div className='public-contract__list_item'>
									<h3 className='public-contract__item_title'>{item.title}</h3>
									{item.subtitles.map((subtitle) => {
										return (
											<p className='public-contract__item_text'>{subtitle}</p>
										)
									})}
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contract
