import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
	isOpenCart: false,
	cartCount: 1,
	totalPrice: '',
	countryArray: [
		{
			id: 'BelarusId',
			title: 'Belarus',
			coursePrice: 105,
			courseCountryTitle: ' BYN',
		},
		{
			id: 'RussiaId',
			title: 'Russia',
			coursePrice: 2990,
			courseCountryTitle: 'RUS',
		},
		{
			id: 'UsaId',
			title: 'USA',
			coursePrice: 33,
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
	},
})

export const { changeIsOpenCart, changeCartCountValue, setTotalPrice } =
	CartSlice.actions
export default CartSlice.reducer
