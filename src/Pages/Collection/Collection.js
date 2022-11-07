import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { baseUrlImage } from '../../Api';
import ApiFetch from '../../Components/ApiFetch';

const Collection = () => {

  const { id } = useParams();

  const { data, loading, error } = ApiFetch({ type: 'collection/', id });

  if (loading) return <p className='loading'></p>;
  if (error) return <p>{error}</p>;
  if (data)
    return (
      <section >
        <div className='container-single'>
          <div>
            <img src={`${baseUrlImage}${data.poster_path}`} alt={data.name} />
          </div>
          <div>
            <h3>{data.name}</h3>
            <p>Overview: {data.overview}</p>
          </div>
        </div>

        {data.parts.map((part) => (
          <div key={part.id} className='container-single'>
            <div>
              <img src={`${baseUrlImage}${part.poster_path}`} alt={part.title} />
            </div>
            <div>
              {part.title && <h3>Title: {part.title}</h3>}
              {part.overview && <p>Overview: {part.overview}</p>}
              {part.release_date && <p>Year: {part.release_date}</p>}
              <Link to={`/movie/${part.id}`}>View more</Link>
            </div>
          </div>
        ))}
      </section>
    )
}

export default Collection;