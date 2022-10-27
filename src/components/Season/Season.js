import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {baseUrl, apiKey, baseUrlImage} from '../../Api';
import styles from './Season.module.css';

const Season = () => {

  const [episode, setEpisode] = React.useState(null);
  const {id, se} = useParams();

React.useEffect(() => {
  const fetchEpisode = async () => {
    const response = await fetch(`${baseUrl}/tv/${id}/season/${se}${apiKey}`);
    const json = await response.json();
    setEpisode(json);
  }
  fetchEpisode();
}, [id, se]);

console.log(episode);

if (episode)
  return (
    <section>
      <div className='container-single'>  
        <div>
          <img src={baseUrlImage + episode.poster_path} alt={episode.name}/>
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
            <img src={baseUrlImage + ep.still_path} alt={ep.name} />
          </div>
          <div className={styles.cardSeries}>
            <h3>{ep.name}</h3>
            <p>Air date: {ep.air_date}</p>
            <p>Runtime: {ep.runtime}</p>
            <p>Episode number: {ep.episode_number}</p>
            <p>Overview: {ep.overview}</p>
            <Link to={`/serie/${id}`}>View Seasons</Link>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Season;