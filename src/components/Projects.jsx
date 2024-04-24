import React from "react";
import shoppingCart from "../assets/projects/shopping-cart-home.png";
import planWithMe from "../assets/projects/plan-with-me-react.png";
import studyNotion from "../assets/projects/studynotion-signup-page.png";
import testimonials from "../assets/projects/testimonials-react.png";
import topCourses from "../assets/projects/top-courses-react.png";
import cryptoTracker from "../assets/projects/crypto-tracker.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: shoppingCart,
      demo: "https://shopping-cart-react-v1.netlify.app",
      // code:"",
    },
    {
      id: 2,
      src: planWithMe,
      demo: "https://plan-with-me-react.netlify.app",
      // code:"",
    },
    {
      id: 3,
      src: studyNotion,
      demo: "https://study-notion-react.netlify.app",
      // code:"",
    },
    {
      id: 4,
      src: topCourses,
      demo: "https://top-courses-react.netlify.app",
      // code:"",
    },
    {
      id: 5,
      src: cryptoTracker,
      demo: "https://cryptoxtracker.netlify.app",
      // code:"",
    },
  ];

  return (
    <div
      name="projects"
      className="py-2 bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-125"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6  my-4 duration-200 hover:scale-125">
                  <a href={demo} target="_blank" rel="noreferrer">
                    Demo
                  </a>
                </button>
                <button className="w-1/2 px-6 my-4 duration-200 hover:scale-125">
                  <a href={code} target="_blank" rel="noreferrer">
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
