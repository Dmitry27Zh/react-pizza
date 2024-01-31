import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  total: 0,
}

const slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload)
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
