import {
	cartItem,
	coursePriceDataItem,
} from './../../@types/interfaces/CartInterfaces/types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { СartSliceState } from '../../@types/interfaces/CartInterfaces/types'

const initialState: СartSliceState = {
	isOpenCart: false,
	userCountry: '',
	coursePriceData: [
		{ id: 'Belarus', discountPrice: '29', price: 12, priceTitle: 'BYN' },
		{ id: 'Russia', discountPrice: '820', price: 340, priceTitle: 'RUB' },
		{ id: 'Usa', discountPrice: '9', price: 4, priceTitle: 'USD' },
	],
	userCountryFindData: {
		id: 'Belarus',
		discountPrice: '29',
		price: 12,
		priceTitle: 'BYN',
	},
	cart: [],
	totalPrice: 0,
	totalCount: 0,
}

export const CartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		setIsOpenCart: (state, action: PayloadAction<boolean>) => {
			state.isOpenCart = action.payload
		},
		setUserCountry: (state, action: PayloadAction<string>) => {
			state.userCountry = action.payload
		},
		setUserCountryFindData: (
			state,
			action: PayloadAction<coursePriceDataItem>
		) => {
			state.userCountryFindData = action.payload
		},
		addNewCartItem: (state, action: PayloadAction<cartItem>) => {
			const findItem = state.cart.find((item) => item.id == action.payload.id)
			if (findItem) {
				findItem.count++
			} else {
				state.cart.push(action.payload)
			}
		},
		incrementCartItemCount: (state, action: PayloadAction<string>) => {
			const findItem = state.cart.find(
				(item) => item.courseTitle == action.payload
			)
			if (findItem) {
				if (findItem.count < 50) {
					findItem.count++
				}
			}
		},
		decrementCartItemCount: (state, action: PayloadAction<string>) => {
			const findItem = state.cart.find(
				(item) => item.courseTitle == action.payload
			)
			if (findItem) {
				if (findItem.count > 1) {
					findItem.count--
				}
			}
		},
		deleteCartItem: (state, action: PayloadAction<string>) => {
			state.cart = state.cart.filter(
				(item) => item.courseTitle != action.payload
			)
		},
		setTotalPrice: (state, action: PayloadAction<number>) => {
			state.totalPrice = action.payload
		},
		setTotalCount: (state, actions: PayloadAction<number>) => {
			state.totalCount = actions.payload
		},
		clearCart: (state) => {
			state.cart = []
		},
	},
})

export default CartSlice.reducer
export const {
	setIsOpenCart,
	setUserCountry,
	setUserCountryFindData,
	addNewCartItem,
	incrementCartItemCount,
	decrementCartItemCount,
	deleteCartItem,
	setTotalPrice,
	setTotalCount,
	clearCart,
} = CartSlice.actions
