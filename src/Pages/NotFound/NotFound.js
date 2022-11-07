import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', paddingTop: '5rem' }}>
      <h1>Page Not Found</h1>
      <h2>Come back to <Link to='/'>Home</Link></h2>
    </div>
  );
}

export default NotFound;