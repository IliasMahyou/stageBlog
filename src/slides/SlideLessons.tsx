import React from "react";
import HoverButton from "../components/HoverButton";
import { LogoSmall } from "./logos/LogoScribe";
import SportifyLogoBlack from "./logos/SportifyLogoBlack";
import MediahuisLogo from "./logos/MediahuisLogo";

const SlideLessons: React.FC = () => {
  return (
    <div className="h-screen w-screen relative">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1655062238296-6c3687605ff3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          filter: "blur(1.5px)",
        }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>
      <h1 className="absolute top-16 left-16 inleiding-title text-7xl font-extrabold text-white mb-12 tracking-wider z-10">
        Persoonlijke groei
      </h1>

      <MediahuisLogo />
    </div>
  );
};

export default SlideLessons;
