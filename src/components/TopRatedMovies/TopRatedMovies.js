import React from 'react';
import { apiKey, baseUrlImage, baseUrl } from '../../Api';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const TopRatedMovies = () => {

  const [movies, setMovies] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    try {
      setLoading(true);
      const fetchMovies = async () => {
        const response = await fetch(`${baseUrl}/movie/top_rated${apiKey}`);
        const json = await response.json();
        setMovies(json.results);
      }
      fetchMovies();
    } catch (error) {
      error.message = 'Something went wrong';
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <section>
      <div className='container'>
        {movies.map(movie => (
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