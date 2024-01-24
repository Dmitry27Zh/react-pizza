import PizzaBlock from '../components/PizzaBlock'
import Skeleton from '../components/PizzaBlock/Skeleton'

const Items = ({ items, isLoading }) => {
  if (isLoading) {
    return [...Array(10)].map((_, index) => <Skeleton key={index} />)
  } else {
    return items.map(({ _id, ...rest }) => <PizzaBlock key={_id} {...rest} />)
  }
}

export default Items
