import { createSlice } from '@reduxjs/toolkit'
import { TarrifsSliceInitialState } from '../../@types/interfaces/tarrifs.interface'

const initialState: TarrifsSliceInitialState = {
	tarrifs: [
		{
			tarrifId: 'tarrif-single-month',
			tarrifTitle: '"1 месяц"',
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
					priceId: 'Беларусь',
					price: 27,
					discountPrice: 45,
					priceTitle: 'BYN',
				},
				{
					priceId: 'Россия',
					price: 770,
					discountPrice: 1200,
					priceTitle: 'RUB',
				},
				{
					priceId: 'Соединённые Штаты Америки',
					price: 8,
					discountPrice: 14,
					priceTitle: 'USD',
				},
			],
			defaultPrice: {
				priceId: 'Беларусь',
				price: 27,
				discountPrice: 45,
				priceTitle: 'BYN',
			},
		},
		{
			tarrifId: 'tarrif-single-three-month',
			tarrifTitle: '"3 месяца"',
			tarrifPossibilities: [
				{
					possibilityId: 'subscribe',
					possibilityTitle: "Подписка на ᗪIᐯ'ный бот в течении 3 месяца;",
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
					priceId: 'Беларусь',
					price: 67.5,
					discountPrice: 112.5,
					priceTitle: 'BYN',
				},
				{
					priceId: 'Россия',
					price: 2000,
					discountPrice: 3200,
					priceTitle: 'RUB',
				},
				{
					priceId: 'Соединённые Штаты Америки',
					price: 21,
					discountPrice: 35,
					priceTitle: 'USD',
				},
			],
			defaultPrice: {
				priceId: 'Беларусь',
				price: 67.5,
				discountPrice: 112.5,
				priceTitle: 'BYN',
			},
		},
		{
			tarrifId: 'tarrif-single-six-month',
			tarrifTitle: '"6 месяцев"',
			tarrifPossibilities: [
				{
					possibilityId: 'subscribe',
					possibilityTitle: "Подписка на ᗪIᐯ'ный бот в течении 6 месяцев;",
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
					priceId: 'Беларусь',
					price: 108,
					discountPrice: 180,
					priceTitle: 'BYN',
				},
				{
					priceId: 'Россия',
					price: 2800,
					discountPrice: 5100,
					priceTitle: 'RUB',
				},
				{
					priceId: 'Соединённые Штаты Америки',
					price: 31,
					discountPrice: 55,
					priceTitle: 'USD',
				},
			],
			defaultPrice: {
				priceId: 'Беларусь',
				price: 108,
				discountPrice: 180,
				priceTitle: 'BYN',
			},
		},
	],
}

export const tarrifsSlice = createSlice({
	name: 'tarrifs',
	initialState,
	reducers: {},
})

export default tarrifsSlice.reducer
