import { createSlice } from '@reduxjs/toolkit'
import categories from '../../assets/json/categories.json'
import sortOptions from '../../assets/json/sort.json'

const initialState = {
  category: categories[0]._id,
  sort: sortOptions[0],
  categories,
  sortOptions,
  page: 0,
  search: '',
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
    changePage: (state, action) => {
      state.page = action.payload
    },
    changeSearch: (state, action) => {
      state.search = action.payload
    },
  },
})

export const { changeCategory, changeSort, changePage, changeSearch } = counterSlice.actions

export default counterSlice.reducer
