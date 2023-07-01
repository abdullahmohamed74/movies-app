import useGlobalContext from '../hooks/useGlobalContext';

function SearchForm() {
  const { error, searchTerm, handleSearchInput } = useGlobalContext();

  return (
    <form onSubmit={(e) => e.preventDefault()} className="search-form">
      <h2>search movies</h2>
      <input
        type="text"
        className="form-input"
        value={searchTerm}
        onChange={handleSearchInput}
      />
      {error && <div className="error">{error}</div>}
    </form>
  );
}
export default SearchForm;
