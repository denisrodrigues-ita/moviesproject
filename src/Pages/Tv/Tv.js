import React from 'react';
import { useParams } from 'react-router-dom';
import { baseUrlImage } from '../../Api';
import { Link } from 'react-router-dom';
import ApiFetch from '../../Components/ApiFetch';
import NoImageAvailable from '../../img/No_Image_Available.jpg';

const Tv = () => {

  const { id } = useParams();

  const { data, loading, error } = ApiFetch({ id, type: 'tv/' });

  if (loading) return <p className='loading'></p>;
  if (error) return <p>error</p>;
  if (data)
    return (
      <section>
        <div className='container-single'>
          <div>
            <img src={baseUrlImage + data.poster_path} alt={data.title} />
          </div>
          <div>
            {data.name && <h3>Title: {data.name}</h3>}
            {data.first_air_date && <p>First air date: {data.first_air_date}</p>}
            {data.last_air_date && <p>Last air date: {data.last_air_date}</p>}
            {data.number_of_episodes && <p>Number of episodes: {data.number_of_episodes}</p>}
            {data.number_of_seasons && <p>Number of seasons: {data.number_of_seasons}</p>}
            {data.status && <p>Status: {data.status}</p>}
            {data.vote_average && <p>Average: {data.vote_average}</p>}
            {data.overview && <p>Overview: {data.overview}</p>}
          </div>
        </div>

        {data.seasons && data.seasons.map(season => (
          <div key={season.id} className='container-single'>
            <div>
              {season.poster_path === null ? <img src={NoImageAvailable} alt={season.name} width='300' /> : <img src={baseUrlImage + season.poster_path} alt={season.name} />}
            </div>
            <div>
              {season.name && <h3>{season.name}</h3>}
              {season.air_date && <p>Air date: {season.air_date}</p>}
              {season.episode_count && <p>Episodes: {season.episode_count}</p>}
              {season.overview && <p>{season.overview && `overview: ${season.overview}`}</p>}
              {season.season_number != null && <p>Season number: {season.season_number}</p>}
              <Link to={`/tv/${data.id}/season/${season.season_number}`}>View season</Link>
            </div>
          </div>
        ))}
      </section>
    );
}

export default Tv;