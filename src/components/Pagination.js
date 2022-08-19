import "./Pagination.css";

const Pagination = ({ paginate, lastIndex, currentPage }) => {
  const pageNumber = [];
  for (let i = 1; i <= lastIndex; i++) {
    pageNumber.push(i);
  }
  const onClickHandler = (pageNo) => {
    paginate(pageNo);
  };

  return (
    <div className="pagination-cont">
      {pageNumber.map((pageNo) => {
        return (
          <button
            key={pageNo}
            className={
              currentPage === pageNo ? "active not_active" : "not_active"
            }
            onClick={() => onClickHandler(pageNo)}
          >
            {pageNo}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
