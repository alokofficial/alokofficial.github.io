import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>

        <p className="text-xl mt-12">
          Hello! I'm an aspiring software engineer passionate about full-stack
          development. I thrive on problem-solving and have solved 500+ problems
          on HackerRank and GeeksforGeeks. Alongside, I've crafted numerous web
          projects, showcasing my skills in building intuitive interfaces and
          exploring the ever-changing world of software engineering.
        </p>

        <br />

        <p className="text-xl">
          I'm a tech enthusiast with a knack for elegant solutions. My strong
          foundation in data structures and algorithms drives my pursuit of
          efficient and scalable software applications. From front-end design to
          back-end implementation using Node.js and Express.js, I'm dedicated to
          creating seamless user experiences. Each project reflects my curiosity
          and dedication to coding, and I'm eager to contribute my skills to
          meaningful collaborations
        </p>
      </div>
    </div>
  );
};

export default About;
