import { useEffect, useState } from 'react';
import { client, databases } from '../utils/appwrite';
import VideoFeed from '../components/VideoFeed';

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await databases.listDocuments('[YOUR_DATABASE_ID]', '[YOUR_COLLECTION_ID]');
        setVideos(response.documents);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div>
      <h1>Video Feed</h1>
      <VideoFeed videos={videos} />
    </div>
  );
};

export default Home;
