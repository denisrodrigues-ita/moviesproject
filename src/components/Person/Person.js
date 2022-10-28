import React from 'react';
import { useParams, Link } from 'react-router-dom';
import NoImageAvailable from '../../img/No_Image_Available.jpg';
import { apiKey, baseUrlImage, baseUrl } from '../../Api';

const Person = () => {
  const { id } = useParams();
  const [person, setPerson] = React.useState(null);
  const [participation, setParticipation] = React.useState(null);

  React.useEffect(() => {
    const fetchPerson = async () => {
      const response = await fetch(`${baseUrl}/person/${id}${apiKey}`);
      const json = await response.json();
      setPerson(json);
    }
    fetchPerson();
  }, [id]);

  React.useEffect(() => {
    const fetchParticipation = async () => {
      const response = await fetch(`${baseUrl}/person/${id}/tv_credits${apiKey}`);
      const json = await response.json();
      setParticipation(json);
    }
    fetchParticipation();
  }, [id]);

  console.log(person);
  console.log(participation);

  if (person)
    return (
      <section>
        <div className='container-single'>
          <div>
            {person.profile_path === null ? <img src={NoImageAvailable} alt={person.name} /> : <img src={`${baseUrlImage}${person.profile_path}`} alt={person.name} />}
          </div>
          <div>
            {person.name && <h3>{person.name}</h3>}
            {person.place_of_birth && <p>Place of birth: {person.place_of_birth}</p>}
            {person.birthday && <p>Birthday: {person.birthday}</p>}
            {person.deathday && <p>Deathday: {person.deathday}</p>}
            {person.biography && <p>Biography: {person.biography}</p>}
          </div>
        </div>

        <h2 style={{margin: '1rem'}}>Participations</h2>
        {participation && participation.cast.map((part) => (
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