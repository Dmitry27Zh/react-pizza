import { createSlice } from '@reduxjs/toolkit'
import categories from '../../assets/json/categories.json'
import sortOptions from '../../assets/json/sort.json'

const initialState = {
  category: categories[0]._id,
  sort: sortOptions[0],
  sortOptions,
}

export const counterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeCategory: (state, action) => {
      state.category = action.payload
    },
    changeSort: (state, action) => {
      state.sort = action.payload
    },
  },
})

export const { changeCategory, changeSort } = counterSlice.actions

export default counterSlice.reducer
