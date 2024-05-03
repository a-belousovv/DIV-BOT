import { configureStore } from '@reduxjs/toolkit'
import tarrifsSlice from './slices/TarrifsSlice'

export const store = configureStore({
	reducer: {
		tarrifs: tarrifsSlice,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
