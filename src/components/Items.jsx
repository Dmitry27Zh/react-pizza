import PizzaBlock from '../components/PizzaBlock'
import Skeleton from '../components/PizzaBlock/Skeleton'

const Items = ({ items, isLoading }) => {
  if (isLoading) {
    return [...Array(10)].map((_, index) => <Skeleton key={index} />)
  } else {
    return items.map((item) => <PizzaBlock key={item._id} {...item} />)
  }
}

export default Items
