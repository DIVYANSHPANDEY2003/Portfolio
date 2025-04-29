import React from 'react';

function About() {
  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
      <div className="bg-gray-100 py-10 px-6 md:px-16 rounded-lg shadow-lg">
        
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-green-700 mb-8">
          About Me
        </h1>

        {/* Introduction */}
        <p className="text-lg text-gray-700 text-center leading-relaxed">
          I'm a Computer Science & Engineering undergraduate at United Institute of Technology. 
          Passionate about software development, I'm seeking a challenging internship opportunity 
          to apply and expand my technical skills. With a solid foundation in software engineering, 
          I aspire to work on innovative projects and learn from industry professionals.
        </p>

        {/* Education Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Education and Training
          </h2>
          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="font-semibold">Bachelor of Technology in Computer Science and Engineering</h3>
              <p>United Institute of Technology, Allahabad, Uttar Pradesh, India</p>
              <p className="text-sm font-semibold">2023 - 2026</p>
            </div>
            <div>
              <h3 className="font-semibold">Bachelor of Science in Mathematics and Physics</h3>
              <p>Allahabad State University, Allahabad, Uttar Pradesh, India</p>
              <p className="text-sm font-semibold">2020 - 2023</p>
            </div>
            <div>
              <h3 className="font-semibold">Intermediate in Science</h3>
              <p>New Angles Sr. Sec. School, Pratapgarh, Uttar Pradesh, India</p>
              <p className="text-sm font-semibold">2019 - 2020</p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Skills and Expertise
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Frontend & Backend Development: HTML, CSS, JavaScript, ReactJS, NodeJS, ExpressJS.</li>
            <li>Programming Languages: Java, Python, MySQL.</li>
            <li>Core Subjects: Object-Oriented Programming, Operating Systems, Data Structures & Algorithms, Database Management Systems.</li>
          </ul>
        </div>

        {/* Achievements Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Achievements and Certifications
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Completed a one-week bootcamp on Security Fundamentals & Threat Defense at MNNIT-Allahabad.</li>
            <li>Completed a 4.5-month-long MERN Stack Web Development Bootcamp at CodeHelp.</li>
            <li>Completed a 1-month-long Data Science Bootcamp.</li>
            <li>Completed Core Java Course.</li>
            <li>Completed Basics of Python Course.</li>
          </ul>
        </div>

        {/* Mission Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Mission Statement
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            My mission is to leverage my technical skills and knowledge to develop innovative software solutions 
            that address real-world challenges. I am committed to continuous learning and professional growth, 
            aspiring to contribute positively to the field of software engineering while making a meaningful impact on society.
          </p>
        </div>

      </div>
    </div>
  );
}

export default About;
