import { createSlice } from '@reduxjs/toolkit'
import categories from '../../../assets/json/categories.json'
import sortOptions from '../../../assets/json/sort.json'

const initialState = {
  category: categories[0]._id,
  sort: sortOptions[0],
  categories,
  sortOptions,
  page: 1,
  search: '',
  loaded: false,
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
    changeFilters: (state, action) => {
      Object.assign(state, action.payload)
      state.loaded = true
    },
  },
})

export const { changeCategory, changeSort, changePage, changeSearch, changeFilters } = counterSlice.actions

export default counterSlice.reducer
