import { configureStore } from '@reduxjs/toolkit'
import pizzas from './slices/pizzas'
import filter from './slices/filter'
import cart from './slices/cart'

export const store = configureStore({
  reducer: {
    filter,
    cart,
    pizzas,
  },
})

export type RootState = ReturnType<typeof store.getState>
