import { createSlice } from '@reduxjs/toolkit'
import { TarrifsSliceInitialState } from '../../@types/interfaces/tarrifs.interface'

const initialState: TarrifsSliceInitialState = {
	tarrifs: [
		{
			tarrifId: 'tarrif-single',
			tarrifTitle: 'Тариф Единый',
			tarrifPossibilities: [
				{
					possibilityId: 'subscribe',
					possibilityTitle: "Подписка на ᗪIᐯ'ный бот в течении 1 месяца;",
				},
				{
					possibilityId: 'chat',
					possibilityTitle:
						'Чат участников для обмена опытом, вдохновения и мотивации;',
				},
				{
					possibilityId: 'feedback',
					possibilityTitle: 'Обратная связь от Алены или ее ассистента в чате;',
				},
				{
					possibilityId: 'access',
					possibilityTitle: 'Доступ к базе материалов.',
				},
			],
			prices: [
				{
					priceId: 'Belarus',
					price: 29,
					discountPrice: 50,
					priceTitle: 'BYN',
				},
				{
					priceId: 'Russia',
					price: 850,
					discountPrice: 1500,
					priceTitle: 'RUB',
				},
				{
					priceId: 'United States',
					price: 9,
					discountPrice: 15,
					priceTitle: 'USD',
				},
			],
		},
	],
	defaultPrice: {
		priceId: 'Belarus',
		price: 29,
		discountPrice: 50,
		priceTitle: 'BYN',
	},
}

export const tarrifsSlice = createSlice({
	name: 'tarrifs',
	initialState,
	reducers: {},
})

export default tarrifsSlice.reducer
