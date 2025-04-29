import React from "react";
import { FaLinkedin, FaReact, FaNodeJs } from "react-icons/fa";
import { SiLeetcode, SiMongodb, SiExpress } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28">
        <div className="flex flex-col md:flex-row items-center">

          {/* Text Section */}
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-6 order-2 md:order-1">
            <span className="text-xl">Welcome To My Portfolio</span>
            
            <div className="flex space-x-2 text-2xl md:text-4xl font-semibold">
              <h1>Hello, I'm a </h1>
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={50}
                backSpeed={60}
                loop
              />
            </div>

            <p className="text-sm md:text-md text-justify leading-6">
              I'm a Computer Science & Engineering undergraduate at United Institute of Technology.
              I am an enthusiastic and driven Software Engineering student, seeking a challenging
              internship opportunity to apply and expand my technical skills. With a strong academic
              foundation and hands-on experience in various programming languages, I am eager to
              contribute to innovative projects and learn from experienced professionals in the industry.
            </p>

            {/* Social Media and Current Work Section */}
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">

              {/* Social Links */}
              <div className="space-y-2">
                <h2 className="font-bold text-center">Available On</h2>
                <ul className="flex space-x-6">
                  <li>
                    <a href="https://www.linkedin.com/in/divyansh-pandey-38a40a258" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="text-2xl hover:scale-110 duration-200 cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://leetcode.com/u/Pandey_Divyansh/" target="_blank" rel="noopener noreferrer">
                      <SiLeetcode className="text-2xl hover:scale-110 duration-200 cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/DIVYANSHPANDEY2003" target="_blank" rel="noopener noreferrer">
                      <VscGithub className="text-2xl hover:scale-110 duration-200 cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>

              {/* Current Skills */}
              <div className="space-y-2">
                <h2 className="font-bold text-center">Currently Working On</h2>
                <div className="flex space-x-6">
                  <SiMongodb className="text-3xl hover:scale-110 duration-200 rounded-full border-2 p-1 cursor-pointer" />
                  <SiExpress className="text-3xl hover:scale-110 duration-200 rounded-full border-2 p-1 cursor-pointer" />
                  <FaReact className="text-3xl hover:scale-110 duration-200 rounded-full border-2 p-1 cursor-pointer" />
                  <FaNodeJs className="text-3xl hover:scale-110 duration-200 rounded-full border-2 p-1 cursor-pointer" />
                </div>
              </div>

            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center md:justify-end md:ml-10 order-1 md:order-2">
            <img
              src="/my_image.jpg"
              className="rounded-full w-64 h-64 md:w-[450px] md:h-[450px] object-cover"
              alt="Divyansh Pandey"
            />
          </div>

        </div>
      </div>

      <hr className="my-8" />
    </>
  );
}

export default Home;
