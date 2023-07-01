import useGlobalContext from '../hooks/useGlobalContext';

function Pagination() {
  const { page, setPage } = useGlobalContext();

  // show only 10 pages (only for test)
  const pageNumbers = Array.from({ length: 10 }, (_, index) => index + 1);

  const nextPage = () => {
    const nextPage = page + 1 > 10 ? 1 : page + 1;
    setPage(nextPage);
  };

  const prevPage = () => {
    const prevPage = page - 1 === 0 ? 10 : page - 1;
    setPage(prevPage);
  };

  const changePage = (pageNum) => {
    setPage(pageNum);
  };

  return (
    <div className="btn-container">
      <button className="prev-btn" onClick={prevPage}>
        prev
      </button>
      {pageNumbers.map((pageNum) => {
        return (
          <button
            key={pageNum}
            onClick={() => changePage(pageNum)}
            className={pageNum === page ? 'page-btn active-btn' : 'page-btn'}
          >
            {pageNum}
          </button>
        );
      })}
      <button className="next-btn" onClick={nextPage}>
        next
      </button>
    </div>
  );
}
export default Pagination;
