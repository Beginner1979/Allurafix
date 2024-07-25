import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: '#000', color: '#fff' }}>
      <h1>Allurafix</h1>
      <nav>
        <Link to="/" style={{ marginRight: '10px', color: '#fff', textDecoration: 'none' }}>HOME</Link>
        <Link to="/new-video" style={{ color: '#fff', textDecoration: 'none' }}>NUEVO VIDEO</Link>
      </nav>
    </header>
  );
};

export default Header;
