import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import VideoCard from '../components/VideoCard';

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/videos')
      .then(response => response.json())
      .then(data => setVideos(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/videos/${id}`, { method: 'DELETE' })
      .then(() => setVideos(videos.filter(video => video.id !== id)));
  };

  const handleEdit = (video) => {
    // Lógica para editar video
  };

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh' }}>
      <Header />
      <Banner />
      <Categories />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {videos.map(video => (
          <VideoCard key={video.id} video={video} onDelete={handleDelete} onEdit={handleEdit} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
