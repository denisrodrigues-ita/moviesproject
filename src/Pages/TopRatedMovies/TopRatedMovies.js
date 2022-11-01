import React from 'react';
import { apiKey, baseUrlImage, baseUrl } from '../../Api';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Pagination from '../../Components/Pagination';

const TopRatedMovies = () => {

  const [movies, setMovies] = React.useState(null);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [lastPage, setLastPage] = React.useState(null);

  React.useEffect(() => {
    try {
      const fetchMovies = async () => {
        const response = await fetch(`${baseUrl}/movie/top_rated${apiKey}&page=${currentPage}`);
        const json = await response.json();
        setMovies(json);
        json.total_pages > 500 ? setLastPage(500) : setLastPage(json.total_pages);
      }
      fetchMovies();
    } catch (error) {
      error.message = 'Something went wrong';
    }
  }, [currentPage]);

  const pageNavigation = (p) => {
    setCurrentPage(p);
  }

  if (movies)
    return (
      <section>
        <Pagination
          lastPage={lastPage}
          pageNavigation={pageNavigation}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage} />
        <div className='container'>
          {movies.results.map(movie => (
            <div key={movie.id}>
              <img src={baseUrlImage + movie.poster_path} alt={movie.title} />
              <p>{movie.title}</p>
              <p>Year: {movie.release_date}</p>
              <p><AiFillStar /> {movie.vote_average}</p>
              <Link to={`/movie/${movie.id}`}>View Details</Link>
            </div>
          ))}
        </div>
      </section>
    )
}

export default TopRatedMovies