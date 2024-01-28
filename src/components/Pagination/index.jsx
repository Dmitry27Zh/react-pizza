import ReactPaginate from 'react-paginate'
import styles from './Pagination.module.scss'

const Pagination = ({ current, onChange, count }) => {
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
      forcePage={current}
    />
  )
}

export default Pagination
