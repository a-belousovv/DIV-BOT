export interface TarrifsSliceInitialState {
	tarrifs: TarrifItem[]
	defaultPrice: priceItem
}

interface TarrifItem {
	tarrifId: string
	tarrifTitle: string
	tarrifPossibilities: possibilityItem[]
	prices: priceItem[]
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
