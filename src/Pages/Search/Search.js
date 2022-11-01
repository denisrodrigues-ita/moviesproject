import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { apiKey, baseUrl, baseUrlImage } from '../../Api';
import { AiFillStar } from 'react-icons/ai';

const Search = () => {

  const [search, setSearch] = React.useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');

  React.useEffect(() => {
    const fetchSearch = async () => {
      const response = await fetch(`${baseUrl}/search/multi${apiKey}&query=${query}`);
      const json = await response.json();
      setSearch(json.results);
    }
    fetchSearch();
  }, [query, search]);
    
    if (search)
    return (
      <section>
        <div className='container'>
          {search.map(item => (
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