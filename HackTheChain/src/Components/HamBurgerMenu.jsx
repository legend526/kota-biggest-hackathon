import React, { useState } from "react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0E201C] text-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-2">
          <img
            src="/pictures/HTC_logo.png"
            alt="Logo"
            className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14"
          />

          <div className="text-2xl font-bold tracking-tighter">HackTheChain3.0</div>
        </div>

        <button
          className="md:hidden flex flex-col space-y-1.5 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <span
            className={`w-6 h-1 bg-white rounded-lg transition-transform ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-1 bg-white rounded-lg transition-opacity ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-1 bg-white rounded-lg transition-transform ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        <ul className="hidden md:flex space-x-6">
          {["Home", "About", "Prizes", "Sponsors", "FAQs"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-gray-400 transition"
                onClick={() => scrollToSection(item.toLowerCase())}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-[#082613] text-white shadow-lg transition-transform transform ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col text-center py-4 space-y-2">
          {["Home", "About-us", "Prizes", "Sponsors", "FAQs"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="block py-2 hover:bg-green-700 transition"
                onClick={() => scrollToSection(item.toLowerCase())}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default HamburgerMenu;
