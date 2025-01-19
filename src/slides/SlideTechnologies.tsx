import React from "react";
import { LottieAnimation } from "./logos/LottiesAnimation";

const SlideTechnologies: React.FC = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-lightgray-600 text-white relative">
      <ul className="absolute top-16 left-16 inleiding-title text-5xl font-extrabold text-black mb-12 tracking-wider z-10">
        <li>Workflow</li>
        <li>Taken</li>
        <li>Technische Reflectie</li>
      </ul>
      <LottieAnimation width={1000} height={1000} lottie={'/lotties/Lottie-meeting.json'} />
      <img
        src="https://i.ibb.co/cyFG3y0/Mediahuis-logo-transparent-2.png"
        alt="Mediahuis Logo"
        className="absolute bottom-6 left-6 w-[300px] h-auto"
      />
    </div>
  );
};

export default SlideTechnologies;
