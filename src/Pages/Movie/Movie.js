import React from 'react';
import { useParams } from 'react-router-dom';
import { baseUrlImage } from '../../Api';
import { Link } from 'react-router-dom';
import ApiFetch from '../../Components/ApiFetch';

const Movie = () => {

  const { id } = useParams();

  const { data, loading, error } = ApiFetch({ type: '/movie/', id });

  if (loading) return <p className='loading'></p>;
  if (error) return <p>{error}</p>
  if (data)
    return (
      <section className='container-single'>
        <div>
          <img src={baseUrlImage + data.poster_path} alt={data.title} />
        </div>
        <div>
          {data.title && <h3>Title: {data.title}</h3>}
          {data.release_date && <p>Year: {data.release_date}</p>}
          {data.runtime && <p>Runtime: {data.runtime}</p>}
          {data.vote_average && <p>Average: {data.vote_average}</p>}
          {data.overview && <p>Overview: {data.overview}</p>}
          {data.belongs_to_collection && <Link to={`/collection/${data.belongs_to_collection.id}`}>View collection</Link>}
        </div>
      </section>
    )
}

export default Movie;