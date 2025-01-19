import React, { useState } from "react";
import "../Styles/HamBurgerMenu.css";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu open/close
  const toggleMenu = () => setIsOpen(!isOpen);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative p-5">
      {/* Hamburger Icon */}
      <button
        className="flex flex-col justify-around w-4 h-4 bg-transparent border-none outline-none"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
        aria-expanded={isOpen ? "true" : "false"}
      >
        <span
          className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${
            isOpen ? "rotate-45 translate-y-2.5" : ""
          }`}
        ></span>
        <span
          className={`h-1 w-full bg-white rounded-lg transition duration-300 ease-in-out ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${
            isOpen ? "-rotate-45 -translate-y-2.5" : ""
          }`}
        ></span>
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute left-0 mt-2 w-48 bg-transparent text-white rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "scale-100 opacity-100" : "scale-75 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-row">
          <li className="px-2 py-2 hover:bg-gray-700">
            <a href="#Home" onClick={() => scrollToSection("Home")}>Home</a>
          </li>
          <li className="px-2 py-2 hover:bg-gray-700">
            <a href="#about" onClick={() => scrollToSection("about")}>About</a>
          </li>
          {/* <li className="px-4 py-2 hover:bg-gray-700">
            <a href="#timeline" onClick={() => scrollToSection("timeline")}>Timeline</a>
          </li> */}
          <li className="px-2 py-2 hover:bg-gray-700">
            <a href="#prizes" onClick={() => scrollToSection("prizes")}>Prizes</a>
          </li>
          <li className="px-2 py-2 hover:bg-gray-700">
            <a href="#sponsors" onClick={() => scrollToSection("sponsors")}>Sponsors</a>
          </li>
          <li className="px-2 py-2 hover:bg-gray-700">
            <a href="#FAQs" onClick={() => scrollToSection("FAQs")}>FAQs</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
