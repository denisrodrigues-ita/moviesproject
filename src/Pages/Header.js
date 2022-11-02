import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { BiCameraMovie } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import styles from './Header.module.css';

const Header = () => {
  const [btnActive, setBtnActive] = React.useState(false);
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

  console.log(btnActive)

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
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
      <button onClick={() => setBtnActive(!btnActive)} className={styles.btnMenu}>Menu <GiHamburgerMenu /></button>
      <div className={styles.navigation}>
        <nav className={`${btnActive ? styles.btnMenuActive : styles.btnMenuDisabled}`}>
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
        </nav>
      </div>
    </header >
  );
}

export default Header;