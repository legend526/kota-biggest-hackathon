import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [trailStars, setTrailStars] = useState([]);
  const [isMoving, setIsMoving] = useState(false);
  const [lastMoveTime, setLastMoveTime] = useState(Date.now());

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX: x, clientY: y } = event;

      setCursorPosition({ x, y });
      setIsMoving(true);
      setLastMoveTime(Date.now());

      const newStar = {
        x: x + Math.random() * 0.4 - 0.2,
        y: y + Math.random() * 0.4 - 0.2,
        size: Math.random() * 10 + 5,
      };

      setTrailStars((prevStars) => [newStar, ...prevStars].slice(0, 20)); // Max 20 stars
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (Date.now() - lastMoveTime > 300) {
        setIsMoving(false);
      }
    }, 100);
    return () => clearInterval(timer);
  }, [lastMoveTime]);

  return (
    <div className="fixed top-0 left-0 pointer-events-none z-[99]">
      {/* Hide the default cursor globally */}
      <style>
        {`body, * { cursor: none !important; }`}
      </style>

      {/* Main circular cursor */}
      <div
        className={`absolute bg-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 ${
          isMoving ? '' : 'transition-transform duration-500 scale-110'
        }`}
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
          width: '10px',
          height: '10px',
          transition: 'width 0.2s ease, height 0.2s ease',
        }}
      />

      {/* Circular trail */}
      {trailStars.map((star, index) => (
        <div
          key={index}
          className={`absolute bg-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 ${
            !isMoving ? 'transition-transform duration-500' : ''
          }`}
          style={{
            left: star.x,
            top: star.y,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: isMoving ? 1 - index * 0.05 : 0, // Fade stars when cursor stops
            transform: isMoving
              ? 'scale(1)'
              : `translate(${index * 2}px, ${index * 2}px) scale(0.1)`, // Merge towards main circle
            transition: `transform 0.5s ease ${index * 0.05}s, opacity 0.3s ease`, // Staggered merge effect
          }}
        />
      ))}
    </div>
  );
};

export default CustomCursor;
