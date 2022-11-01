import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { BiCameraMovie } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';
import styles from './Header.module.css';

const Header = () => {
  const [search, setSearch] = React.useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSearch(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!search) return;
    navigate(`/search?q=${search}`);
    setSearch('');
  }

  return (
    <header className={styles.header}>
      <div>
        <Link to="/">
          <div>
            <BiCameraMovie />
          </div>
          <div>
            <h1>NetCine</h1>
            <h1>The Fun Place</h1>
          </div>
        </Link>
      </div>
      <nav>
        <ul>
          <li><NavLink to='/top-rated-movies'>Top Rated Movies</NavLink></li>
          <li><NavLink to='/top-rated-series'>Top Rated Series</NavLink></li>
          <li><NavLink to='/trending'>Trending</NavLink></li>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search"
              onChange={handleChange}
              value={search} />
            <button type="submit"><BsSearch /></button>
          </form>
        </ul>
      </nav >
    </header >
  );
}

export default Header;