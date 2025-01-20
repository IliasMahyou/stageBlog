/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect } from "react";
import { gsap } from "gsap";
import MediahuisLogo from "./logos/MediahuisLogo";

const SlideIntro: React.FC = () => {
  useEffect(() => {
    gsap.fromTo(
      ".intro-content",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
    );
  }, []);

  return (
    <>
      <div className="h-screen w-screen relative overflow-hidden">
       
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "0",
            paddingBottom: "56.25%",
          }}
        >
          <iframe
            allow="fullscreen;autoplay"
            allowFullScreen
            height="100%"
            src="https://streamable.com/e/z9wvrm?autoplay=1&muted=1"
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

       
        <div className="intro-content absolute top-16 left-16 text-left z-10 text-white">
          <p className="text-5xl mb-2">Ilias Mahyou</p>
          <p className="text-5xl">Software Developer</p>
        </div>

        
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      <MediahuisLogo/>
    </>
  );
};

export default SlideIntro;
