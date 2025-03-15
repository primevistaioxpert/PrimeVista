import React from "react";

const VideoBackground = () => {
  return (
    <div className="video-background-container">
      
      {/* Fullscreen Video Section */}
      <section className="container-fluid top-banner no-padd js-video-wrapper pr-video-wrapper simple fullheight light">
        <span className="overlay"></span>
        <div className="js-video-container pr-video-container">
          <iframe
            title="The Heydar Aliyev Centre by Zaha Hadid Architects"
            src="https://www.youtube.com/embed/zp2lgrzmnn8?autoplay=1&mute=1&controls=0&showinfo=0&loop=1&rel=0&modestbranding=1&playlist=zp2lgrzmnn8"
            allow="autoplay; fullscreen"
            allowFullScreen
            frameBorder="0"
          ></iframe>
        </div>

        
      </section>
    </div>
  );
};

export default VideoBackground;
