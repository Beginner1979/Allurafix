import React from 'react';

const categories = [
  { name: 'Frontend', color: '#00aaff' },
  { name: 'Backend', color: '#00ff00' },
  { name: 'Innovación y Gestión', color: '#ffff00' },
];

const Categories = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      {categories.map(category => (
        <div key={category.name} style={{ backgroundColor: category.color, padding: '10px', margin: '5px 0', color: '#fff' }}>
          {category.name}
        </div>
      ))}
    </div>
  );
};

export default Categories;
