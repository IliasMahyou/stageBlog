import React, { useRef } from "react";
import { gsap } from "gsap";
import { LogoSmall } from "./logos/LogoScribe";
import MediahuisLogo from "./logos/MediahuisLogo";
import SportifyLogoBlack from "./logos/SportifyLogoBlack";

const SlideProjects: React.FC = () => {
  const scribeRef = useRef(null);
  const sportifyRef = useRef(null);

  const handleMouseEnter = (element: HTMLElement) => {
    gsap.to(element, { scale: 1.2, duration: 0.3, ease: "power1.out" });
  };

  const handleMouseLeave = (element: HTMLElement) => {
    gsap.to(element, { scale: 1, duration: 0.3, ease: "power1.out" });
  };

  return (
    <div className="h-screen w-screen relative">

      <div
        className="absolute top-0 left-0 h-full w-1/2 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1666868291591-9f8e0353c9ce?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      ></div>
      <div
        className="absolute top-0 right-0 h-full w-1/2 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1612151387614-0d29a04ff5f3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      ></div>

 
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>


      <h1 className="absolute top-16 left-16 inleiding-title text-7xl font-extrabold text-white mb-12 tracking-wider z-10">
        Projecten
      </h1>

      <div className="absolute inset-0 flex items-center justify-center space-x-16 z-10">
 
        <div
          className="relative w-40 h-40 flex items-center justify-center"
          ref={scribeRef}
          onMouseEnter={() => handleMouseEnter(scribeRef.current!)}
          onMouseLeave={() => handleMouseLeave(scribeRef.current!)}
        >
          <a
            href="https://scribe.mediahuisgroup.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center bg-white/80 rounded-full"
          >
            <LogoSmall className="z-10" />
          </a>
        </div>

    
        <div
          className="relative w-40 h-40 flex items-center justify-center"
          ref={sportifyRef}
          onMouseEnter={() => handleMouseEnter(sportifyRef.current!)}
          onMouseLeave={() => handleMouseLeave(sportifyRef.current!)}
        >
          <a
            href="https://preview-sportify-ui.mediahuisgroup.com/components/sportify-sdk"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center bg-white/80 rounded-full"
          >
            <SportifyLogoBlack className="z-10" />
          </a>
        </div>
      </div>


      <MediahuisLogo />
    </div>
  );
};

export default SlideProjects;
