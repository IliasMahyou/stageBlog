/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import MediahuisLogo from "./logos/MediahuisLogo";

const SlideQuestionsAndAnswers: React.FC = () => {
  return (
    <div className="h-screen w-screen relative overflow-hidden">
      <div className="absolute inset-0">
        <video
          src="/8198505-hd_1920_1080_25fps.mp4" 
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        ></video>
      </div>

   
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      
      <div className="intro-content absolute top-16 left-16 text-left z-10 text-white">
        <h1 className="text-7xl font-extrabold text-white tracking-wider">
          Questions & Answers
        </h1>
      </div>

     
        <MediahuisLogo />    
    </div>
  );
};

export default SlideQuestionsAndAnswers;
