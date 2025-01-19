import React from "react";
import { LottieAnimation } from "./logos/LottiesAnimation";
import MediahuisLogo from "./logos/MediahuisLogo";

const SlideTechnologies: React.FC = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-lightgray-600 text-white relative"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    }}
    >
      <ul className="absolute top-16 left-16 inleiding-title text-5xl font-extrabold  mb-12 tracking-wider z-10">
        <li>Workflow</li>
        <li>Taken</li>
        <li>Technische Reflectie</li>
      </ul>
      <MediahuisLogo/>
    </div>
  );
};

export default SlideTechnologies;
