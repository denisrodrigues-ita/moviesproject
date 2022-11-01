import React from 'react';
import { apiKey, baseUrlImage, baseUrl } from '../../Api';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Pagination from '../../Components/Pagination';

const TopRatedSeries = () => {

  const [series, setSeries] = React.useState(null);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [lastPage, setLastPage] = React.useState(null);

  React.useEffect(() => {
    try {
      const fetchSeries = async () => {
        const response = await fetch(`${baseUrl}/tv/top_rated${apiKey}&page=${currentPage}`);
        const json = await response.json();
        setSeries(json);
        json.total_pages > 500 ? setLastPage(500) : setLastPage(json.total_pages);
      }
      fetchSeries();
    } catch (error) {
      error.message = 'Something went wrong';
    }
  }, [currentPage, series]);

  const pageNavigation = (p) => {
    setCurrentPage(p);
  }

  if (series)
    return (
      <section>
        <Pagination
          lastPage={lastPage}
          pageNavigation={pageNavigation}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage} />
        <div className='container'>
          {series.results.map(serie => (
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