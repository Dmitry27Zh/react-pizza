import { createSlice } from '@reduxjs/toolkit'
import categories from '../../assets/json/categories.json'

const initialState = {
  category: categories[0]._id,
}

export const counterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeCategory: (state, action) => {
      state.category = action.payload
    },
  },
})

export const { changeCategory } = counterSlice.actions

export default counterSlice.reducer
