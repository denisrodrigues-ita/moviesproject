import React from 'react';
import { Link } from 'react-router-dom';
import { baseUrlImage } from '../../Api';
import { AiFillStar } from 'react-icons/ai';
import ApiFetch from '../../Components/ApiFetch';
import Pagination from '../../Components/Pagination';

const Trending = () => {

  const [currentPage, setCurrentPage] = React.useState(1);
 
  const { data, loading, error, lastPage } = ApiFetch({ currentPage, type: 'trending/all/day' });

  const pageNavigation = (p) => {
    setCurrentPage(p);
  }

  if (loading) return <p className='loading'></p>;
  if (error) return <p>{error}</p>;
  if (data)
    return (
      <section>
        <Pagination
          lastPage={lastPage}
          pageNavigation={pageNavigation}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage} />
        <div className='container'>
          {data.results.map(trending => (
            <div key={trending.id}>
              <img src={baseUrlImage + trending.poster_path} alt={trending.title} />
              <p>Title: {trending.title ? trending.title : trending.name}</p>
              <p>Date: {trending.release_date ? trending.release_date : trending.first_air_date}</p>
              <p><AiFillStar /> {trending.vote_average}</p>
              <Link to={`/${trending.media_type}/${trending.id}`}>View Details</Link>
            </div>
          ))}
        </div>
      </section>
    )
}

export default Trending