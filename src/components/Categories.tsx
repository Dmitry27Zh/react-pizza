import { changeCategory, selectFilter } from '../redux/slices/filter'
import { CategoryId } from '../types'
import { useAppDispatch, useAppSelector } from '../redux/store'

const Categories = () => {
  const { categories, category } = useAppSelector(selectFilter)
  const dispatch = useAppDispatch()
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
