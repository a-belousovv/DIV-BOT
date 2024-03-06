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
		id: 'Belarus',
		price: 29,
		discountPrice: 50,
		priceTitle: 'BYN',
		courseTitle: 'Тариф Единый',
	},
	defaultCourse: {
		id: 'Belarus',
		price: 29,
		discountPrice: 50,
		priceTitle: 'BYN',
		courseTitle: 'Тариф Единый',
	},
	courses: [
		{
			id: 'tariff-single-id',
			courseTitle: 'tariff-single',
			countries: [
				{
					id: 'Belarus',
					price: 29,
					discountPrice: 50,
					priceTitle: 'BYN',
					courseTitle: 'Тариф Единый',
				},
				{
					id: 'Russia',
					price: 820,
					discountPrice: 1400,
					priceTitle: 'RUB',
					courseTitle: 'Тариф Единый',
				},
				{
					id: 'Usa',
					price: 9,
					discountPrice: 15,
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
