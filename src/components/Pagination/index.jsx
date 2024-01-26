import ReactPaginate from 'react-paginate'

const Pagination = () => {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={(e) => console.log(e)}
      pageRangeDisplayed={5}
      pageCount={5}
      previousLabel="< previous"
      renderOnZeroPageCount={null}
    />
  )
}

export default Pagination
