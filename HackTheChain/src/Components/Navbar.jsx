import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "../Styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-950 opacity-75 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-20">
        {/* Left Section: Icons/Logo */}
        <div className="flex items-center space-x-4">
          {/* Hackathon Icons/Logos */}

      {/* Image as Content */}
      <div className="image-container mt-8">
        <img
          src="/pictures/output.png" // Add the correct path to your image
          alt="Hack the Chain Logo"
          className="w-full h-auto object-cover" // Tailwind classes for styling
          style={{
            maxWidth: '600px', // Custom inline style if needed
            margin: '0 auto',  // Centering the image
            height:'90px',
            width:'190px',
          }}
        />
      </div>
          <span className="text-xl font-bold">HackTheChain3.0</span>
        </div>

        {/* Right Section: Navigation */}
        <div className="hidden md:flex space-x-6 items-center text-xl">
          <a
            href="#home"
            className="hover:text-yellow-400 transition duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-yellow-400 transition duration-300"
          >
            About
          </a>
          <a
            href="#schedule"
            className="hover:text-yellow-400 transition duration-300"
          >
            Schedule
          </a>
          <a
            href="#sponsors"
            className="hover:text-yellow-400 transition duration-300"
          >
            Sponsors
          </a>
          <a
            href="#contact"
            className="hover:text-yellow-400 transition duration-300"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 text-white nav-elements">
          <a
            href="#home"
            className="block py-2 px-4 hover:bg-gray-700 transition duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="block py-2 px-4 hover:bg-gray-700 transition duration-300"
          >
            About
          </a>
          <a
            href="#schedule"
            className="block py-2 px-4 hover:bg-gray-700 transition duration-300"
          >
            Schedule
          </a>
          <a
            href="#sponsors"
            className="block py-2 px-4 hover:bg-gray-700 transition duration-300"
          >
            Sponsors
          </a>
          <a
            href="#contact"
            className="block py-2 px-4 hover:bg-gray-700 transition duration-300"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
