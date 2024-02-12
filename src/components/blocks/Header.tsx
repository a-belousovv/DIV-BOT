import SharedButton from '../shared/Shared-Button'

const Header = () => {
	return (
		<div className='header'>
			<div className='block-container'>
				<div className='header__box'>
					<div className='header__lines-background'>
						<img
							src='/backgrounds/Header/header-lines-background.jpeg'
							alt=''
						/>
					</div>
					<div className='header__waves-background'>
						<img src='/backgrounds/Header/header-waves-background.svg' alt='' />
					</div>
					<div className='header__content'>
						<h1 className='header__title-course-name'>
							<span>Авторский бот для тренировок</span> Алёны Ивановой
						</h1>
						<p className='header__slogan'>LEVEL UP</p>
						<h2 className='header__subtitle'>
							<span>Стань лучшей версией себя, </span>с нашей помощью
						</h2>
						<div className='header__lessons'>
							<div className='header__lessons_item'>
								<div className='header__item_point'></div>
								<div className='header__item_content'>
									<h3 className='header__content_title'>
										<span>200+ упражнений </span> пошаговые инструкции с
										заданиями
									</h3>
								</div>
							</div>
							<div className='header__lessons_item'>
								<div className='header__item_point'></div>
								<div className='header__item_content'>
									<h3 className='header__content_title'>
										<span>Комьюнити </span> чат с единомышленниками и поддержкой
									</h3>
								</div>
							</div>
						</div>
						<SharedButton href='#tariffs' text='УЧАСТВОВАТЬ' color='blue' />
						<a href='#program' className='header__button header__button-white'>
							СМОТРЕТЬ ПРОГРАММУ
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
