import { useContext } from 'react'
import { AppContext } from '../App'

const Categories = () => {
  const { categories, currentCategory, handleCategoryChange } = useContext(AppContext)

  return (
    <div className="categories">
      <ul>
        {categories.map((category) => (
          <li
            key={category._id}
            className={category._id === currentCategory._id ? 'active' : ''}
            onClick={() => handleCategoryChange(category)}
          >
            {category.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories
