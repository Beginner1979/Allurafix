import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Modal from '../components/Modal';

const NewVideo = () => {
  const [showModal, setShowModal] = useState(true);

  const handleSave = (video) => {
    fetch('http://localhost:3000/videos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(video)
    }).then(() => setShowModal(false));
  };

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh' }}>
      <Header />
      <main style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Nuevo Video</h1>
        <p>Complete el formulario para crear una nueva tarjeta de video</p>
        <button onClick={() => setShowModal(true)}>Crear tarjeta</button>
        {showModal && <Modal onClose={() => setShowModal(false)} onSave={handleSave} />}
      </main>
      <Footer />
    </div>
  );
};

export default NewVideo;
