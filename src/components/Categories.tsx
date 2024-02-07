import { changeCategory, selectFilter } from '../redux/slices/filter'
import { CategoryId } from '../types'
import { useAppDispatch, useAppSelector } from '../redux/store'
import React, { useCallback } from 'react'

const Categories = () => {
  const { categories, category } = useAppSelector(selectFilter)
  const dispatch = useAppDispatch()
  const handleCategoryChange = useCallback((categoryId: CategoryId) => {
    dispatch(changeCategory(categoryId))
  }, [])

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

export default React.memo(Categories)
