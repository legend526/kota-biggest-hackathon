import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Edit3 } from "lucide-react";
import logo from "../../public/pictures/HTC_logo.png";

export default function NavbarExp() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Navigation links
  const navLinks = ["HOME", "ABOUT US", "TIMELINE", "DOMAINS", "STATS", "CONTACT"];

  // Scroll effect to hide/show navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsNavbarVisible(false); // Scrolling down
      } else {
        setIsNavbarVisible(true); // Scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="flex justify-center mx-auto items-center">
    <motion.nav
      className={`bg-[#0E201C] text-white rounded-lg border border-green-800 px-10 py-1 flex items-center justify-between fixed top-2 w-[60%] z-50 shadow-lg transition-transform duration-300 ${
        isNavbarVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Logo with Image */}
      <motion.div  className="flex items-center"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => console.log('hover started!')}>
        <img src={logo} alt="Logo" className="h-16"/>
      </motion.div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-14 font-roboto text-xs font-medium">
        {navLinks.map((link, index) => (
          <motion.a
            key={index}
            href={`#${link.toLowerCase().replace(/ /g, "-")}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative group text-white hover:text-green-500 transition duration-300"
          >
            {link}
            {/* Diagonal Line Effect */}
            <span className="absolute top-0 left-0 w-full h-[2px] bg-green-500 scale-0 group-hover:scale-100 origin-top-left transform transition-transform duration-300"></span>
          </motion.a>
        ))}
      </div>

      {/* Hexagon Sign In Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center px-4 py-2 text-xs font-semibold text-gray-300 bg-green-700 border border-green-400 shadow-md hover:text-white hover:bg-green-950 hover:border-green-600 transition duration-300 clip-hexagon"
      >
        Download Brochure
      </motion.button>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="focus:outline-none"
        >
          {isMenuOpen ? (
            <X className="text-white w-6 h-6" />
          ) : (
            <Menu className="text-white w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full left-0 w-full bg-gray-800 text-white flex flex-col space-y-4 py-4 px-6 shadow-lg"
        >
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={`#${link.toLowerCase().replace(/ /g, "-")}`}
              className="relative group text-white hover:text-green-500 transition duration-300"
            >
              {link}
              {/* Diagonal Line Effect */}
              <span className="absolute top-0 left-0 w-full h-[2px] bg-green-500 scale-0 group-hover:scale-100 origin-top-left transform transition-transform duration-300"></span>
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
    </div>
  );
}