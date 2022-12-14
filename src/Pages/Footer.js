import React from 'react';
import styles from './Footer.module.css';

const date = new Date();

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>CopyrightÂ© {date.getFullYear()} all rights reserved</p>
    </footer>
  )
}

export default Footer