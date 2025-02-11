import iiitk from "/pictures/iiitk.png";
import PendulumAnimation from "./PendulumAnimation";
import "../Styles/Ending.css";
// import logo from "../../public/pictures/HTC_logo.png";
const Third = () => {
  return (
    <div className="bg-emerald-950 text-white py-10  mt-40">
      <div className="container mx-auto px-6 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">

          {/* Logo and Description */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center ">
              <div className="h-10 w-20 flex items-center justify-center rounded-lg ml-10">
                <img src="/pictures/codebase.png" alt="Logo" className="w-10 h-10" />

                <span className="text-white text-2xl font-bold ml-3 font-roboto hover:text-green-400 ">CODEBASE</span>

              </div>
            </div>
            <p className="text-gray-400 max-w-xs font-serif mt-1">
              The biggest hackathon in Kota City, presented by the IIIT Kota in association with Codebase IIIT Kota. This event on Devfolio promises a monumental experience, fostering innovation and collaboration. Notably, it stands as the annual flagship Hackathon of IIIT Kota, promising an immersive experience for all participants.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/iiitkota_codebase?igsh=cThlM2FxODkxZnVq" className="text-gray-400 hover:text-green-400 text-2xl">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/company/codebase-iiitkota/posts/?feedView=all" className="text-gray-400 hover:text-green-400 text-2xl">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://discord.com/invite/3dUMG3dB5F" className="text-gray-400 hover:text-green-400 text-2xl">
                <i className="fab fa-discord"></i>
              </a>
              <a href="https://twitter.com/iiitkcodebase" className="text-gray-400 hover:text-green-400 text-2xl">
                <i className="fab fa-twitter"></i>
              </a>



            </div>
            <aside className="grid-flow-col items-center bg-neutral text-neutral-content">


              <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </aside>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-xl mb-3 font-roboto hover:text-green-400 ">Quick Links</h4>
            <ul className="space-y-2  font-serif">
              <li><a href="#home" className="text-gray-400 hover:underline">Home</a></li>
              <li><a href="#about-us" className="text-gray-400 hover:underline">About Us</a></li>
              <li><a href="#timeline" className="text-gray-400 hover:underline">Timeline</a></li>
              <li><a href="#stats" className="text-gray-400 hover:underline">Stats</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-white font-bold text-xl mb-4 font-roboto  hover:text-green-400">Supports</h4>
            <ul className="space-y-2 font-serif">
              <li><a href="#" className="text-gray-400 hover:underline">Help & Support</a></li>
              <li><a href="#" className="text-gray-400 hover:underline">+91 7665093553</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third;
