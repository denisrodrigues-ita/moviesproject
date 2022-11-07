import React from 'react';
import { baseUrlImage } from '../../Api';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Pagination from '../../Components/Pagination';
import ApiFetch from '../../Components/ApiFetch';

const TopRatedMovies = () => {

  const [currentPage, setCurrentPage] = React.useState(1);

  const {data, loading, error, lastPage} = ApiFetch({currentPage, type: '/movie/top_rated'});

  const pageNavigation = (p) => {
    setCurrentPage(p);
  }

  console.log(loading)
  if (loading) return <p className='loading'></p>
  if (error) return <p>{error}</p>
  if (data)
    return (
      <section>
        <Pagination
          lastPage={lastPage}
          pageNavigation={pageNavigation}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage} />
        <div className='container'>
          {data.results.map(movie => (
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

export default TopRatedMovies;