import { useDispatch } from 'react-redux'
import Categories from './Categories'
import Sort from './Sort'
import Pagination from './Pagination'
import { Page } from '../redux/slices/filter/const'
import { changePage } from '../redux/slices/filter'
import { Items as ItemsType } from '../types'
import Items from './Items'

type PizzasProps = {
  isLoading: boolean
  items: ItemsType
  page: number
}

const Pizzas = ({ isLoading, items, page }: PizzasProps) => {
  const dispatch = useDispatch()
  const handleCurrentPageChange = (newPage: number) => {
    dispatch(changePage(newPage))
  }

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        <Items isLoading={isLoading} items={items} />
      </div>
      <Pagination current={page} onChange={handleCurrentPageChange} count={Page.COUNT} />
    </>
  )
}

export default Pizzas
