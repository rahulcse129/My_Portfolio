// Navbar.jsx
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-gradient-to-r from-blue-600 via-purple-700 to-pink-600 fixed top-0 left-0 w-full z-50 shadow-lg">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        <h1 className="text-3xl font-extrabold tracking-widest drop-shadow-md cursor-pointer hover:text-yellow-300 transition-colors duration-300">
          MyPortfolio
        </h1>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-10 text-lg font-semibold tracking-wide">
          {["about", "projects", "skills", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="relative group hover:text-yellow-300 transition-colors duration-300"
                onClick={closeMenu}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="absolute left-0 -bottom-1 w-0 h-1 bg-yellow-300 transition-all group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        <div
          className="md:hidden text-3xl cursor-pointer select-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
      </nav>

      {/* Mobile dropdown */}
      {isOpen && (
        <ul className="md:hidden bg-gradient-to-b from-blue-600 to-purple-700 text-white flex flex-col items-center gap-6 py-6 font-semibold tracking-wide text-xl">
          {["about", "projects", "skills", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="hover:text-yellow-300 transition-colors duration-300"
                onClick={closeMenu}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
