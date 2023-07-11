import React, { useState, useEffect } from "react";
import "./styles.css"; // Import the custom CSS file
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import currencyConvert1 from "../../../public/images/currencyConvert1.png";
import currencyConvert2 from "../../../public/images/currencyConvert2.png";
import currencyConvert3 from "../../../public/images/currencyConvert3.png";

interface ProjectCardProps {
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const images = [currencyConvert1, currencyConvert2, currencyConvert3];
  const totalImages = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % totalImages);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCloseDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="rounded-lg shadow-md m-4 p-20" id="projects" style={{backgroundColor: "#ffae00e8"}}>
      <h3 className="text-xl font-bold mb-4 text-oxford-blue">{title}</h3>
      <div className="flex items-center justify-center bg-gray-100 rounded-lg w-40 h-60 mx-auto mb-4">
        <Image
          src={images[currentImage]}
          alt="Project Image"
          className="rounded-lg w-full h-full"
        />
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
                    <p className="text-white mb-4 hover:text-oxford-blue">
                      Github Repository
                    </p>
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
                    <p className="text-white-700 mb-4 hover:text-oxford-blue">
                      LinkedIn Profile
                    </p>
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
