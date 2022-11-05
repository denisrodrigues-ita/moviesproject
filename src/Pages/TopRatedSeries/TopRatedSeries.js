import React from 'react';
import { baseUrlImage } from '../../Api';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Pagination from '../../Components/Pagination';
import ApiFetch from '../../Components/ApiFetch';

const TopRatedSeries = () => {

  const [currentPage, setCurrentPage] = React.useState(1);

  const { data, loading, error, lastPage } = ApiFetch({ currentPage, type: 'tv/top_rated' });

  const pageNavigation = (p) => {
    setCurrentPage(p);
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error</p>;
  if (data)
    return (
      <section>
        <Pagination
          lastPage={lastPage}
          pageNavigation={pageNavigation}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage} />
        <div className='container'>
          {data.results.map(serie => (
            <div key={serie.id}>
              <img src={baseUrlImage + serie.poster_path} alt={serie.title} />
              <p>{serie.name}</p>
              <p>Release date: {serie.first_air_date}</p>
              <p><AiFillStar /> {serie.vote_average}</p>
              <Link to={`/tv/${serie.id}`}>View Details</Link>
            </div>
          ))}
        </div>
      </section>
    )
}

export default TopRatedSeries;