import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-10">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 flex flex-col items-center">
        <h1 className="text-2xl font-semibold mb-5">Stay Connected</h1>
        
        <div className="flex space-x-6 mb-8">
          <a href="https://leetcode.com/u/Pandey_Divyansh" aria-label="Leetcode" target="_blank" rel="noopener noreferrer">
            <SiLeetcode  className="cursor-pointer hover:text-blue-500 transition duration-300" size={28} />
          </a>
          
          <a href="https://www.linkedin.com/in/divyansh-pandey-38a40a258" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="cursor-pointer hover:text-blue-600 transition duration-300" size={28} />
          </a>
        </div>
        
        <div className="mt-8 border-t border-gray-600 pt-6 text-center">
          <p className="text-sm sm:text-base">&copy; 2025 My Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
