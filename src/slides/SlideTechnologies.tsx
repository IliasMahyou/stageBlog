import React from "react";

import MediahuisLogo from "./logos/MediahuisLogo";
import HoverButton from "../components/HoverButton";
import Logo from "./logos/Logo";

const SlideTechnologies: React.FC = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-lightgray-600 text-white relative"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize:"cover",
    }}
    >
      <ul className="absolute top-16 left-16 inleiding-title text-5xl font-extrabold  mb-12 tracking-wider z-10">
        <li>Workflow</li>
        <li>Taken</li>
        <li>Technische Reflectie</li>
      </ul>
      <div className="flex gap-20">
          <HoverButton href={"https://mediahuis.atlassian.net/jira/software/c/projects/NES/boards/22"} children={<Logo logoURL="https://i.ibb.co/VjH4dsY/f122fc74cdb80f540fe0b65cecccaa03.png" alt="JiraLogo"/>} />
          <HoverButton href={"https://gitlab.mediahuisgroup.com/Ilias.Mahyou"} children={<Logo logoURL="https://i.ibb.co/ZKBWBhJ/pngfind-com-github-logo-png-945757.png" alt="GitlabLogo" className="w-20"/>} />
      </div>
    
      <MediahuisLogo/>
    </div>
  );
};

export default SlideTechnologies;
