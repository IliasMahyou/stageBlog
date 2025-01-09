import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'Description of Project One.',
    image: 'project1.jpg',
    link: '/project-one',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'Description of Project Two.',
    image: 'project2.jpg',
    link: '/project-two',
  },
  
];

const PortfolioPage: React.FC = () => {
  const projects = [
    { id: 1, title: 'Project One', description: 'A great project.', image: 'project1.jpg' },
    { id: 2, title: 'Project Two', description: 'Another great project.', image: 'project2.jpg' },
    // Add more projects here
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
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

