import api from '../../api'
import { decodeCartItemParams } from '../../redux/slices/cart/utils'
import { Type, Size } from '../../const'
import { CartItems, CartItemsData } from '../../types'

export const getItemsData = (items: CartItemsData): Promise<CartItems> => {
  return Promise.all(
    Object.keys(items).map((cartKey) => {
      const item = items[cartKey]
      const { _id, type, size } = decodeCartItemParams(cartKey)

      return api.items
        .getById(Number(_id))
        .then((itemData) => ({ ...item, ...itemData, type: Type[type].title, size: Size[size].title, cartKey }))
    })
  )
}
