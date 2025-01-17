import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const PendulumAnimation = () => {
  const pendulums = [
    { id: 1, icon: "fab fa-facebook-f" },
    { id: 2, icon: "fab fa-twitter" },
    { id: 3, icon: "fab fa-instagram" },
    { id: 4, icon: "fab fa-linkedin-in" },
    { id: 5, icon: "fab fa-github" },
  ];

  const [swingingPendulum, setSwingingPendulum] = useState(null);

  useEffect(() => {
    if (swingingPendulum !== null) {
      let nextPendulum = swingingPendulum === 1 ? 5 : 1;
      const timeout = setTimeout(() => setSwingingPendulum(nextPendulum), 2000);

      return () => clearTimeout(timeout); // Clear the timeout on unmount
    }
  }, [swingingPendulum]);

  const startSwing = () => {
    setSwingingPendulum(1); // Start by swinging the first pendulum
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative flex space-x-1">
        {pendulums.map((pendulum, index) => (
          <div key={pendulum.id} className="relative flex flex-col items-center">
            {/* Pendulum String */}
            <div className="w-0.5 h-32 bg-white"></div>

            {/* Pendulum Bob */}
            <div
              className={`w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg ${
                swingingPendulum === pendulum.id ? "animate-swing" : ""
              }`}
              onClick={startSwing}
            >
              <i className={`${pendulum.icon} text-xl`}></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PendulumAnimation;
