import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { baseUrlCollection, apiKey, baseUrlImage } from '../../Api';
import styles from './Collection.module.css';

const Collection = () => {

  const [collection, setCollection] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    const fetchCollection = async () => {
      const response = await fetch(`${baseUrlCollection}${id}${apiKey}`);
      const json = await response.json();
      setCollection(json);
    }
    fetchCollection();
  }, [id]);

  if (collection)
    return (
      <section className={styles.collection}>
        <div>
          <div>
            <img src={`${baseUrlImage}${collection.poster_path}`} alt={collection.name} />
          </div>
          <div>
            <h3>{collection.name}</h3>
            <p>Overview: {collection.overview}</p>
          </div>
        </div>

        {collection.parts.map((part) => (
          <div key={part.id} className={styles.card}>
            <div>
              <img src={`${baseUrlImage}${part.poster_path}`} alt={part.title} />
            </div>
            <div>
              {part.title && <h3>Title: {part.title}</h3>}
              {part.overview &&<p>Overview: {part.overview}</p>}
              {part.release_date &&<p>Year: {part.release_date}</p>}
              <Link to={`/movie/${part.id}`}>View more</Link>
            </div>
          </div>
        ))}
      </section>
    )
}

export default Collection;