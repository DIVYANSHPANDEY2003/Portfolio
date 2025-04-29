import React from "react";
import javaImg from "/java.png";
import pythonImg from "/python.webp";
import htmlCssImg from "/html-css.png";
import reactImg from "/reactjs.png";
import csFundamentalsImg from "/cs-fundamentals.png";

function Skills() {
  const skillItems = [
    { id: 1, name: "Java", progress: 70, image: javaImg },
    { id: 2, name: "Python", progress: 65, image: pythonImg },
    { id: 3, name: "HTML & CSS", progress: 60, image: htmlCssImg },
    { id: 4, name: "ReactJS", progress: 55, image: reactImg },
    { id: 5, name: "Computer Science Fundamentals", progress: 70, image: csFundamentalsImg },
  ];

  return (
    <div name="Skills" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 bg-gray-100 py-10 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-5">Skills</h1>
      <p className="text-lg text-gray-700 text-center px-5 md:px-20 leading-relaxed mb-10">
        Here are some of the technical skills I have acquired and continuously improve upon.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skillItems.map(({ id, name, progress, image }) => (
          <div
            key={id}
            className="border rounded-lg shadow-lg bg-white p-5 flex flex-col items-center hover:shadow-xl transition-transform transform hover:scale-105 duration-300"
          >
            <img src={image} alt={name} className="w-20 h-20 object-contain mb-4" />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-3">
              <div
                className="bg-green-500 h-2.5 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-gray-700 text-sm">{progress}% Learned</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
