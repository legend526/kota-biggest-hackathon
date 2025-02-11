import React, { useState, useEffect, useRef } from "react";
import BlurredSmokyCircle from "./Shadow";

const Home = () => {
  const [text, setText] = useState(""); // Typing effect state
  const [showContent, setShowContent] = useState(false); // State for the card container
  const [typingComplete, setTypingComplete] = useState(false); // To remove the cursor
  const [triangleVisible, setTriangleVisible] = useState(false); // Triangle visibility state
  const fullText = "HaackTheChain 3.0"; // Full text to display

  // Sound references
  const typingSoundRef = useRef(null);
  const swipingSoundRef = useRef(null); // Swiping sound for card

  useEffect(() => {
    let index = 0;
    typingSoundRef.current = new Audio("/typing.mp3"); // Adjust path if needed
    swipingSoundRef.current = new Audio("/swipe.mp3"); // Swiping sound for card

    // Play typing sound in a loop
    typingSoundRef.current.loop = true;
    typingSoundRef.current.volume = 0.6;
    typingSoundRef.current.play().catch((error) => console.error("Typing sound error:", error));

    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(interval);
        typingSoundRef.current.pause(); // Stop typing sound
        setTypingComplete(true);

        // Show card after typing is complete
        setTimeout(() => {
          setShowContent(true);
          // Play swiping sound when the card appears
          swipingSoundRef.current.play().catch((error) => console.error("Swiping sound error:", error));

          // Stop the swipe sound after 5 seconds
          setTimeout(() => {
            swipingSoundRef.current.pause();
            swipingSoundRef.current.currentTime = 0; // Reset the sound to the beginning
          }, 1500); // 5000 ms = 5 seconds
        }, 500);

        setTimeout(() => setTriangleVisible(true), 1000);
      }
    }, 150); // Typing speed in milliseconds

    return () => {
      clearInterval(interval);
      if (typingSoundRef.current) typingSoundRef.current.pause();
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center mb-2 bg-transparent text-white px-4 sm:px-8 min-h-screen relative">
      {/* Text Section */}
      <div className="absolute top-40 left-12">
      <BlurredSmokyCircle />
      </div>
      
      <div className="w-full px-80 space-y-16 text-center z-10">
      <h1
          className="text-3xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-white mt-20"
          style={{
              textShadow:
                "0 0 1px  rgba(69, 248, 130, 0.66), 0 0 5px  rgba(69, 248, 130, 0.66), 0 0 10px  rgba(69, 248, 130, 0.66), 0 0 40px rgba(69, 248, 130, 0.66)",
            }}
        >
          CodeBase presents
        </h1>
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold font-sans text-transparent bg-clip-text"
          style={{
    backgroundImage: "linear-gradient(to right, #15803D, #73baa3, #fff)",
  }}
          // style={{ textShadow: "-1px 4px 0px rgba(69, 248, 130, 0.66)" }}
        >
          {text}
          {/* HackTheChain 3.0 */}
          {!typingComplete && <span className="text-pink-500">|</span>}
        </h1>

        {/* Card Section */}
        <div
        className="w-full mx-auto"
          // className={`${
          //   showContent ? "animate-fade-up" : "opacity-0"
          // } bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md mx-auto mt-6 ml-0`}
          // style={{
          //   background: "linear-gradient(135deg,rgba(23, 31, 37, 0.46), rgb(81, 209, 119))",
          // }}
        >
          <h2
            className="text-xl font-rubik sm:text-2xl md:text-2xl text-white"
            style={{
              textShadow:
                "0 0 5px  rgba(69, 248, 130, 0.66), 0 0 10px  rgba(69, 248, 130, 0.66), 0 0 20px  rgba(69, 248, 130, 0.66), 0 0 40px rgba(69, 248, 130, 0.66)",
            }}
          >
            The Biggest Hackathon in Kota City
          </h2>
          <p className="text-sm sm:text-lg leading-relaxed mt-4 font-roboto">
            As part of our Tech-Summit organized by TechKnow Society, join the ultimate hackathon for developers of all skill levels! Hack your way to success at HackTheChain 3.0!
          </p>
        </div>

        <div className="flex justify-center mb-[20]">
  <button className="px-6 sm:px-8 md:px-10 py-3 border border-green-500 hover:bg-green-900 text-white font-semibold text-sm sm:text-md md:text-lg rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center">
    <img src="/devfolio-icon.png" width={25} height={25} alt="logo" className="mr-2 sm:mr-3 w-5 sm:w-6 md:w-7" />
    Register
  </button>
</div>
        

      </div>

      {/* Image Section */}
      {/* <div className="md:w-1/2 w-full flex justify-center mt-6 md:mt-0">
        <img
          src="/pictures/heroimage.png"
          alt="HackTheChain Illustration"
          className="max-w-[80%] sm:max-w-[90%] md:max-w-[100%] lg:max-w-[95%] h-auto hover:wobble"
        />
      </div> */}

      {/* Green Triangular Section */}
      <div
        className={`absolute bottom-0 w-full ${triangleVisible ? "opacity-100" : "opacity-0"}`}
        style={{
          clipPath: "polygon(100% 100%, 0% 0%,0% 100%, 100% 0%, 100% 100%)",
          backgroundColor: "#45F882",
          height: "40px",
          transition: "opacity 1s ease-out",
          zIndex: "-1",
        }}
      ></div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes wobble {
          0%, 100% { transform: rotate(0deg); }
          15% { transform: rotate(-5deg); }
          30% { transform: rotate(5deg); }
          45% { transform: rotate(-5deg); }
          60% { transform: rotate(5deg); }
          75% { transform: rotate(-2deg); }
          90% { transform: rotate(2deg); }
        }
        .hover\\:wobble:hover { animation: wobble 1s ease-in-out; }
        .text-pink-500 { animation: blink 1s step-end infinite; }
        @keyframes blink { 50% { opacity: 0; } }
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up { animation: fadeUp 1s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default Home;
