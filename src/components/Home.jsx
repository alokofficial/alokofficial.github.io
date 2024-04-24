import React from "react";
import pic from "../assets/profile.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import TypingEffect from "./TypingEffect";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <div>
            <TypingEffect />
          </div>
        
          <p className="text-gray-500 py-4 max-w-md">
            I am a software engineer. Interested in full stack development and
            specialization in React JS.
          </p>

          <div>
            <Link
              to="projects"
              smooth
              duration={1000}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={pic}
            
            alt="my profile"
            className="rounded-full mx-auto sm:w-2/3 md:h-full object-cover md:w-3/4"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
