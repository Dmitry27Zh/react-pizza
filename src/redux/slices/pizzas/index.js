import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

const slice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setItems: (state, action) => {
      console.log(action)
      state.items = action.payload
    },
  },
})

export const { setItems } = slice.actions

export default slice.reducer
