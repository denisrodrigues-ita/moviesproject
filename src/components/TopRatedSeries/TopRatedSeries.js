import React from 'react';
import { apiKey, baseUrlImage, baseUrl } from '../../Api';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const TopRatedSeries = () => {
  
  const [series, setSeries] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    try {
      setLoading(true);
      const fetchSeries = async () => {
        const response = await fetch(`${baseUrl}/tv/top_rated${apiKey}`);
        const json = await response.json();
        setSeries(json.results);
      }
      fetchSeries();
    } catch (error) {
      error.message = 'Something went wrong';
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <section>
      <div className='container'>
        {series.map(serie => (
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