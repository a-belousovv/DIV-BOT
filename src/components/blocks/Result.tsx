// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

import { Navigation } from 'swiper/modules'

const Result = () => {
	return (
		<section className='result'>
			<div className='block-container'>
				<Swiper navigation={true} modules={[Navigation]} className='mySwiper'>
					{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
						return (
							<SwiperSlide key={item}>
								<div className='result__slider_item'>
									<div className='result__item_img'>
										<img
											src={`/pictures/Result/${item}/result__slider-1.webp`}
											alt='Картинка отзыва от покупателя'
										/>
									</div>
									<div className='result__item_img'>
										<img
											src={`/pictures/Result/${item}/result__slider-2.webp`}
											alt='Картинка отзыва от покупателя'
										/>
									</div>
									<div className='result__item_img'>
										<img
											src={`/pictures/Result/${item}/result__slider-3.webp`}
											alt='Картинка отзыва от покупателя'
										/>
									</div>
									<div className='result__item_img'>
										<img
											src={`/pictures/Result/${item}/result__slider-4.webp`}
											alt='Картинка отзыва от покупателя'
										/>
									</div>
								</div>
							</SwiperSlide>
						)
					})}
				</Swiper>
			</div>
		</section>
	)
}

export default Result
