import { useDispatch, useSelector } from 'react-redux'
import { changeCategory } from '../redux/slices/filter'
import { CategoryId } from '../types'

const Categories = () => {
  const { categories, category } = useSelector((state) => state.filter)
  const dispatch = useDispatch()
  const handleCategoryChange = (categoryId: CategoryId) => {
    dispatch(changeCategory(categoryId))
  }

  return (
    <div className="categories">
      <ul>
        {categories.map((current) => (
          <li
            key={current._id}
            className={current._id === category ? 'active' : ''}
            onClick={() => handleCategoryChange(current._id)}
          >
            {current.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories
