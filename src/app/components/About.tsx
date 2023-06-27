// src/components/About.tsx

import React from 'react';

const About: React.FC = () => {
  return (
    <section className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-gray-700" style={{textAlign: 'center', margin: 20}}>
        Hi there, my name is Joshua Wilson. I am a driven Frontend Developer with 
        expertise in ReactJS, React Native, NextJS, and JavaScript. Always looking 
        to improve my skillset, and currently focused on evolving into the role of
        a Fullstack Developer. Whilst remaining strongly committed to transparency,
        efficiency, relationships, trust, and accountability you can find me hitting
        around a squash ball in my spare time. I have a silent passion for health, 
        fitness and nutrition and am fascinated when it comes to learning about how 
        to self-improve, 1% a day is truly one of my pillars of growth.
      </p>
    </section>
  );
};

export default About;
