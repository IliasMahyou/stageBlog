import React from "react";

const SlideTechnologies: React.FC = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-red-600 text-white">
      <h1 className="text-6xl font-bold mb-8">Technologies</h1>
      <ul className="text-3xl space-y-4">
        <li>React</li>
        <li>AWS S3</li>
        <li>Tailwind & GSAP</li>
      </ul>
    </div>
  );
};

export default SlideTechnologies;
