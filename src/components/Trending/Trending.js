import React from 'react';
import { Link } from 'react-router-dom';
import { baseUrlTrending, apiKey, baseUrlImage } from '../../Api';
import {AiFillStar} from 'react-icons/ai';

const Trending = () => {

  const [loading, setLoading] = React.useState(false);
  const [trendings, setTrendings] = React.useState([]);

  React.useEffect(() => {
    try {
      setLoading(true);
      const fetchTrendings = async () => {
        const response = await fetch(`${baseUrlTrending}${apiKey}`);
        const json = await response.json();
        setTrendings(json.results);
      }
      fetchTrendings();
    } catch (error) {
      error.message();
    } finally {
      setLoading(false);
    }
  }, [])

  if (loading) <p>Loading...</p>
  if (trendings)
  return (
    <section>
      <div className='container'>
        {trendings.map(trending => (
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