import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import currencyConvert1 from "../../../public/images/currencyConvert1.png";
import angular from "../../../public/images/angular.png";
import portfolio from "../../../public/images/portfolio-scrn.png";

interface ProjectCardProps {
  projects: {
    title: string;
    description: string;
    githubLink: string;
    linkedinLink: string;
  }[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projects }) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { title, description, githubLink, linkedinLink } =
    projects[currentProjectIndex];
  const images = [currencyConvert1, angular, portfolio];
  const totalImages = images.length;

  const handlePrevProject = () => {
    setCurrentProjectIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  const handleNextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCloseDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div
      className="rounded-lg shadow-md m-4 p-20"
      id="projects"
      style={{ backgroundColor: "#ffae00e8" }}
    >
      <h3 className="text-xl font-bold mb-4 text-oxford-blue">{title}</h3>
      <div className="relative">
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 text-oxford-blue hover:text-white"
          onClick={handlePrevProject}
        >
          <FontAwesomeIcon icon={faChevronLeft} size="2x" />
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 text-oxford-blue hover:text-white"
          onClick={handleNextProject}
        >
          <FontAwesomeIcon icon={faChevronRight} size="2x" />
        </button>
        <div className="flex items-center justify-center bg-gray-100 rounded-lg w-40 h-60 mx-auto mb-4">
          <Image
            src={images[currentProjectIndex]}
            alt="Project Image"
            className="rounded-lg w-full h-full"
          />
        </div>
      </div>
      <p className="text-oxford-blue mb-4">{description}</p>
      <div className="relative">
        <button
          className={`text-black hover:text-white ${
            isDropdownOpen ? "text-transparent" : ""
          }`}
          onClick={handleToggleDropdown}
        >
          See More
        </button>
        {isDropdownOpen && (
          <div className="absolute bottom-0 left-0 w-full">
            <ul
              className="flex justify-evenly rounded-lg border-2 border-oxford-blue px-4 py-2"
              style={{ backgroundColor: "#000000a0" }}
            >
              <li>
                <div className="flex items-center">
                  <div>
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="3x"
                      className="text-white hover:text-oxford-blue"
                    />
                  </div>
                  <div className="ml-2">
                    <a
                      href={githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white mb-4 hover:text-oxford-blue"
                    >
                      Github Repository
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <div>
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      size="3x"
                      className="text-white hover:text-oxford-blue"
                    />
                  </div>
                  <div className="ml-2">
                    <a
                      href={linkedinLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white-700 mb-4 hover:text-oxford-blue"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </li>
            </ul>
            <button
              className="absolute top-0 right-0 p-2"
              onClick={handleCloseDropdown}
            >
              <FontAwesomeIcon icon={faTimes} className="text-white" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
