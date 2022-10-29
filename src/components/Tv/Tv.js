import React from 'react';
import { useParams } from 'react-router-dom';
import { baseUrl, apiKey, baseUrlImage } from '../../Api';
import { Link } from 'react-router-dom';
import NoImageAvailable from '../../img/No_Image_Available.jpg';

const Tv = () => {

  const [serie, setSerie] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    const fetchSerie = async () => {
      const response = await fetch(`${baseUrl}/tv/${id}${apiKey}`);
      const json = await response.json();
      setSerie(json);
    }
    fetchSerie();
  }, [id]);

  console.log(serie);

  if (serie)
    return (
      <section>
        <div className='container-single'>
          <div>
            <img src={baseUrlImage + serie.poster_path} alt={serie.title} />
          </div>
          <div>
            <h3>Title: {serie.name}</h3>
            <p>First air date: {serie.first_air_date}</p>
            <p>Last air date: {serie.last_air_date}</p>
            <p>Number of episodes: {serie.number_of_episodes}</p>
            <p>Number of seasons: {serie.number_of_seasons}</p>
            <p>Status: {serie.status}</p>
            <p>Average: {serie.vote_average}</p>
            <p>Overview: {serie.overview}</p>
          </div>
        </div>

        {serie.seasons && serie.seasons.map(season => (
          <div key={season.id} className='container-single'>
            <div>
              {season.poster_path === null ? <img src={NoImageAvailable} alt={season.name} width='300'/> : <img src={baseUrlImage + season.poster_path} alt={season.name} />}
            </div>
            <div>
              {season.name && <h3>{season.name}</h3>}
              {season.air_date && <p>Air date: {season.air_date}</p>}
              {season.episode_count && <p>Episodes: {season.episode_count}</p>}
              {season.overview && <p>{season.overview && `overview: ${season.overview}`}</p>}
              {season.season_number && <p>Season number: {season.season_number}</p>}
              <Link to={`/tv/${serie.id}/season/${season.season_number}`}>View season</Link>
            </div>
          </div>
        ))}
      </section>
    );
}

export default Tv;