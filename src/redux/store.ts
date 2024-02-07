import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
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
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
