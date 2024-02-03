import { createSlice } from '@reduxjs/toolkit'
import { BASE_CART_ITEM } from '../../../const'

const initialState = {
  items: {},
  count: 0,
  total: 0,
}

const slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { key, price } = action.payload
      const isExist = key in state.items

      if (isExist) {
        slice.caseReducers.increment(state, action)
      } else {
        state.items[key] = { count: 1, price, total: price }
        state.count++
        state.total += price
      }
    },
    increment: (state, action) => {
      const { key } = action.payload
      let { count, price, total } = state.items[key]
      count++
      total += price
      state.items[key] = { count, price, total }
      state.count++
      state.total += price
    },
    decrement: (state, action) => {
      const { key } = action.payload
      let { count, price, total } = state.items[key]

      if (count > 1) {
        count--
        total -= price
        state.items[key] = { count, price, total }
        state.count--
        state.total -= price
      }
    },
    removeItem: (state, action) => {
      const { key } = action.payload
      const { count, total } = state.items[key]
      delete state.items[key]
      state.count -= count
      state.total -= total
    },
    clearItems: (state) => {
      state.items = {}
      state.count = 0
      state.total = 0
    },
  },
})

export const selectCart = (state) => state.cart
export const selectCartItemByKey = (key) => (state) => selectCart(state).items[key] ?? BASE_CART_ITEM

export const { addItem, increment, decrement, removeItem, clearItems } = slice.actions

export default slice.reducer
