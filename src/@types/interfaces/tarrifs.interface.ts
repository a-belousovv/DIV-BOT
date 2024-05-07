export interface TarrifsSliceInitialState {
	tarrifs: TarrifItem[]
}

export interface TarrifItem {
	tarrifId: string
	tarrifTitle: string
	tarrifPossibilities: possibilityItem[]
	prices: priceItem[]
	defaultPrice: priceItem
}

interface possibilityItem {
	possibilityId: string
	possibilityTitle: string
}

interface priceItem {
	priceId: string
	price: number
	discountPrice: number
	priceTitle: string
}
