import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BiCameraMovie } from 'react-icons/bi';
import styles from './Header.module.css';

const Header = () => {
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
          <li><NavLink to='/top-rated'>Top Rated</NavLink></li>
          <li><NavLink to='/trending'>Trending</NavLink></li>
          <li><NavLink to='/discover'>Discover</NavLink></li>
          <li><NavLink to='/genres'>Genres</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;