import React from "react";
import "../Styles/VideoBackground.css"; // Import styles
// const videoBg = "../assets/videos/green_plate.mp4";

  // Import video file

const VideoBackground = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted playsInline className="video-bg">
      <source src="/videos/green_plate.mp4" type="video/mp4" />
        
      </video>
     
    </div>
  );
};

export default VideoBackground;
