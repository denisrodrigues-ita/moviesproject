import React from 'react';
import { useParams } from 'react-router-dom';
import { baseUrl, apiKey, baseUrlImage } from '../../Api';
import { Link } from 'react-router-dom';

const Movie = () => {

  const [movie, setMovie] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(`${baseUrl}/movie/${id}${apiKey}`);
      const json = await response.json();
      setMovie(json);
    }
    fetchMovie();
  }, [id]);

  if (movie)
    return (
      <section className='container-single'>
        <div>
          <img src={baseUrlImage + movie.poster_path} alt={movie.title} />
        </div>
        <div>
          <h3>Title: {movie.title}</h3>
          <p>Year: {movie.release_date}</p>
          <p>Runtime: {movie.runtime}</p>
          <p>Average: {movie.vote_average}</p>
          <p>Overview: {movie.overview}</p>
          {movie.belongs_to_collection && <Link to={`/collection/${movie.belongs_to_collection.id}`}>View collection</Link>}
        </div>
      </section>
    )
}

export default Movie;