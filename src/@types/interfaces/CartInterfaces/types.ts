export interface CartFormInterface {
	name: string
	phone: string
	telegram: string
	email: string
}

export interface СartSliceState {
	isOpenCart: boolean
	choosesCourse: string
	choosesUserCountry: string
	courses: CourseItem[]
	activeCourse: CountriesItem
}

export interface CourseItem {
	id: string
	courseTitle: string
	countries: CountriesItem[]
}

export interface CountriesItem {
	id: string
	price: number
	discountPrice: number
	priceTitle: string
	courseTitle: string
}
