import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { url } from '../utils';
import { Loading } from '../components';

function SingleMovie() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  const fetchSingleMovie = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`${url}&i=${movieId}`);
      if (data.Response === 'True') {
        setMovie(data);
        setError(null);
      } else {
        setError(data.Error);
      }
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }, [movieId]);

  useEffect(() => {
    fetchSingleMovie();
  }, [fetchSingleMovie]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="page-error">
        <h2>{error}</h2>
        <Link to="/" className="btn">
          back to movies
        </Link>
      </div>
    );
  }

  const { Title: title, Year: year, Poster: poster, Plot: description } = movie;

  return (
    <section className="single-movie">
      <img src={poster} alt={title} />
      <div className="single-movie-info">
        <h2>{title}</h2>
        <p>{description}</p>
        <h4>{year}</h4>
        <Link to="/" className="btn">
          back to movies
        </Link>
      </div>
    </section>
  );
}
export default SingleMovie;
