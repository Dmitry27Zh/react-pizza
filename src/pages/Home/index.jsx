import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import api from '../../api/'
import Categories from '../../components/Categories'
import Sort from '../../components/Sort'
import Items from '../../components/Items'
import { getSearchParams } from './utils'
import Pagination from '../../components/Pagination'
import { changePage, initFilters } from '../../redux/slices/filter'
import { useNavigate } from 'react-router-dom'
import { getFilterParams } from '../../redux/slices/filter/utils'
import { Page } from '../../redux/slices/filter/const'
import { setItems } from '../../redux/slices/pizzas/index'

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
  const [items] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isMounted = useRef(false)
  useEffect(() => {
    const hasFilters = !!window.location.search
    const params = hasFilters ? getFilterParams(categories, sortOptions) : null
    dispatch(initFilters(params))
  }, [])
  const fetchPizzas = () => {
    setIsLoading(true)
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
    api.items
      .fetchAll(searchParams)
      .then((data) => {
        dispatch(setItems(data))
      })
      .catch((e) => {
        alert(e)
      })
      .finally(() => setIsLoading(false))

    return () => {
      isMounted.current = false
    }
  }
  useEffect(() => {
    if (filtersInited) {
      fetchPizzas()
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
