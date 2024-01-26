import { useEffect, useState } from 'react'
import Categories from '../../components/Categories'
import Sort from '../../components/Sort'
import Items from '../../components/Items'
import { getUrl } from './utils'
import categories from '../../assets/json/categories.json'

const Home = () => {
  const [currentCategory, setCurrentCategory] = useState(categories[0]._id)
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setIsLoading(true)
    fetch(
      getUrl({
        category: currentCategory,
      })
    )
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((e) => alert(e))
      .finally(() => setIsLoading(false))
    window.scrollTo(0, 0)
  }, [currentCategory])
  const handleCategoryChange = (category) => {
    setCurrentCategory(category)
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          categories={categories}
          currentCategory={currentCategory}
          handleCategoryChange={handleCategoryChange}
        />
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
