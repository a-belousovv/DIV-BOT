// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

import { Navigation } from 'swiper/modules'

const Result = () => {
	return (
		<div className='result'>
			<div className='block-container'>
				<Swiper navigation={true} modules={[Navigation]} className='mySwiper'>
					{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
						return (
							<SwiperSlide key={item}>
								<div className='result__slider_item'>
									<div className='result__item_img'>
										<img
											src={`/pictures/Result/${item}/result__slider-1.png`}
											alt=''
										/>
									</div>
									<div className='result__item_img'>
										<img
											src={`/pictures/Result/${item}/result__slider-2.png`}
											alt=''
										/>
									</div>
									<div className='result__item_img'>
										<img
											src={`/pictures/Result/${item}/result__slider-3.png`}
											alt=''
										/>
									</div>
									<div className='result__item_img'>
										<img
											src={`/pictures/Result/${item}/result__slider-4.png`}
											alt=''
										/>
									</div>
								</div>
							</SwiperSlide>
						)
					})}
				</Swiper>
			</div>
		</div>
	)
}

export default Result
