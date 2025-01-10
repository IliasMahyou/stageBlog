import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Scribe',
    description: 'Mediahuis - AI Internal application for Speech to Text',
    image: 'https://i.ibb.co/Yd3rFF7/Screenshot-2025-01-09-130825.png',
    technologies: ['React', 'TypeScript', 'AI','.NET API','PostgreSQL','Docker','AWS S3'],
  },
  {
    id: 2,
    title: 'Sportify',
    description: 'Mediahuis - Sports widgets for all brands',
    image: 'https://i.ibb.co/YWXsgJw/Screenshot-2025-01-09-131949.png',
    technologies: ['React', 'TypeScript', 'AI','.NET API','PostgreSQL','Docker','AWS S3'],
  },
  {
    id: 3,
    title: 'Hustlr.',
    description: 'My own project - Design/Front-End',
    image: 'https://i.ibb.co/nwc9qX1/Screenshot-2025-01-09-143406.png',
    technologies: ['Next.js', 'TailwindCSS','TypeScript'],
  },
  {
    id: 4,
    title: 'Discord Bot',
    description: 'My own project - A interactive chatbot with recommended shows algoritms and AI Picture generating',
    image: 'https://i.ibb.co/3pd7GTQ/C1132-C32-67-E8-4-E78-A4-E2-EC81-AD4990-BE.png',
    technologies: ['TypeScript'],
  },
  {
    id: 4,
    title: 'Runescape Bot',
    description: 'My own project - Bot that plays the game based off screenshots and color recognition',
    image: 'https://i.ibb.co/gDr75vN/image.webp',
    technologies: ['.NET'],
  },
];

const PortfolioPage: React.FC = () => {
  return (
    <div className="min-h-screen text-gray-100">
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
              <p className="text-gray-400 mb-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-600 text-white text-sm py-1 px-3 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
