import React from 'react';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    link: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
      <img
        src={project.image}
        alt={project.title}
        className="rounded-t-lg w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
        <p className="text-gray-400">{project.description}</p>
        <a
          href={project.link}
          className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
