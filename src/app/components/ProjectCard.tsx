// src/components/ProjectCard.tsx

import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  // Add other necessary props
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <img src={imageUrl} alt={title} className="w-32 h-32 rounded-full mx-auto mb-4" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default ProjectCard;
