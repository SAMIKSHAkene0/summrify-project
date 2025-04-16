import React from 'react';
import '../Style/VideoSection.css';

const VideoSection = () => {
  return (
    <div className="container text-center py-5">
      <div className="video-container">
        <video 
          src="your-video-url.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="video"
        ></video>
        <div className="overlay">
          <button className="btn btn-primary">Play</button>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
