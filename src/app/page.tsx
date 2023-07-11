// src/pages/HomePage.tsx
"use client";
import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import ProjectCard from "./components/ProjectCard";
import Main from "./components/Main";

import currencyConvert1 from "../../public/images/currencyConvert1.png";
import angular from "../../public/images/angular.png";
import portfolio from "../../public/images/portfolio-scrn.png";

const page: React.FC = () => {
  const projects = [
    {
      title: "Currency Converter Demo App",
      description:
        "A demo application created whilst learning React Native through React Native schools. This is a simple Currency Converter appliction, see more below to run the app.",
      githubLink: "https://github.com/g0ldDragon/CurrencyConverter",
      linkedinLink:
        "https://www.linkedin.com/in/indigxjosh/overlay/1635532991175/single-media-viewer/?profileId=ACoAADwftywBgsKgN-xMvGf0s-3nynKHUkmfFjg",
      image: currencyConvert1,
    },
    {
      title: "Angular Code Along",
      description:
        "Angular Crash Course by Traversy Media. This project was created side by side the youtube video. Important: I take no credit for the code in this repo as it was purely put together for educational purposes and to showcase the completion of an online code-along video.",
      githubLink: "https://github.com/g0ldDragon/Learning-Angular-Code-Along",
      linkedinLink:
        "https://www.linkedin.com/in/indigxjosh/overlay/1635532992227/single-media-viewer/?profileId=ACoAADwftywBgsKgN-xMvGf0s-3nynKHUkmfFjg",
      image: angular,
    },
    {
      title: "Portfolio Project",
      description:
        "Here lies the github repository for the portfolio site you are currently exploring. To take a deeper look into my portfolio site see more.",
      githubLink: "https://github.com/g0ldDragon/my-portfolio",
      linkedinLink:
        "https://www.linkedin.com/in/indigxjosh/details/featured/1635532482189/single-media-viewer/?profileId=ACoAADwftywBgsKgN-xMvGf0s-3nynKHUkmfFjg",
      image: portfolio,
    },
  ];

  return (
    <>
      <Header />
      <main style={{ textAlign: "center" }}>
        <Main />
        <About />
        <ProjectCard projects={projects} />
        <Contact />
      </main>
      {/* Include a footer if needed */}
    </>
  );
};

export default page;
