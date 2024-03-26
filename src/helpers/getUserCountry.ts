import axios from 'axios'

export const getUserCountry = async () => {
	try {
		const ipResponse = await axios.get('https://api.ipify.org?format=json')
		const userGeolocation = await axios.get(
			`http://ip-api.com/json/${ipResponse.data.ip}`
		)
		console.log()
		return userGeolocation.data.country
	} catch (error) {
		console.error('Ошибка при получении информации о стране', error)
		return 'Ошибка при получении информации о стране'
	}
}
