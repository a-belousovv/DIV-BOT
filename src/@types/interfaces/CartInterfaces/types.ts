export interface CartFormInterface {
	name: string
	phone: string
	telegram: string
	email: string
}
export interface FetchIpInfoFindItem {
	id: string
	title: string
	coursePrice: number
	courseCountryTitle: string
	courseDiscountPrice: number
}

export interface СartSliceState {
	isOpenCart: boolean
	cartCount: number
	totalPrice: string
	chooseCountry: FetchIpInfoFindItem
	countryArray: FetchIpInfoFindItem[]
}
