import { useEffect, useState } from 'react'
import { getUserCountry } from '../../helpers/getUserCountry'
import TariffsItem from './TariffsItem'
import { useAppSelector } from '../../redux/hooks'

const Tariffs = () => {
	const [userCountry, setUserCountry] = useState('Беларусь')
	const tarrifs = useAppSelector((state) => state.tarrifs.tarrifs)
	useEffect(() => {
		getUserCountry().then((country) => {
			if (typeof country == 'string') {
				setUserCountry(country)
			}
		})
	}, [])

	return (
		<section className='tariffs' id='tariffs'>
			<div className='block-container'>
				<div className='tariffs__box'>
					{tarrifs.map((tariff) => {
						return (
							<TariffsItem
								userCountry={userCountry}
								key={tariff.tarrifId}
								data={tariff}
							/>
						)
					})}
				</div>
			</div>
		</section>
	)
}

export default Tariffs
