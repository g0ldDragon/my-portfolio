/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import profilePic from "../../../public/images/me.jpeg";
import vid from "../../../public/videos/gym-reel.mp4";
import tech from "../../../public/images/tech.jpg";

const About: React.FC = () => {
  return (
    <section className="container mx-auto py-8" id="about">
      <h2 className="text-5xl font-bold mb-4">About Me</h2>
      <div className="grid grid-cols-2 gap-8 m-20" style={{ marginBlock: 40 }}>
        <div className="flex items-center" style={{ justifyContent: "center" }}>
          <Image
            style={{
              borderRadius: 200,
              borderColor: "#ffffff18",
              borderStyle: "ridge",
              borderWidth: 5,
            }}
            src={profilePic}
            alt="Image 1"
            width={400}
            height={300}
          />
        </div>
        <div className="flex items-center">
          <p className="text-gray-700" style={{ textAlign: "left" }}>
            Hi there!
            <br />
            <br />
            I'm <text className="text-orange-web">Joshua Wilson</text>, a driven
            Frontend Developer specializing in ReactJS, React Native, NextJS,
            and <text className="text-orange-web">JavaScript</text>. With a keen
            eye for detail and a passion for clean code, I'm always looking to
            enhance my skillset and{" "}
            <text className="text-orange-web">evolve</text> into the role of a{" "}
            <text className="text-orange-web">Fullstack Developer</text>.
            <br />
            <br />
            <br />
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8 m-20" style={{ marginBlock: 40 }}>
        <div className="flex items-center">
          <p className="text-gray-700" style={{ textAlign: "left" }}>
            <text className="text-orange-web">
              Transparency, efficiency, relationships, trust, and accountability  
            </text>{" "}
             are the cornerstones of my work ethic. When I'm not immersed in
            coding, you'll find me on the squash court, always up for a
            challenging match. I have a silent passion for health, fitness, and
            nutrition, constantly seeking self-improvement. Embracing the
            <text className="text-orange-web">
              {" "}philosophy of growing by 1% every day{" "}
            </text>
            fuels my personal development journey.
            <br />
            <br />
            <br />
            My educational background includes a 3-year course at
            <text className="text-orange-web">{" "}CTU Training Solutions</text> in
            Boksburg, where I obtained an NQF level 6 in IT Database Development
            in 2022. Additionally, I hold several certifications, including a
            National Certificate in IT Systems Development, FET Certificate in
            Systems Development, and relevant
            <text className="text-orange-web"> online certificates</text> such
            as Next.js & React - The Complete Guide and Understanding
            TypeScript.
            <br />
            <br />
            <br />
          </p>
        </div>
        <div className="flex items-center" style={{ justifyContent: "center" }}>
          <video
            style={{
              borderRadius: 11,
              marginBottom: "2rem",
              borderColor: "#ffffff18",
              borderStyle: "ridge",
              borderWidth: 5,
            }}
            src={vid}
            width={300}
            height={150}
            autoPlay
            muted
            loop
          />
        </div>
      </div>
      <div>
        <p
          className="text-gray-700"
          style={{ textAlign: "center", marginInline: 80 }}
        >
          Though my work experience in the industry is limited, I embarked on a
          6-month internship as a fullstack developer intern at Northroom
          Technologies, gaining valuable insights and honing my
          <text className="text-orange-web">{" "}frontend development skills</text>.
          Now, I'm eager to broaden my skillset and embrace the challenges of
          <text className="text-orange-web">{" "}backend development</text> to become
          a well-rounded Fullstack Developer.
          <br />
          <br />
          My technical skills encompass a range of technologies, including
          ReactJS, React Native, NextJS, JavaScript, HTML5, CSS, Microsoft SQL
          Server, T-SQL, and more. Alongside my technical expertise, I bring a
          problem-solving mindset,
          <text className="text-orange-web">
            {" "}meticulous attention to detail
          </text>
          , and a highly motivated work ethic.
          <br />
          <br />
          Throughout my journey, I've contributed to various projects, tackling
          tasks such as bug fixing, resolving UI issues, and building
          components. I've also started projects from scratch, designing
          navigational structures, crafting components, and implementing
          functionality. You can
          <text className="text-orange-web">
            {" "}explore some of these projects{" "}
          </text>
          in my GitHub repository.
          <br />
          <br />
          <br />
        </p>
      </div>
      <div className="grid grid-cols-2 gap-8 m-20">
        <div className="flex items-center">
          <Image
            style={{
              borderRadius: 11,
              marginBottom: "2rem",
              borderColor: "#ffffff18",
              borderStyle: "ridge",
              borderWidth: 5,
            }}
            src={tech}
            alt="Image 3"
            width={700}
            height={1000}
          />
        </div>
        <div className="flex items-center">
          <p className="text-gray-700" style={{ textAlign: "left" }}>
            What drives me is the belief that technology, when harnessed
            effectively, can have a profound
            <text className="text-orange-web">
              {" "}positive impact on the world
            </text>
            . I'm committed to providing sophisticated, high-functioning, and
            visually pleasing web and mobile solutions that empower businesses
            and individuals to thrive.
            <text className="text-orange-web">Continuous learning</text> is at
            the core of my motivation, and I firmly believe in the
            transformative power of personal growth.
            <br />
            <br />
            <br />
            Beyond the world of web development, I'm passionate about health,
            wellbeing, fitness, and overall happiness. Whether I'm on the squash
            court, hitting the gym, or diving into self-help literature, I'm
            constantly seeking ways to improve and understand myself on a deeper
            level. Music is a source of inspiration, as I explore diverse genres
            to broaden my emotional perspective. Eastern practices like Qigong
            and meditation fascinate me, fueling my desire to delve into the
            holistic side of health.
            <br />
            <br />
            <br />
          </p>
        </div>
      </div>
      <div>
        <p
          className="text-gray-700"
          style={{ textAlign: "center", marginInline: 80 }}
        >
          <text className="text-orange-web text-xl">
            Thank you for exploring my portfolio!
          </text>
          <br />
          <br />
          Dive into my projects, explore my code repositories. Whether you're
          seeking a talented frontend developer or a dedicated problem-solver,
          <text className="text-orange-web">
            {" "}I'm here to bring your ideas to life
          </text>
          . Let's connect and embark on this digital adventure together! Feel
          free to reach out to me via email, phone, or through my social media
          profiles. I'm actively looking for new opportunities and would be
          thrilled to be a part of your team. Keep exploring, and I look forward
          to connecting with you soon!
        </p>
      </div>
    </section>
  );
};

export default About;
