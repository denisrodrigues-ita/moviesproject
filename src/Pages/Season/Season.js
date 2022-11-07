import React from 'react';
import { Link, useParams } from 'react-router-dom';
import imageNoAvailable from '../../img/No_Image_Available.jpg';
import { baseUrlImage } from '../../Api';
import ApiFetch from '../../Components/ApiFetch';

const Season = () => {

  const { id, se } = useParams();

  const { data, loading, error } = ApiFetch({ type: '/tv/', id, se });

  if (loading) return <p className='loading'></p>;
  if (error) return <p>{error}</p>
  if (data)
    return (
      <section>
        <div className='container-single'>
          <div>
            <img src={baseUrlImage + data.poster_path} alt={data.name} />
          </div>
          <div>
            <h3>Title: {data.name}</h3>
            <p>Season: {data.season_number}</p>
            <p>Overview: {data.overview}</p>
          </div>
        </div>

        {data.episodes && data.episodes.map(ep => (
          <div key={ep.id} className='container-single'>
            <div>
              {ep.still_path === null ? <img src={imageNoAvailable} alt={ep.name} width='300' height='200' /> : <img src={baseUrlImage + ep.still_path} alt={ep.name} />}
            </div>
            <div>
              <h3>{ep.name}</h3>
              <p>Air date: {ep.air_date}</p>
              <p>Runtime: {ep.runtime}</p>
              <p>Episode number: {ep.episode_number}</p>
              <p>Overview: {ep.overview}</p>
              <Link to={`episode/${ep.episode_number}`}>View Episode</Link>
            </div>
          </div>
        ))}
      </section>
    );
}

export default Season;