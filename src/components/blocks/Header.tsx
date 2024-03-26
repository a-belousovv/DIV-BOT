import { scrollToSection } from '../../helpers/ScrollToSection'
import SharedButton from '../shared/Shared-Button'

const Header = () => {
	return (
		<div className='header'>
			<div className='block-container'>
				<div className='header__box'>
					<div className='header__background'>
						<img
							// src='/backgrounds/Header/header-bg-3.jpg'
							src='/backgrounds/Header/header-bg-laptop.jpg'
							alt=''
							className='header__background header__background-laptop'
						/>
						<img
							src='/backgrounds/Header/header-bg-media-3.jpg'
							className='header__background header__background-mobile'
							alt=''
						/>
					</div>
					<div className='header__content'>
						<div className='header__content_slogan'>
							<p className='header__slogan_text'>ᗪIᐯ'ный бот</p>
							<h1 className='header__title-course-name'>
								<span>авторский бот</span> Алёны Окотчик с тренировками для зала
								и дома
							</h1>
						</div>

						<div className='header__lessons'>
							<div className='header__lessons_item'>
								<div className='header__item_point'></div>
								<div className='header__item_content'>
									<h3 className='header__content_title'>
										<span>330+ упражнений </span> для дома, зала, стрейчинга и
										работы с осанкой с пошаговыми видео и текстовыми
										инструкциями.
									</h3>
								</div>
							</div>
							<div className='header__lessons_item'>
								<div className='header__item_point'></div>
								<div className='header__item_content'>
									<h3 className='header__content_title'>
										<span>Комьюнити </span> чат с единомышленниками и поддержкой{' '}
										<br />+ закрытый телеграм-канал с эксклюзивными материалами.
									</h3>
								</div>
							</div>
						</div>
						<h2 className='header__subtitle'>
							ты приятно <span> УДИВИШЬСЯ </span>результату тренировок
						</h2>
						<SharedButton href='#tariffs' text='УЧАСТВОВАТЬ' color='blue' />
						<div
							onClick={() => scrollToSection('#program')}
							className='header__button header__button-white'>
							СМОТРЕТЬ ПРОГРАММУ
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
