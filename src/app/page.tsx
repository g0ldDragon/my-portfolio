// src/pages/HomePage.tsx
'use client'
import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import ProjectCard from "./components/ProjectCard";
import Main from "./components/Main";

const page: React.FC = () => {
  return (
    <>
      <Header />
      <main style={{ textAlign: "center"}}>
        <Main />
        <About />
        <ProjectCard
          title={"Currency Converter Demo App"}
          description={
            "It covers topics like: How to setup your React Native development environment Build a solid foundation to create an easy to maintain app Create custom screens and components Interact with third party libraries Capture and use user input Navigation in multiple scenarios Details that make your app look and function great How to interact with APIs"
          }
        />
        {/* <ProjectCard
          title={"Currency Converter Demo App"}
          description={
            "It covers topics like: How to setup your React Native development environment Build a solid foundation to create an easy to maintain app Create custom screens and components Interact with third party libraries Capture and use user input Navigation in multiple scenarios Details that make your app look and function great How to interact with APIs"
          }
          imageUrl={"/public/images/Screenshot (21).png"}
        />
        <ProjectCard
          title={"Currency Converter Demo App"}
          description={
            "It covers topics like: How to setup your React Native development environment Build a solid foundation to create an easy to maintain app Create custom screens and components Interact with third party libraries Capture and use user input Navigation in multiple scenarios Details that make your app look and function great How to interact with APIs"
          }
          imageUrl={"/public/images/Screenshot (21).png"}
        /> */}
        <Contact />
      </main>
      {/* Include a footer if needed */}
    </>
  );
};

export default page;
