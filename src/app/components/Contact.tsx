// src/components/Contact.tsx

import React from "react";
import "./styles.css"; // Import the custom CSS file
import { Center } from "@mantine/core"

const Contact: React.FC = () => {
  const handleSubmit = (values: any) => {
    // Handle form submission here
    console.log(values);
  };
  return (
    <section className="container mx-auto py-8" id="contact">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <div
        className="grid grid-cols-4"
        style={{ justifyContent: "space-evenly" }}
      >
        <div className="flex items-left">
          <p className="text-gray-700" style={{ textAlign: "left" }}>
            Email:
            <a href="mailto:joshiewils13@icloud.com">joshiewils13@icloud.com</a>
            <br />
          </p>
        </div>
        <div className="flex items-left">
          <p className="text-gray-700" style={{ textAlign: "left" }}>
            Phone: <a href="tel:+1234567890">+27 (83) 254-9480</a>
            <br />
            <br />
          </p>
        </div>
        <div className="flex items-right" style={{ alignContent: "right" }}>
          <p className="text-gray-700" style={{ textAlign: "right" }}>
            <a href="https://www.linkedin.com/in/indigxjosh">LinkedIn </a>|
            <a href="https://www.instagram.com/indigxjosh/"> Instagram </a>|
            <a href="https://github.com/g0ldDragon"> Github</a>
            <br />
          </p>
        </div>
        <div className="flex items-right">
          <p className="text-gray-700" style={{ textAlign: "right" }}>
            <a href="/resumes/Joshua-Wilson-CV.pdf" download>
              Download Resume
            </a>
          </p>
        </div>
        <div className="flex items-right">
          <p className="text-gray-700">
            Location: Johannesburg, South Africa
            <br />
          </p>
        </div>
      </div>
      <br/>
      <br/>
      <Center style={{textAlign: "center"}}>
        <p className="text-gray-700">Joshua Wilson @ 2023</p>
      </Center>
    </section>
  );
};

export default Contact;
