import { useCallback, useEffect, useState } from 'react';
import { url } from '../utils';
import axios from 'axios';

function useFetch(urlParams) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`${url}${urlParams}`);
      if (data.Response === 'True') {
        setData(data.Search || data);
        setError(null);
      } else {
        setError(data.Error);
      }
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }, [urlParams]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { isLoading, data, error };
}
export default useFetch;
