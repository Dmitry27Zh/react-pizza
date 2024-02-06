import ReactPaginate from 'react-paginate'
import styles from './Pagination.module.scss'

type PaginationProps = {
  current: number
  onChange: (page: number) => void
  count: number
}

const Pagination = ({ current, onChange, count }: PaginationProps) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => onChange(e.selected + 1)}
      pageRangeDisplayed={count}
      pageCount={count}
      previousLabel="<"
      renderOnZeroPageCount={null}
      forcePage={current - 1}
    />
  )
}

export default Pagination
