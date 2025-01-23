import React from "react";
import MediahuisLogo from "./logos/MediahuisLogo";

const SlideThankYou: React.FC = () => {
  return (
    <div className="h-screen w-screen relative overflow-hidden">
      <div className="absolute inset-0">
        <video
          src="/7563906-hd_1920_1080_30fps.mp4" 
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        ></video>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="absolute bottom-8 right-8 z-20">
        <MediahuisLogo />
      </div>
    </div>
  );
};

export default SlideThankYou;
