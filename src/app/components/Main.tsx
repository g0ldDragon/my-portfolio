import React from "react";
import "./styles.css"; // Import the custom CSS file
import Image from "next/image";
import indigo from "../../../public/images/indigo.png"

const Main: React.FC = () => {
  return (
    <div
      className="bg-oxford-blue rounded-lg shadow-md m-10 p-5 mb-6"
      id="projects"
    >
      <div className="grid grid-cols-2 gap-8 m-20" >
        <div
          className="flex items-center"
          style={{ flexDirection: "column", textAlign: "left" }}
        >
          <h3
            className="text-xl font-bold mb-4 text-orange-web"
            style={{ fontSize: 45, lineHeight: "5rem" }}
          >
            {"Welcome to my portfolio website!"}
          </h3>
        </div>
        <div className="flex items-center justify-center bg-gray-100 rounded-lg mx-auto mb-4" style={{width: "28rem", height: "12rem"}}>
          <Image
            src={indigo}
            alt="Project Image"
            width={400}
            height={400}
            className="rounded-lg w-full h-full"
          />
        </div>
      </div>
      <div style={{ margin: "2rem" }}>
        <a
          href="/resumes/Joshua-Wilson-CV.pdf"
          download
          className="link-invert"
        >
          Click to download my CV!
        </a>
      </div>
    </div>
  );
};

export default Main;
