import { useEffect, useState } from 'react'
import Categories from '../../components/Categories'
import Sort from '../../components/Sort'
import Items from '../../components/Items'
import { getUrl } from './utils'
import categories from '../../assets/json/categories.json'
import sortOptions from '../../assets/json/sort.json'
import Pagination from '../../components/Pagination'

const INITIAL_PAGE = 0
const PAGE_COUNT = 4

const Home = ({ search }) => {
  const [currentCategory, setCurrentCategory] = useState(categories[0]._id)
  const [currentSort, setCurrentSort] = useState(sortOptions[0])
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
    setCurrentCategory(category)
  }
  const handleSortChange = (sort) => {
    setCurrentSort(sort)
  }
  const handleCurrentPageChange = (page) => {
    setCurrentPage(page)
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories items={categories} current={currentCategory} onChange={handleCategoryChange} />
        <Sort items={sortOptions} current={currentSort} onChange={handleSortChange} />
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
