import { useDispatch, useSelector } from 'react-redux'
import { changeCategory } from '../redux/slices/filterSlice'

const Categories = ({ items, onChange }) => {
  const current = useSelector((state) => state.filter.category)
  const dispatch = useDispatch()

  return (
    <div className="categories">
      <ul>
        {items.map((item) => (
          <li
            key={item._id}
            className={item._id === current ? 'active' : ''}
            onClick={() => dispatch(changeCategory(item._id))}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories
