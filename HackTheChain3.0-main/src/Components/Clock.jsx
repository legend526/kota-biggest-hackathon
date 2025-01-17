// Clock.jsx
import React, { useEffect, useState } from 'react';
import '../Styles/Clock.css'; // Import CSS styles

const Clock = () => {
  const [time, setTime] = useState({
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  const updateTime = () => {
    const date = new Date();
    const h = String(date.getHours()).padStart(2, '0');
    const m = String(date.getMinutes()).padStart(2, '0');
    const s = String(date.getSeconds()).padStart(2, '0');

    setTime({ hours: h, minutes: m, seconds: s });
  };

  useEffect(() => {
    const interval = setInterval(updateTime, 1000);
    updateTime(); // Initial call to set time immediately
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <figure>
      <div className="face top"><p className='clock'>{time.seconds}</p></div>
      <div className="face front"><p className='clock'>{time.minutes}</p></div>
      <div className="face left"><p className='clock'>{time.hours}</p></div>
    </figure>
  );
};

export default Clock;
