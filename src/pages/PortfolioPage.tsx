import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Scribe',
    description: 'Mediahuis - AI Internal application for Speech to Text',
    image: 'https://i.ibb.co/Yd3rFF7/Screenshot-2025-01-09-130825.png', 
  },
  {
    id: 2,
    title: 'Sportify',
    description: 'Mediahuis - Sports widget for all brands',
    image: 'https://i.ibb.co/YWXsgJw/Screenshot-2025-01-09-131949.png', 
  },
  {
    id: 3,
    title: 'Hustlr.',
    description: 'My own project - Design/Front-End',
    image: 'https://i.ibb.co/nwc9qX1/Screenshot-2025-01-09-143406.png', 
  },
];

const PortfolioPage: React.FC = () => {
  return (
    <div className="min-h-screen  text-gray-100">
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">My Portfolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-lg shadow hover:shadow-lg transition p-4"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-400">{project.description}</p>
              <a
                href="#"
                className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
