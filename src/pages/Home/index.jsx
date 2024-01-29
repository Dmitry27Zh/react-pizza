import { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import Categories from '../../components/Categories'
import Sort from '../../components/Sort'
import Items from '../../components/Items'
import { getUrl } from './utils'
import Pagination from '../../components/Pagination'
import { AppContext } from '../../App'
import { changePage } from '../../redux/slices/filter'
import { useNavigate } from 'react-router-dom'

const PAGE_COUNT = 4

const Home = () => {
  const { search } = useContext(AppContext)
  const { category, sort, page } = useSelector((state) => state.filter)
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    setIsLoading(true)
    const url = getUrl({
      category,
      sortBy: sort.value,
      order: 'desc',
      search: search.trim(),
      page: page + 1,
      limit: 3,
    })
    navigate(url.search)
    axios
      .get(url)
      .then((res) => setItems(res.data))
      .catch((e) => {
        if (e.response.status === 404) {
          setItems([])
        } else {
          alert(e)
        }
      })
      .finally(() => setIsLoading(false))
    window.scrollTo(0, 0)
  }, [category, sort, search, page])
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
      <Pagination current={page} onChange={handleCurrentPageChange} count={PAGE_COUNT} />
    </div>
  )
}

export default Home
