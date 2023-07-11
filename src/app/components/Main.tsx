import React from "react";
import "./styles.css"; // Import the custom CSS file
import Image from "next/image";
import indigo from "../../../public/images/indigo.png";
import HexagonalGlobe from "./HexagonalGlobe";

const Main: React.FC = () => {
  return (
    <>
      <div
        className="flex items-center justify-center rounded-lg mx-auto mb-4"
        style={{
          width: "38rem",
          height: "10rem",
          backgroundColor: "#000000",
          alignContent: "center",
        }}
      >
        <HexagonalGlobe />
      </div>
      <div
        className="bg-oxford-blue rounded-lg shadow-md m-10 p-5 mb-6"
        id="projects"
      >
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
    </>
  );
};

export default Main;
