import React, { useEffect } from "react";
import { gsap } from "gsap";

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

      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="https://www.mediahuis.be/app/uploads/2022/08/Mediahuis-Corporate-Header.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>


      <div className="intro-content absolute top-16 left-16 text-left z-10 text-white">
        
        <p className="text-5xl mb-2">Ilias Mahyou</p>
        <p className="text-5xl">Software Developer</p>
      </div>


      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
    </div>
    <img 
  src="https://i.ibb.co/cyFG3y0/Mediahuis-logo-transparent-2.png" 
  alt="Mediahuis Logo" 
  height={100} 
  width={300} 
  className="absolute bottom-0 left-6"
/>

    </>
  );
};

export default SlideIntro;
