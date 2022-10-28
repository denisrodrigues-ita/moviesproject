import React from 'react';
import { Link, useParams } from 'react-router-dom';
import imageNoAvailable from '../../img/No_Image_Available.jpg';
import { baseUrl, apiKey, baseUrlImage } from '../../Api';

const Season = () => {

  const [episode, setEpisode] = React.useState(null);
  const { id, se } = useParams();

  React.useEffect(() => {
    const fetchEpisode = async () => {
      const response = await fetch(`${baseUrl}/tv/${id}/season/${se}${apiKey}`);
      const json = await response.json();
      setEpisode(json);
    }
    fetchEpisode();
  }, [id, se]);

  if (episode)
    return (
      <section>
        <div className='container-single'>
          <div>
            <img src={baseUrlImage + episode.poster_path} alt={episode.name} />
          </div>
          <div>
            <h3>Title: {episode.name}</h3>
            <p>Season: {episode.season_number}</p>
            <p>Overview: {episode.overview}</p>
          </div>
        </div>

        {episode.episodes && episode.episodes.map(ep => (
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