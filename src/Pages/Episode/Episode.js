import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { baseUrlImage } from '../../Api';
import imageNoAvailable from '../../img/No_Image_Available.jpg';
import ApiFetch from '../../Components/ApiFetch';
import styles from './Episode.module.css';

const Episode = () => {

  const { id, se, nu } = useParams();
  const { data, loading, error } = ApiFetch({ type: '/tv/', id, se, nu })

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>
  if (data)
    return (
      <section>
        <div className='container-single'>
          <div>
            <img src={`${baseUrlImage}${data.still_path}`} alt={data.name} />
          </div>
          <div>
            <h3>{data.name}</h3>
            <p>Episode: {data.episode_number}</p>
            <p>Date: {data.air_date}</p>
            <p>Runtime: {data.runtime}</p>
            <p>Overview: {data.overview}</p>
          </div>
        </div>

        <div className={styles.flexCard}>
          <h2>Guest stars</h2>
          {data.guest_stars.map((guest) => (
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