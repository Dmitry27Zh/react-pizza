import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../../../api/'

const initialState = {
  items: [],
  status: 'loading',
}

export const fetchPizzas = createAsyncThunk('pizzas/fetchPizzas', async (searchParams) => {
  return api.items.fetchAll(searchParams)
})

const slice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.items = []
      state.status = 'loading'
    })
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload
      state.status = 'success'
    })
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.items = []
      state.status = 'error'
    })
  },
})

export const { setItems } = slice.actions

export default slice.reducer
