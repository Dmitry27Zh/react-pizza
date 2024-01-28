import ReactPaginate from 'react-paginate'
import styles from './Pagination.module.scss'

const Pagination = ({ initial, onChange, count }) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => onChange(e.selected)}
      pageRangeDisplayed={count}
      pageCount={count}
      previousLabel="<"
      renderOnZeroPageCount={null}
      initialPage={initial}
    />
  )
}

export default Pagination
