// src/pages/HomePage.tsx

import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';

const page: React.FC = () => {
  return (
    <>
      <Header />
      <main style={{textAlign: 'center'}}>
        <About />
        {/* Include other sections/components */}
        <Contact />
      </main>
      {/* Include a footer if needed */}
    </>
  );
};

export default page;
