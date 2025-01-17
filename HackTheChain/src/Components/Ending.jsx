import iiitk from "/pictures/iiitk.png";
import PendulumAnimation from "./PendulumAnimation";
import "../Styles/Ending.css";

const Third = () => {
  return (
    <div className="min-h-screen ayush text-white relative">
      {/* Background Stars */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/path/to/your/stars_background_image')] bg-cover z-0"></div>

      {/* About Section */}
      <div
        id="about"
        className="z-10 relative p-6 md:p-20 flex flex-col md:flex-row md:space-x-8 bg-transparent shadow-lg"
      >
        {/* IIIT Kota Logo */}
        <div className="flex justify-center mb-6 md:mb-0">
          <img
            src={iiitk}
            alt="IIIT KOTA LOGO"
            className="h-20 md:h-32 w-auto shadow-xl"
          />
        </div>

        {/* About Content */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl md:text-4xl font-semibold text-center md:text-left text-shadow-lg">
            About IIIT Kota
          </h2>
          <p className="mt-4 text-sm md:text-lg max-w-md md:max-w-2xl text-center md:text-left text-shadow-md">
            IIIT Kota is a premier institute in Rajasthan, specializing in Computer Science and
            Engineering with focuses in AI. Through expert faculty, advanced facilities, and
            industry partnerships, IIIT Kota prepares students to excel in technology.
          </p>
        </div>

        {/* Pendulum Animation */}
        <div className="mt-8 md:mt-0 flex justify-center shadow-md">
          <PendulumAnimation />
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-transparent-900 text-white py-8 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-evenly items-start space-y-6 md:space-y-0">
            {/* Useful Links */}
            <div className="space-y-2">
              <h4 className="text-pink-400 font-semibold text-shadow-sm">Useful Links</h4>
              <ul className="space-y-1">
                <li>
                  <a href="#overview" className="text-purple-300 hover:underline text-shadow-sm">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#sponsors" className="text-purple-300 hover:underline text-shadow-sm">
                    Sponsors
                  </a>
                </li>
                <li>
                  <a href="#judging" className="text-purple-300 hover:underline text-shadow-sm">
                    Judging
                  </a>
                </li>
                <li>
                  <a href="#faqs" className="text-purple-300 hover:underline text-shadow-sm">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="space-y-2">
              <h4 className="text-pink-400 font-semibold text-shadow-sm">Contact Us</h4>
              <p className="text-sm text-shadow-sm">+91 7014151228</p>
              <p className="text-sm text-shadow-sm">codebase@iiitkota.ac.in</p>
            </div>

            {/* Go to Projects Button */}
            <div>
              <a
                href="#projects"
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition duration-200 shadow-md"
              >
                Go to Projects
              </a>
            </div>
          </div>
          {/* Copyright Section */}
          <div className="mt-8 text-center text-gray-500 text-sm text-shadow-sm">
            All rights reserved. © HackTheChain 2.0
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third;
