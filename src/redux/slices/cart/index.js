import { createSlice } from '@reduxjs/toolkit'

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
        let { count, price, total } = state.items[key]
        count++
        total += price
        state.items[key] = { count, price, total }
      } else {
        state.items[key] = { count: 1, price, total: price }
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
