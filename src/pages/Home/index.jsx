import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSearchParams } from './utils'
import { initFilters } from '../../redux/slices/filter'
import { useNavigate } from 'react-router-dom'
import { getFilterParams } from '../../redux/slices/filter/utils'
import { fetchPizzas } from '../../redux/slices/pizzas/index'
import Pizzas from '../../components/Pizzas'
import Error from '../../components/Error'

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
  const isError = status === 'error'
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

  return (
    <div className="container">{isError ? <Error /> : <Pizzas isLoading={isLoading} items={items} page={page} />}</div>
  )
}

export default Home
