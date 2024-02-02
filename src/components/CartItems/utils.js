import api from '../../api/'
import { decodeCartItemParams } from '../../redux/slices/cart/utils'
import { Type, Size } from '../../const'

export const getItemsData = (items) => {
  return Promise.all(
    Object.keys(items).map((key) => {
      const item = items[key]
      const { _id, type, size } = decodeCartItemParams(key)

      return api.items
        .getById(Number(_id))
        .then((itemData) => ({ ...item, ...itemData, type: Type[type].title, size: Size[size].title }))
    })
  )
}
