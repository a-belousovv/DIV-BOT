import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import {
	CountriesItem,
	СartSliceState,
} from '../../@types/interfaces/CartInterfaces/types'

const initialState: СartSliceState = {
	isOpenCart: false,
	choosesCourse: '',
	choosesUserCountry: '',
	activeCourse: {
		id: 'Usa',
		price: 4,
		discountPrice: 9,
		priceTitle: 'USD',
		courseTitle: 'Тариф Единый',
	},
	courses: [
		{
			id: 'tariff-single-id',
			courseTitle: 'tariff-single',
			countries: [
				{
					id: 'Belarus',
					price: 12,
					discountPrice: 29,
					priceTitle: 'BYN',
					courseTitle: 'Тариф Единый',
				},
				{
					id: 'Russia',
					price: 340,
					discountPrice: 820,
					priceTitle: 'RUB',
					courseTitle: 'Тариф Единый',
				},
				{
					id: 'Usa',
					price: 4,
					discountPrice: 9,
					priceTitle: 'USD',
					courseTitle: 'Тариф Единый',
				},
			],
		},
	],
}

export const CartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		setIsOpenCart: (state, action: PayloadAction<boolean>) => {
			state.isOpenCart = action.payload
		},
		setChoosesCourse: (state, action: PayloadAction<string>) => {
			state.choosesCourse = action.payload
		},
		setChoosesUserCountry: (state, action: PayloadAction<string>) => {
			state.choosesUserCountry = action.payload
		},
		setChoosesActiveCourse: (state, action: PayloadAction<CountriesItem>) => {
			state.activeCourse = action.payload
		},
		deleteChooseCourse: (state) => {
			state.choosesCourse = ''
		},
	},
})

export default CartSlice.reducer
export const {
	setIsOpenCart,
	setChoosesCourse,
	setChoosesUserCountry,
	setChoosesActiveCourse,
	deleteChooseCourse,
} = CartSlice.actions
