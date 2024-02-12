import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
	isOpenCart: false,
	cartCount: 1,
	totalPrice: '',
	countryPrice: '',
	countryDiscountPrice: '',
	countryArray: [
		{
			id: 'BelarusId',
			title: 'Belarus',
			coursePrice: 12,
			courseDiscountPrice: 29,
			courseCountryTitle: ' BYN',
		},
		{
			id: 'RussiaId',
			title: 'Russia',
			coursePrice: 340,
			courseDiscountPrice: 890,
			courseCountryTitle: 'RUS',
		},
		{
			id: 'UsaId',
			title: 'USA',
			coursePrice: 4,
			courseDiscountPrice: 9,
			courseCountryTitle: 'USD',
		},
	],
}

export const CartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		changeIsOpenCart: (state, action: PayloadAction<boolean>) => {
			state.isOpenCart = action.payload
		},
		changeCartCountValue: (state, action: PayloadAction<string>) => {
			if (action.payload == 'increment') {
				if (state.cartCount < 50) {
					state.cartCount += 1
				}
			} else if (action.payload == 'decrement') {
				if (state.cartCount > 0) {
					state.cartCount -= 1
				}
			}
		},
		setTotalPrice: (state, action: PayloadAction<string>) => {
			state.totalPrice = action.payload
		},
		setCountryPrice: (state, action: PayloadAction<string>) => {
			state.countryPrice = action.payload
		},
		setCountryDiscountPrice: (state, action: PayloadAction<string>) => {
			state.countryDiscountPrice = action.payload
		},
	},
})

export const {
	changeIsOpenCart,
	changeCartCountValue,
	setTotalPrice,
	setCountryPrice,
	setCountryDiscountPrice,
} = CartSlice.actions
export default CartSlice.reducer
