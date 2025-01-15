import React from "react";

const SlideProjects: React.FC = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-orange-500 text-white">
      <h1 className="text-6xl font-bold mb-8">Projects</h1>
      <ul className="text-3xl space-y-4">
        <li>Scribe</li>
        <li>Sportify</li>
        <li>Transcription & APIs</li>
      </ul>
    </div>
  );
};

export default SlideProjects;
