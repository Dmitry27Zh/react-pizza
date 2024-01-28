import ReactPaginate from 'react-paginate'
import styles from './Pagination.module.scss'

const Pagination = () => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => console.log(e)}
      pageRangeDisplayed={5}
      pageCount={5}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  )
}

export default Pagination
