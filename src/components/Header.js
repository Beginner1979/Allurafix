import React from 'react';

const Header = () => {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: '#000', color: '#fff' }}>
      <h1>Allurafix</h1>
      <nav>
        <button style={{ marginRight: '10px' }}>HOME</button>
        <button>NUEVO VIDEO</button>
      </nav>
    </header>
  );
};

export default Header;
