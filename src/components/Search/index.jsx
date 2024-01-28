import styles from './Search.module.scss'
import debounce from 'lodash.debounce'

const test = debounce(() => console.log('Hi'), 1000)

const Search = ({ value, onInput }) => {
  const handleChange = (e) => {
    onInput(e.target.value)
    test()
  }
  return (
    <div className={styles.root}>
      <input
        className={styles.input}
        type="search"
        placeholder="Поиск пиццы..."
        value={value}
        onChange={handleChange}
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
