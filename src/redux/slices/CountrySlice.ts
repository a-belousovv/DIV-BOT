import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { getUserCountry } from '../../helpers/getUserCountry'

export const getUserGeolocation = createAsyncThunk(
	'user/getUserCountry',
	getUserCountry
)

export const countrySlice = createSlice({
	name: 'country',
	initialState: {
		country: 'Belarus',
		errorMessage: 'something went wrong',
	},
	reducers: {
		setCountry: (state, action) => {
			state.country = action.payload
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getUserGeolocation.fulfilled, (state, action) => {
			state.country = action.payload
		})
	},
})

export const { setCountry } = countrySlice.actions
export default countrySlice.reducer
