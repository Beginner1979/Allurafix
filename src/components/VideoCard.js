import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const VideoCard = ({ video, onDelete, onEdit }) => {
  return (
    <div style={{ border: '1px solid #fff', padding: '10px', margin: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img src={video.image} alt={video.title} style={{ width: '100%' }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '10px' }}>
        <FaTrash onClick={() => onDelete(video.id)} style={{ cursor: 'pointer' }} />
        <FaEdit onClick={() => onEdit(video)} style={{ cursor: 'pointer' }} />
      </div>
    </div>
  );
};

export default VideoCard;
