import axios from 'axios'
import { Position } from 'navigator'
const successGetPosition = async (pos: Position) => {
	const { latitude, longitude } = pos.coords
	const { data } = await axios.get(
		`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
	)
	const userCountry = data.address.country
	return userCountry // Возвращаем значение userCountry
}

export const getUserCountry = async () => {
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(
			async (pos) => {
				try {
					const userCountry = await successGetPosition(pos)
					resolve(userCountry) // Возвращаем значение userCountry через промис
				} catch (error) {
					reject(error)
				}
			},
			(error) => {
				reject(error)
			}
		)
	})
}
