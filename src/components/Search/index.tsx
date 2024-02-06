import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Search.module.scss'
import debounce from 'lodash.debounce'
import { changeSearch, selectFilter } from '../../redux/slices/filter'

const Search = () => {
  const { search } = useSelector(selectFilter)
  const dispatch = useDispatch()
  const [current, setCurrent] = useState(search)
  const handleChange = useCallback(
    debounce((change) => {
      dispatch(changeSearch(change))
    }, 1000),
    []
  )
  return (
    <div className={styles.root}>
      <input
        className={styles.input}
        type="search"
        placeholder="Поиск пиццы..."
        value={current}
        onChange={(e) => {
          setCurrent(e.target.value)
          handleChange(e.target.value)
        }}
      />
      <svg
        className={styles.icon}
        fill="none"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" x2="16.65" y1="21" y2="16.65" />
      </svg>
    </div>
  )
}

export default Search
