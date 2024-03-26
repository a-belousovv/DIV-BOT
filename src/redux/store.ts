import { configureStore } from '@reduxjs/toolkit'
import countrySlice from './slices/CountrySlice'
import tarrifsSlice from './slices/TarrifsSlice'

export const store = configureStore({
	reducer: {
		country: countrySlice,
		tarrifs: tarrifsSlice,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
