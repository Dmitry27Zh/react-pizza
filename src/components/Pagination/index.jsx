import ReactPaginate from 'react-paginate'
import styles from './Pagination.module.scss'

const Pagination = ({ initial, onChange }) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => onChange(e.selected)}
      pageRangeDisplayed={5}
      pageCount={5}
      previousLabel="<"
      renderOnZeroPageCount={null}
      initialPage={initial}
    />
  )
}

export default Pagination
