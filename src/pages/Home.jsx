import { useEffect, useState } from 'react'
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import Items from '../components/Items'

const Home = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    fetch('https://65b09ea3d16d31d11bdcde5a.mockapi.io/items')
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((e) => alert(e))
      .finally(() => setIsLoading(false))
    window.scrollTo(0, 0)
  }, [])

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
