import React, { useState } from 'react';
import { client, databases } from '../utils/appwrite';

const VideoItem = ({ video }) => {
  const [likes, setLikes] = useState(video.likes);

  const handleLike = async () => {
    try {
      const updatedVideo = { ...video, likes: likes + 1 };
      await databases.updateDocument('[YOUR_DATABASE_ID]', '[YOUR_COLLECTION_ID]', video.$id, updatedVideo);
      setLikes(likes + 1);
    } catch (error) {
      console.error('Error updating like count:', error);
    }
  };

  return (
    <div>
      <video src={video.url} controls />
      <h3>{video.title}</h3>
      <p>{video.description}</p>
      <button onClick={handleLike}>Like</button>
      <p>{likes} likes</p>
    </div>
  );
};

export default VideoItem;
