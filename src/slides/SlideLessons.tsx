import React from "react";

const SlideLessons: React.FC = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-orange-600 text-white">
      <h1 className="text-6xl font-bold mb-8">Lessons Learned</h1>
      <ul className="text-3xl space-y-4">
        <li>Communication</li>
        <li>Flexibility</li>
        <li>Teamwork</li>
      </ul>
    </div>
  );
};

export default SlideLessons;
