import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { getSearchParams } from './utils'
import { initFilters, selectFilter } from '../../redux/slices/filter'
import { getFilterParams } from '../../redux/slices/filter/utils'
import { fetchPizzas, selectPizzas } from '../../redux/slices/pizzas/index'
import Pizzas from '../../components/Pizzas'
import Error from '../../components/Error'
import { PAGE_LIMIT } from '../../const'
import { useAppDispatch, useAppSelector } from '../../redux/store'

const Home = () => {
  const { inited: filtersInited, categories, sortOptions, category, sort, page, search } = useAppSelector(selectFilter)
  const { items, status } = useAppSelector(selectPizzas)
  const isLoading = status === 'loading'
  const isError = status === 'error'
  const dispatch = useAppDispatch()
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
      limit: PAGE_LIMIT,
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
