import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { apiKey, baseUrlImage, baseUrl } from '../../Api';
import imageNoAvailable from '../../img/No_Image_Available.jpg';
import styles from './Episode.module.css';

const Episode = () => {

  const [episode, setEpisode] = React.useState(null);
  const { id, se, nu } = useParams();

  React.useEffect(() => {
    const fetchEpisode = async () => {
      const response = await fetch(`${baseUrl}/tv/${id}/season/${se}/episode/${nu}${apiKey}`);
      const json = await response.json();
      setEpisode(json);
    }
    fetchEpisode();
  }, [id, se, nu]);

  console.log(episode)

  if (episode)
    return (
      <section>
        <div className='container-single'>
          <div>
            <img src={`${baseUrlImage}${episode.still_path}`} alt={episode.name} />
          </div>
          <div>
            <h3>{episode.name}</h3>
            <p>Episode: {episode.episode_number}</p>
            <p>Date: {episode.air_date}</p>
            <p>Runtime: {episode.runtime}</p>
            <p>Overview: {episode.overview}</p>
          </div>
        </div>

        <div className={styles.flexCard}>
          <h2>Guest stars</h2>
          {episode.guest_stars.map((guest) => (
            <div key={guest.id}>
              <div>
                {guest.profile_path === null ? <img src={imageNoAvailable} alt={guest.name} /> : <img src={`${baseUrlImage}${guest.profile_path}`} alt={guest.name} />}
              </div>
              <div>
                <p>Name: {guest.name}</p>
                <p>Character: {guest.character}</p>
                <Link to={`/person/${guest.id}`}>More info</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
}

export default Episode