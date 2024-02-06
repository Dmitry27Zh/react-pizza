import { Items as ItemsType } from '../types'
import PizzaBlock from './PizzaBlock'
import Skeleton from './PizzaBlock/Skeleton'

type ItemsProps = { items: ItemsType; isLoading: boolean }

const Items = ({ items, isLoading }: ItemsProps) => {
  if (isLoading) {
    return [...Array(10)].map((_, index) => <Skeleton key={index} />)
  } else {
    return items.map((item) => <PizzaBlock key={item._id} {...item} />)
  }
}

export default Items
