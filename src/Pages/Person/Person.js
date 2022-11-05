import React from 'react';
import { useParams, Link } from 'react-router-dom';
import NoImageAvailable from '../../img/No_Image_Available.jpg';
import { baseUrlImage } from '../../Api';
import ApiFetch from '../../Components/ApiFetch';

const Person = () => {
  const { id } = useParams();

  const person = ApiFetch({ type: '/person/', id });
  const participation = ApiFetch({ type: '/person/', id, type_credits: '/tv_credits' });

  if (person.loading) return <p>Loading...</p>
  if (person.error) return <p>{person.error}</p>
  if (person.data)
    return (
      <section>
        <div className='container-single'>
          <div>
            {person.data.profile_path === null ? <img src={NoImageAvailable} alt={person.data.name} /> : <img src={`${baseUrlImage}${person.data.profile_path}`} alt={person.data.name} />}
          </div>
          <div>
            {person.data.name && <h3>{person.data.name}</h3>}
            {person.data.place_of_birth && <p>Place of birth: {person.data.place_of_birth}</p>}
            {person.data.birthday && <p>Birthday: {person.data.birthday}</p>}
            {person.data.deathday && <p>Deathday: {person.data.deathday}</p>}
            {person.data.biography && <p>Biography: {person.data.biography}</p>}
          </div>
        </div>

        <h2 style={{ margin: '1rem' }}>Participations</h2>
        {participation.data && participation.data.cast.map((part) => (
          <div key={part.id} className='container-single'>
            <div>
              {part.poster_path === null ? <img src={NoImageAvailable} alt={part.name} width='300' /> : <img src={`${baseUrlImage}${part.poster_path}`} alt={part.name} />}
            </div>
            <div>
              {part.name && <h3>{part.name}</h3>}
              {part.first_air_date && <p>First air date: {part.first_air_date}</p>}
              {part.character && <p>Character: {part.character}</p>}
              {part.overview && <p>Overview: {part.overview}</p>}
              {part.id && <Link to={`/tv/${part.id}`}>More info</Link>}
            </div>
          </div>
        ))}
      </section>
    );
}

export default Person;