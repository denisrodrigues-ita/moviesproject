import React from 'react';
import { Link } from 'react-router-dom';
import { baseUrlTrending, apiKey, baseUrlImage } from '../../Api';
import { AiFillStar } from 'react-icons/ai';
import Pagination from '../../Components/Pagination';

const Trending = () => {

  const [currentPage, setCurrentPage] = React.useState(1);
  const [lastPage, setLastPage] = React.useState(null);
  const [trendings, setTrendings] = React.useState(null);

  React.useEffect(() => {
    try {
      const fetchTrendings = async () => {
        const response = await fetch(`${baseUrlTrending}${apiKey}&page=${currentPage}`);
        const json = await response.json();
        setTrendings(json);
        json.total_pages > 500 ? setLastPage(500) : setLastPage(json.total_pages);
      }
      fetchTrendings();
    } catch (error) {
      error.message();
    }
  }, [currentPage])

  const pageNavigation = (p) => {
    setCurrentPage(p);
  }

  if (trendings)
    return (
      <section>
        <Pagination
          lastPage={lastPage}
          pageNavigation={pageNavigation}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage} />
        <div className='container'>
          {trendings.results.map(trending => (
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