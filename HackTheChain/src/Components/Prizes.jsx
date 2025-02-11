import React from "react";
import { motion } from "framer-motion";
import { FaTrophy } from "react-icons/fa";

const tournaments = [
  {
    prize: 2000,
    title: "PRESTIGIOUS",
    places: "2nd",
    color: "bg-green-500",
    brg: "border-green-500",
    rewards: [75000, 65000, 55000],
    image: "/pictures/2nd.png",
  },
  {
    prize: 5000,
    title: "SUPREME",
    places: "1st",
    color: "bg-yellow-500",
    brg: "border-yellow-500",
    rewards: [75000, 65000, 55000],
    image: "/pictures/1st.png",
  },
  {
    prize: 1000,
    title: "RENOWNED",
    places: "3rd",
    color: "bg-green-500",
    brg: "border-green-500",
    rewards: [75000, 65000, 65000],
    image: "/pictures/3rd.png",
  },
];

const TournamentCard = ({ prize, title, places, color, rewards, image, brg }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      whileHover={{ scale: 1.05 }}

      className="relative bg-gray-900 rounded-xl p-6 text-center w-80 h-full shadow-md shadow-blue-950
                 border-2 border-transparent hover:border-green-400 hover:shadow-green-900 transition-all duration-75 ease-in-out 
                 transform"
    >
      {/* Top Prize Banner */}
      <div
        className={`font-roboto rounded-tl-xl absolute top-0 left-0 px-8 py-3 flex items-center gap-2 ${color} 
                    shadow-lg transform rotate-[-2deg] hover:rotate-0 transition-all duration-75 ease-in-out`}
      >
        <FaTrophy className="text-yellow-400 text-2xl drop-shadow-md animate-pulse" />
        <span className="text-black font-bold text-lg tracking-wide">
          {prize.toLocaleString()}
        </span>
      </div>

      {/* Title Section */}
      <h3 className="text-green-400 text-xl font-bold mt-8">HACKATHON</h3>
      <h2 className="text-white text-3xl font-bold mb-4 shadow-lg">{title}</h2>

      {/* Place Indicator */}
      <div
        className={`text-white h-16 bg-gray-950 ${brg} opacity-90 border-2 flex justify-center items-center 
                    font-roboto font-medium rounded-lg py-2 mb-6 text-2xl`}
      >
        {places} Place
      </div>

      {/* Image */}
      <img
        src={image}
        alt={`${title} illustration`}
        className="w-full h-52 rounded-lg mb-4 object-contain"
      />
    </motion.div>
  );
};

const TournamentSection = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-16 px-8 my-16 bg-gray-950">
      <h1 className="text-green-500 text-3xl font-bold mb-4 newfont">OUR PRIZES</h1>
      <h2 className="text-white text-5xl font-bold mb-8">COMPETE TO EARN REWARDS</h2>

      <div className="w-24 h-2 bg-gradient-to-r from-green-400 to-green-600 rounded-lg mb-24"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tournaments.map((tournament, index) => (
          <TournamentCard key={index} {...tournament} />
        ))}
      </div>
    </div>
  );
};

export default TournamentSection;
