import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../../../api'
import { Items } from '../../../types'
import { RootState } from '../../store'

type PizzasState = {
  items: Items
  status: 'pending' | 'loading' | 'error' | 'success'
}

const initialState: PizzasState = {
  items: [],
  status: 'loading',
}

export const fetchPizzas = createAsyncThunk('pizzas/fetchPizzas', async (searchParams: URLSearchParams) => {
  return api.items.fetchAll(searchParams.toString())
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

export const selectPizzas = (state: RootState) => state.pizzas

export const { setItems } = slice.actions

export default slice.reducer
