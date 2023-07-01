import { Link } from 'react-router-dom';
import useGlobalContext from './../hooks/useGlobalContext';
import Loading from './Loading';
import Pagination from './Pagination';
const defaultImage =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

function MoviesList() {
  const { isLoading, movies } = useGlobalContext();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="section">
      <div className="movies">
        {movies.map((movie) => {
          const {
            imdbID: id,
            Title: title,
            Year: year,
            Poster: poster,
          } = movie;
          return (
            <Link to={`/movies/${id}`} key={id} className="movie">
              <img src={poster === 'N/A' ? defaultImage : poster} alt={title} />
              <div className="movie-info">
                <h4>{title}</h4>
                <p>{year}</p>
              </div>
            </Link>
          );
        })}
      </div>
      <Pagination />
    </section>
  );
}
export default MoviesList;
