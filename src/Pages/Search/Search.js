import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { apiKey, baseUrl, baseUrlImage } from '../../Api';
import { AiFillStar } from 'react-icons/ai';
import Pagination from '../../Components/Pagination';

const Search = () => {

  const [search, setSearch] = React.useState(null);
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = React.useState(1);
  const [lastPage, setLastPage] = React.useState(null);
  const query = searchParams.get('q');

  React.useEffect(() => {
    const fetchSearch = async () => {
      const response = await fetch(`${baseUrl}/search/multi${apiKey}&query=${query}&page=${currentPage}`);
      const json = await response.json();
      setSearch(json);
      json.total_pages > 500 ? setLastPage(500) : setLastPage(json.total_pages);
    }
    fetchSearch();
  }, [query, search, lastPage, currentPage]);

  const pageNavigation = (p) => {
    setCurrentPage(p);
  }

  if (search)
    return (
      <section>
        <Pagination
          lastPage={lastPage}
          pageNavigation={pageNavigation}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage} />
        <div className='container'>
          {search.results.map(item => (
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