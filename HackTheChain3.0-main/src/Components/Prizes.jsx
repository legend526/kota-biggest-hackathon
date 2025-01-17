import React, { useState, useEffect, useRef } from 'react';
import first from "/pictures/first.png";
import second from "/pictures/second.png";
import third from "/pictures/third.png";
import "../Styles/Prizes.css";

const trophies = [
  {
    image: first,
    title: 'Winner',
    color: 'bg-white/65',
    borderColor: 'border-yellow-400',
    details: '1st place prize details go here.',
  },
  {
    image: second,
    title: 'Runner-Up',
    color: 'bg-gray-800',
    borderColor: 'border-gray-500',
    details: '2nd place prize details go here.',
  },
  {
    image: third,
    title: 'Third Place',
    color: 'bg-gray-800',
    borderColor: 'border-orange-700',
    details: '3rd place prize details go here.',
  },
];

const TrophyCard = ({ image, title, color, borderColor, details }) => {
  const [isOpen, setIsOpen] = useState(false);
  const cardRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (cardRef.current && !cardRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`h-full w-full rounded-xl shadow-lg ring-1 ring-black/5 bg-white/20 backdrop-blur-xl border-0 ${borderColor} group relative p-6 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl`}
      style={{ width: '100%', height: 'auto' }}
    >
      <div
        className="flex items-center justify-center p-4"
        style={{ width: '100%', height: '70%' }}
      >
        <img
          src={image}
          alt="Trophy"
          className="w-full h-auto object-contain transition-transform duration-300 ease-in-out hover:scale-125"
          style={{ transform: 'perspective(500px) rotateX(15deg) rotateY(-10deg)' }}
        />
      </div>
      <div className="mt-4 text-center flex flex-col items-center">
        <h3 className="text-white text-xl font-bold">{title}</h3>
        <div className="cursor-pointer mt-2" onClick={toggleDropdown}>
          <svg
            className={`w-6 h-6 text-white transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
      {isOpen && (
        <div
          className="absolute inset-0 bg-gray-900 bg-opacity-90 rounded-lg flex items-center justify-center p-4 text-white"
          style={{ zIndex: 10 }}
        >
          <div className="text-center">{details}</div>
        </div>
      )}
    </div>
  );
};

const Second = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-8"
    >
      <h1 className="text-5xl font-bold text-white mb-12 drop-shadow-lg">Prizes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {trophies.map((trophy, index) => (
          <TrophyCard
            key={index}
            image={trophy.image}
            title={trophy.title}
            color={trophy.color}
            borderColor={trophy.borderColor}
            details={trophy.details}
          />
        ))}
      </div>
    </div>
  );
};

export default Second;
