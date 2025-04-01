import React from 'react';
import VideoItem from './VideoItem';

const VideoFeed = ({ videos }) => {
  return (
    <div>
      {videos.map((video) => (
        <VideoItem key={video.$id} video={video} />
      ))}
    </div>
  );
};

export default VideoFeed;
