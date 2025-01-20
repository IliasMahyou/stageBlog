import React from "react";
import { LogoSmall } from "./logos/LogoScribe";
import MediahuisLogo from "./logos/MediahuisLogo";
import SportifyLogoBlack from "./logos/SportifyLogoBlack";
import HoverButton from "../components/HoverButton";

const SlideProjects: React.FC = () => {
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
        <HoverButton href="https://scribe.mediahuisgroup.com/">
          <LogoSmall className="z-10" />
        </HoverButton>
        <HoverButton href="https://preview-sportify-ui.mediahuisgroup.com/components/sportify-sdk">
          <SportifyLogoBlack className="z-10" />
        </HoverButton>
      </div>
      <MediahuisLogo />
    </div>
  );
};

export default SlideProjects;
