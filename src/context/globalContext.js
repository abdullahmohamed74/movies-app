import axios from 'axios';
import { createContext, useCallback, useEffect, useState } from 'react';
import { url } from '../utils';

const GlobalContext = createContext();

function GlobalProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('batman');
  const [page, setPage] = useState(1);

  const fetchMovies = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`${url}&s=${searchTerm}&page=${page}`);
      if (data.Response === 'True') {
        setMovies(data.Search);
        setError(null);
      } else {
        setError(data.Error);
      }
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }, [searchTerm, page]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const handleSearchInput = (e) => {
    setPage(1);
    setSearchTerm(e.target.value);
  };

  return (
    <GlobalContext.Provider
      value={{
        isLoading,
        movies,
        error,
        searchTerm,
        page,
        handleSearchInput,
        setPage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalProvider };
export default GlobalContext;
