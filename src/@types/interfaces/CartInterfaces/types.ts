export interface CartFormInterface {
	name: string
	phone: string
	telegram: string
	email: string
}

export interface СartSliceState {
	isOpenCart: boolean
	userCountry: string
	coursePriceData: coursePriceDataItem[]
	userCountryFindData: coursePriceDataItem
	cart: cartItem[] | []
	totalPrice: number
	totalCount: number
}

export interface coursePriceDataItem {
	id: string
	discountPrice: string
	price: number
	priceTitle: string
}

export interface cartItem {
	count: number
	price: number
	priceTitle: string
	id: string
	discountPrice: string
	courseTitle: string
}
