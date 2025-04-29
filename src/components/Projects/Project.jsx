import React from "react";
import libraryManagement from "/library_management.jpg";
import grocery from "/grocery.jpg";
import passwordGenerator from "/passwordGenerator.webp";
import bankManagement from "/bankManagement.webp";
import portfolio from "/portfolio.png";

function Project() {
  const projects = [
    {
      id: 1,
      image: portfolio,
      name: "Portfolio Website",
      description: "A personal portfolio website showcasing skills, projects, and contact details.",
      github: "https://github.com/DIVYANSHPANDEY2003/Portfolio.git",
    },
    {
      id: 2,
      image: bankManagement,
      name: "Bank Management System",
      description: "A banking system to manage accounts, transactions, and customer details.",
      // github: "LOST",
    },
    {
      id: 3,
      image: passwordGenerator,
      name: "Password Generator",
      description: "A tool to generate secure and random passwords with customizable settings.",
      github: "https://github.com/DIVYANSHPANDEY2003/Password-generator.git",
    },
    {
      id: 4,
      image: grocery,
      name: "Grocery Store Management",
      description: "A system to manage grocery store inventory, sales, and customer data.",
      github: "https://github.com/DIVYANSHPANDEY2003/Grocery.git",
    },
    {
      id: 5,
      image: libraryManagement,
      name: "Library Management System",
      description: "A system to manage library books, members, and transactions.",
      // github: "LOST",
    },
  ];

  return (
    <div name="Project" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 bg-gray-100 py-10 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-5">Projects</h1>
      <p className="text-lg text-gray-700 text-center px-5 md:px-20 leading-relaxed mb-10">
        Here are some of the projects I've worked on, showcasing my skills in full-stack development, problem-solving, and innovative software solutions.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(({ id, image, name, description, github }) => (
          <div
            key={id}
            className="border rounded-lg shadow-lg bg-white p-5 hover:shadow-xl transition-transform transform hover:scale-105 duration-300"
          >
            <img src={image} className="w-full h-48 object-cover rounded-lg mb-4" alt={name} />
            <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
            <p className="text-gray-700 text-sm mb-3">{description}</p>
            <div className="flex justify-center mt-4">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded-md"
              >
                View Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
