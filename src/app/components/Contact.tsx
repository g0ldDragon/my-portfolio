// src/components/Contact.tsx

import React from "react";
import "./styles.css"; // Import the custom CSS file

const Contact: React.FC = () => {
  const handleSubmit = (values: any) => {
    // Handle form submission here
    console.log(values);
  };
  return (
    <section className="container mx-auto py-8" id="contact">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p className="text-gray-700">
        Location: Johannesburg, South Africa
        <br />
        Availability: Actively looking for work
        <br />
        <br />
        See my details below to get in touch with me
        <br />
        <br />
        Email:
        <a href="mailto:joshiewils13@icloud.com">joshiewils13@icloud.com</a>
        <br />
        Phone: <a href="tel:+1234567890">+27 (83) 254-9480</a>
        <br />
        <a href="https://www.linkedin.com/in/indigxjosh">LinkedIn </a>|
        <a href="https://www.instagram.com/indigxjosh/"> Instagram </a>|
        <a href="https://github.com/g0ldDragon"> Github</a>
        <br />
        <a href="/resumes/Joshua-Wilson-CV.pdf" download>
          Download Resume
        </a>
      </p>
    </section>
  );
};

export default Contact;
