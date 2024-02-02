import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../redux/slices/cart'
import { codeCartItemParams } from '../../redux/slices/cart/utils'
import { Type, Size, BASE_CART_ITEM } from './const'

const PizzaBlock = ({ _id, title, price, imageUrl, sizes, types }) => {
  const [activeType, setActiveType] = useState(Type[types[0]])
  const [activeSize, setActiveSize] = useState(Size[sizes[0]])
  const { items } = useSelector((state) => state.cart)
  const fullPrice = price + activeType.price + activeSize.price
  const { count } =
    items[
      codeCartItemParams({
        _id,
        type: activeType._id,
        size: activeSize._id,
      })
    ] ?? BASE_CART_ITEM
  const dispatch = useDispatch()
  const handleAddClick = () => {
    const item = {
      _id,
      type: activeType._id,
      size: activeSize._id,
    }
    dispatch(addItem({ item, price: fullPrice }))
  }
  const handleTypeClick = (type) => {
    setActiveType(type)
  }
  const handleSizeClick = (size) => {
    setActiveSize(size)
  }

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{title}</h4>
      <div className="pizza-block__selector">
        <ul>
          {types.map((type) => {
            const typeFull = Type[type]

            return (
              <li
                key={type}
                className={type === activeType._id ? 'active' : ''}
                onClick={() => handleTypeClick(typeFull)}
              >
                {typeFull.title}
              </li>
            )
          })}
        </ul>
        <ul>
          {sizes.map((size) => {
            const sizeFull = Size[size]

            return (
              <li
                key={size}
                className={size === activeSize._id ? 'active' : ''}
                onClick={() => handleSizeClick(sizeFull)}
              >
                {sizeFull.title} см.
              </li>
            )
          })}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">{fullPrice} ₽</div>
        <button className="button button--outline button--add" onClick={handleAddClick}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          <i>{count}</i>
        </button>
      </div>
    </div>
  )
}

export default PizzaBlock
