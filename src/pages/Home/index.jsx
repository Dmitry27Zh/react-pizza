import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Categories from '../../components/Categories'
import Sort from '../../components/Sort'
import Items from '../../components/Items'
import { getSearchParams } from './utils'
import Pagination from '../../components/Pagination'
import { changePage, initFilters } from '../../redux/slices/filter'
import { useNavigate } from 'react-router-dom'
import { getFilterParams } from '../../redux/slices/filter/utils'
import { Page } from '../../redux/slices/filter/const'
import { fetchPizzas } from '../../redux/slices/pizzas/index'

const Home = () => {
  const {
    inited: filtersInited,
    categories,
    sortOptions,
    category,
    sort,
    page,
    search,
  } = useSelector((state) => state.filter)
  const { items, status } = useSelector((state) => state.pizzas)
  const isLoading = status === 'pending'
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isMounted = useRef(false)
  useEffect(() => {
    const hasFilters = !!window.location.search
    const params = hasFilters ? getFilterParams(categories, sortOptions) : null
    dispatch(initFilters(params))
  }, [])
  const fetch = () => {
    const searchParams = getSearchParams({
      category,
      sortBy: sort.value,
      order: 'desc',
      search: search.trim() || null,
      page,
      limit: 3,
    })
    if (isMounted.current) {
      navigate(`?${searchParams}`)
    }
    isMounted.current = true
    dispatch(fetchPizzas(searchParams))

    return () => {
      isMounted.current = false
    }
  }
  useEffect(() => {
    if (filtersInited) {
      fetch()
    }
    window.scrollTo(0, 0)
  }, [category, sort, search, page, filtersInited])
  const handleCurrentPageChange = (page) => {
    dispatch(changePage(page))
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        <Items isLoading={isLoading} items={items} />
      </div>
      <Pagination current={page} onChange={handleCurrentPageChange} count={Page.COUNT} />
    </div>
  )
}

export default Home
