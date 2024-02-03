import { useDispatch } from 'react-redux'
import Categories from './Categories'
import Sort from './Sort'
import Items from './Items'
import Pagination from './Pagination'
import { Page } from '../redux/slices/filter/const'
import { changePage } from '../redux/slices/filter'

const Pizzas = ({ isLoading, items, page }) => {
  const dispatch = useDispatch()
  const handleCurrentPageChange = (page) => {
    dispatch(changePage(page))
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
