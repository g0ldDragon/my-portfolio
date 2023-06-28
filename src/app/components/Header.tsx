import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex items-center justify-between py-8 bg-black">
      <h1 className="text-white text-4xl font-bold ml-4">Joshua Wilson</h1>
      <div className="flex space-x-4 mr-4">
        <Link href="#about" passHref>
          <button className="text-white px-4 py-2 rounded hover:bg-oxford-blue">
            About
          </button>
        </Link>
        <Link href="#contact" passHref>
          <button className="text-white px-4 py-2 rounded hover:bg-oxford-blue">
            Contact
          </button>
        </Link>
        <Link href="#projects" passHref>
          <button className="text-white px-4 py-2 rounded hover:bg-oxford-blue">
            Projects
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
