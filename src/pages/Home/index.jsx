import { useContext, useEffect, useState } from 'react'
import Categories from '../../components/Categories'
import Sort from '../../components/Sort'
import Items from '../../components/Items'
import { AppContext } from '../../App'
import { getUrl } from './utils'

const Home = () => {
  const { currentCategory } = useContext(AppContext)
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setIsLoading(true)
    fetch(
      getUrl({
        category: currentCategory._id,
      })
    )
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((e) => alert(e))
      .finally(() => setIsLoading(false))
    window.scrollTo(0, 0)
  }, [currentCategory])

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
    </div>
  )
}

export default Home
