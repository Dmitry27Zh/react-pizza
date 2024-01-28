import { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Categories from '../../components/Categories'
import Sort from '../../components/Sort'
import Items from '../../components/Items'
import { getUrl } from './utils'
import categories from '../../assets/json/categories.json'
import Pagination from '../../components/Pagination'
import { AppContext } from '../../App'
import { changeCategory } from '../../redux/slices/filter'

const INITIAL_PAGE = 0
const PAGE_COUNT = 4

const Home = () => {
  const { search } = useContext(AppContext)
  const currentCategory = useSelector((state) => state.filter.category)
  const currentSort = useSelector((state) => state.filter.sort)
  const dispatch = useDispatch()
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE)
  useEffect(() => {
    setIsLoading(true)
    fetch(
      getUrl({
        category: currentCategory,
        sortBy: currentSort.value,
        order: 'desc',
        search: search.trim(),
        page: currentPage + 1,
        limit: 3,
      })
    )
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else if (res.status === 404) {
          return []
        } else {
          throw new Error(res.statusText)
        }
      })
      .then((data) => setItems(data))
      .catch((e) => alert(e))
      .finally(() => setIsLoading(false))
    window.scrollTo(0, 0)
  }, [currentCategory, currentSort, search, currentPage])
  const handleCategoryChange = (category) => {
    dispatch(changeCategory(category))
  }
  const handleCurrentPageChange = (page) => {
    setCurrentPage(page)
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories items={categories} current={currentCategory} onChange={handleCategoryChange} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        <Items isLoading={isLoading} items={items} />
      </div>
      <Pagination initial={INITIAL_PAGE} onChange={handleCurrentPageChange} count={PAGE_COUNT} />
    </div>
  )
}

export default Home
