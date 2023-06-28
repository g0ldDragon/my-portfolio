import React from "react";
import "./styles.css"; // Import the custom CSS file

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  // Add other necessary props
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md m-10 p-10 mb-6" id="projects">
      <h3 className="text-xl font-bold mb-4 text-oxford-blue">{title}</h3>
      <div className="flex items-center justify-center bg-gray-100 rounded-lg w-64 h-64 mx-auto mb-4">
        <img src={imageUrl} alt="Project Image" className="rounded-lg w-full h-full" />
      </div>
      <p className="text-gray-700 mb-4">{description}</p>
      <a href="#" className="text-orange-web hover:text-oxford-blue">
        See More
      </a>
    </div>
  );
};

export default ProjectCard;
