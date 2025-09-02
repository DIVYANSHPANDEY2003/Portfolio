import { useState } from "react";
import { Link } from "react-router-dom";
import { VscMenu, VscChromeClose } from "react-icons/vsc";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: 1, text: "Home", link: "/" },
    { id: 2, text: "About", link: "/about" },
    { id: 3, text: "Projects", link: "/projects" },
    { id: 4, text: "Skills", link: "/skills" },
    { id: 5, text: "Contact", link: "/contact" },
  ];

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="flex justify-between items-center h-16">

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="w-12 h-12 rounded-full" />
          <div className="flex flex-col">
            <h1 className="font-semibold text-xl cursor-pointer">
              Divyans
              <span className="text-green-500 text-2xl">h</span>
            </h1>
            <p className="text-sm -mt-1">Web Developer</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map(({ id, text, link }) => (
            <li key={id} className="hover:scale-105 duration-200 cursor-pointer">
              <Link to={link}>{text}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col space-y-1 cursor-pointer"
        >
          {menuOpen ? <VscChromeClose size={24} /> : <VscMenu size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-white z-40 flex flex-col justify-center items-center space-y-8 text-xl">
          {navItems.map(({ id, text, link }) => (
            <li key={id} className="list-none hover:scale-105 duration-200 font-semibold cursor-pointer">
              <Link to={link} onClick={() => setMenuOpen(false)}>{text}</Link>
            </li>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
