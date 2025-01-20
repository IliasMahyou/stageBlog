/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import MediahuisLogo from "./logos/MediahuisLogo";

const SlideQuestionsAndAnswers: React.FC = () => {
  return (
    <div className="h-screen w-screen relative overflow-hidden">
      {/* Video Background */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "0",
          paddingBottom: "56.25%", // Maintains 16:9 aspect ratio
        }}
      >
        <iframe
          allow="fullscreen;autoplay"
          allowFullScreen
          height="100%"
          src="https://streamable.com/e/al8lnr?autoplay=1&muted=1"
          width="100%"
          style={{
            border: "none",
            width: "100%",
            height: "100%",
            position: "absolute",
            left: 0,
            top: 0,
            overflow: "hidden",
          }}
        ></iframe>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Title */}
      <div className="intro-content absolute top-16 left-16 text-left z-10 text-white">
        <h1 className="text-7xl font-extrabold text-white tracking-wider">
          Questions & Answers
        </h1>
      </div>

      {/* Logo */}
      <div className="absolute bottom-8 right-8 z-20">
        <MediahuisLogo />
      </div>
    </div>
  );
};

export default SlideQuestionsAndAnswers;
