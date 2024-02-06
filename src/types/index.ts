import { Size, Type } from '../const'

export type Item = {
  _id: number
  imageUrl: string
  title: string
  types: TypeId[]
  sizes: SizeId[]
  price: number
  category: number
  rating: number
}
export type CartKeyParams = {
  _id: Item['_id']
  type: TypeId
  size: SizeId
}
export type CartKey = string

export type CartItem = {
  cartKey: CartKey
  title: Item['title']
  type: TypeData['title']
  size: SizeData['title']
  count: number
  total: number
}

export type Items = Item[]

export type CartItemsData = {
  [key: CartKey]: CartItem
}

export type CartItems = CartItem[]

export type SearchParamsURL = string

export type SearchParams = {
  [key: string]: string | number | null | undefined
}

export type CategoryId = number | null

export type Category = { _id: CategoryId; title: string }

export type Categories = Category[]

export type SortOption = { _id: number; title: string; value: string }

export type SortOptions = SortOption[]

export type TypeId = keyof typeof Type

export type TypeData = (typeof Type)[TypeId]

export type SizeId = keyof typeof Size

export type SizeData = (typeof Size)[SizeId]
