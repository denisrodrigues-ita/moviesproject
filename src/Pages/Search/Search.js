import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { baseUrlImage } from '../../Api';
import { AiFillStar } from 'react-icons/ai';
import Pagination from '../../Components/Pagination';
import ApiFetch from '../../Components/ApiFetch';

const Search = () => {

  const [currentPage, setCurrentPage] = React.useState(1);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');

  const { data, loading, error, lastPage } = ApiFetch({ currentPage, type: '/search/multi', query });

  const pageNavigation = (p) => {
    setCurrentPage(p);
  }

  if (loading) return <p className='loading'></p>;
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
          {data.results.map(item => (
            <div key={item.id}>
              <img src={baseUrlImage + item.poster_path} alt={item.title} />
              <p>Title: {item.title ? item.title : item.name}</p>
              <p>Date: {item.release_date ? item.release_date : item.first_air_date}</p>
              <p><AiFillStar /> {item.vote_average}</p>
              <Link to={`/${item.media_type}/${item.id}`}>View Details</Link>
            </div>
          ))}
        </div>
      </section>
    )
}

export default Search;