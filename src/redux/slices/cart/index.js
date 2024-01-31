import { createSlice } from '@reduxjs/toolkit'
import { codeCartItemParams, decodeCartItemParams } from './utils'

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
      const { item, price } = action.payload
      const key = codeCartItemParams(item)
      const isExist = key in state.items

      if (isExist) {
        console.warn('Item is already in the cart')
      } else {
        state.items[key] = { count: 1, price, total: price }
      }
    },
    getItem: (state, action) => {
      const key = codeCartItemParams(action.payload)
      const isExist = key in state.items

      if (isExist) {
        return state.items[key]
      } else {
        return null
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item._id !== action.payload)
    },
    clearItems: (state) => {
      state.items = []
    },
  },
})

export const { addItem, removeItem, clearItems } = slice.actions

export default slice.reducer
