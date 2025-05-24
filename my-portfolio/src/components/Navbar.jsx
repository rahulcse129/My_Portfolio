import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Toggle dark mode class on <html>
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <header className="bg-gradient-to-r from-blue-600 via-purple-700 to-pink-600 fixed top-0 left-0 w-full z-50 shadow-lg">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-extrabold tracking-widest drop-shadow-md cursor-pointer hover:text-yellow-300 transition-colors duration-300">
            MyPortfolio
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl ml-2"
            title="Toggle Dark Mode"
          >
            {darkMode ? "🌞" : "🌙"}
          </button>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-10 text-lg font-semibold tracking-wide">
          {["about", "projects", "skills", "contact"].map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={closeMenu}
                className="relative group cursor-pointer hover:text-yellow-300 transition-colors duration-300"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="absolute left-0 -bottom-1 w-0 h-1 bg-yellow-300 transition-all group-hover:w-full"></span>
              </Link>
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
              <Link
                to={item}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={closeMenu}
                className="hover:text-yellow-300 transition-colors duration-300 cursor-pointer"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
