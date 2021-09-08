import React from 'react'

function Pagination(props) {
  const { pagination, onPageChange } = props;
  const { _limit, _page, _totalRows } = pagination;
  const totalPages = Math.ceil(_totalRows / _limit);

  function handlePageChange(newPage) {
    if (onPageChange) {
      onPageChange(newPage);
    }
    console.log(newPage);
  }

  return (
    <div>
      <button
        disabled={_page <= 1}
        onClick={() => handlePageChange(_page - 1)}>
        Prev
      </button>
      <span>{_page}</span>
      <button
        disabled={_page >= totalPages}
        onClick={() => handlePageChange(_page + 1)}>
        Next
      </button>
    </div>
  )
}

export default Pagination
