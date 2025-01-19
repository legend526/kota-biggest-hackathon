import React, { useState, useEffect } from "react";

const Home = () => {
  const [text, setText] = useState(""); // State for the typing effect
  const [showContent, setShowContent] = useState(false); // State to show the secondary content
  const fullText = "HaackTheChain 3.0"; // Full text to display

  useEffect(() => {
    let index = 0; // Index to track the current character

    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText.charAt(index)); // Append one character at a time
        index++;
      } else {
        clearInterval(interval); // Stop the interval when the full text is displayed
        setTimeout(() => setShowContent(true), 500); // Show the secondary content after typing effect
      }
    }, 150); // Typing speed in milliseconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []); // Empty dependency array to run only on component mount

  return (
    <div className="flex flex-col md:flex-row items-center justify-between mb-4 bg-transparent text-white p-8 min-h-screen">
      {/* Text Section */}
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          {text}
          <span className="text-pink-500">|</span> {/* Optional blinking cursor */}
        </h1>
        <h2
          className={`text-2xl text-white ${
            showContent ? "animate-fade-up" : "opacity-0"
          }`}
          style={{
            textShadow:
              "0 0 5px #A855F7, 0 0 10px #A855F7, 0 0 20px #A855F7, 0 0 40px #A855F7",
          }}
        >
          The Biggest Hackathon in Kota City
        </h2>
        <p
          className={`text-lg leading-relaxed ${
            showContent ? "animate-fade-up" : "opacity-0"
          }`}

          style = {{fontFamily : "monospace"}}
        >
          As part of our Tech-Summit organized by TechKnow Society, join the
          ultimate hackathon for developers of all skill levels! Hack your way
          to success at HackTheChain 3.0!
        </p>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <img
          src="/pictures/logo2.png"
          alt="HackTheChain Illustration"
          className="max-w-full h-auto hover:wobble"
        />
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes wobble {
          0%,
          100% {
            transform: rotate(0deg);
          }
          15% {
            transform: rotate(-5deg);
          }
          30% {
            transform: rotate(5deg);
          }
          45% {
            transform: rotate(-5deg);
          }
          60% {
            transform: rotate(5deg);
          }
          75% {
            transform: rotate(-2deg);
          }
          90% {
            transform: rotate(2deg);
          }
        }
        .hover\\:wobble:hover {
          animation: wobble 1s ease-in-out;
        }
        .text-pink-500 {
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }

        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(20px); /* Start from slightly below */
          }
          100% {
            opacity: 1;
            transform: translateY(0); /* Move to original position */
          }
        }
        .animate-fade-up {
          animation: fadeUp 1s ease-out forwards; /* Fade and slide up */
        }
      `}</style>
    </div>
  );
};

export default Home;
