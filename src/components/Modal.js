import React, { useState } from 'react';

const Modal = ({ onClose, onSave }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [description, setDescription] = useState('');

  const handleSave = () => {
    const video = { title, category, image, videoUrl, description };
    onSave(video);
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ backgroundColor: '#fff', padding: '20px', width: '300px', borderRadius: '8px' }}>
        <h2>Nuevo Video</h2>
        <label>Título</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <label>Categoría</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Frontend">FRONT-END</option>
          <option value="Backend">BACK-END</option>
          <option value="Innovación y Gestión">INNOVACIÓN Y GESTIÓN</option>
        </select>
        <label>Imagen</label>
        <input value={image} onChange={(e) => setImage(e.target.value)} />
        <label>Video</label>
        <input value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} />
        <label>Descripción</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        <button onClick={handleSave}>Guardar</button>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default Modal;
