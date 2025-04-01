import { useEffect, useState } from 'react';
import { Client, Databases } from 'appwrite';
import VideoFeed from '../components/VideoFeed';

const client = new Client();
client
  .setEndpoint('https://appwrite.example.com/v1')
  .setProject('67ebfcd9001ca641494f');

const databases = new Databases(client);

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await databases.listDocuments('67ebfd4500208e82cc75', '67ebfd5e00021a486d09');
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
