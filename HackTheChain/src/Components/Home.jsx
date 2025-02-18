import { useState, useEffect } from "react";
import BlurredSmokyCircle from "./Shadow";

const Home = () => {
  const [text, setText] = useState(""); 
  const [showContent, setShowContent] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);
  const [triangleVisible, setTriangleVisible] = useState(false);
  const fullText = "HackTheChain 3.0";
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        setTypingComplete(true);

        setTimeout(() => setShowContent(true), 500);
        setTimeout(() => setTriangleVisible(true), 1000);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center mb-2 bg-transparent text-white px-4 sm:px-8 min-h-screen relative">
      <div className="absolute top-40 left-12">
        <BlurredSmokyCircle />
      </div>

      <div className="w-full px-8 sm:px-20 md:px-40 flex flex-col gap-10 text-center z-10 sm:text-[500px]">
        <h1
          className="text-3xl sm:text-xl md:text-2xl lg:text-6xl font-bold text-white mt-20"
          style={{
            textShadow:
              "0 0 1px rgba(69, 248, 130, 0.66), 0 0 5px rgba(69, 248, 130, 0.66), 0 0 10px rgba(69, 248, 130, 0.66), 0 0 40px rgba(69, 248, 130, 0.66)",
          }}
        >
          CodeBase presents
        </h1>
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold font-sans text-transparent bg-clip-text"
          style={{
            backgroundImage:
              "linear-gradient(to right, #15803D, #73baa3, #fff)",
          }}
        >
          {text}
          {!typingComplete && <span className="text-pink-500">|</span>}
        </h1>

        {/* Card Section */}
        <div className="w-full mx-auto">
          <h2
            className="text-xl font-rubik sm:text-2xl md:text-2xl text-white"
            style={{
              textShadow:
                "0 0 5px rgba(69, 248, 130, 0.66), 0 0 10px rgba(69, 248, 130, 0.66), 0 0 20px rgba(69, 248, 130, 0.66), 0 0 40px rgba(69, 248, 130, 0.66)",
            }}
          >
            The Biggest Hackathon in Kota City
          </h2>
          <p className="text-sm sm:text-lg leading-relaxed mt-4 font-roboto">
            As part of our Tech-Summit organized by TechKnow Society, join the
            ultimate hackathon for developers of all skill levels! Hack your way
            to success at HackTheChain 3.0!
          </p>
        </div>

        <div className="flex justify-center relative z-20 mb-10">
          <a
            href="https://unstop.com/hackathons/hackthechain-30-indian-institute-of-information-technology-iiit-kota-1405574?lb=4m3FgpZI&utm_medium=Share&utm_source=shortUrl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white border border-green-500 rounded-full font-bold 
            text-sm sm:text-base 
            py-2 px-4 sm:py-3 sm:px-8 
            shadow-lg transition-transform transform hover:scale-105 hover:bg-green-600 
            relative z-20 
            w-auto sm:w-auto 
            text-center
            whitespace-nowrap max-w-[420px] sm:max-w-[300px] md:max-w-[450px]"
            style={{
              textShadow:
                "0 0 10px rgba(69, 248, 130, 0.8), 0 0 20px rgba(69, 248, 130, 0.8)",
              boxShadow: "0px 0px 15px rgba(69, 248, 130, 0.6)",
            }}
          >
            Register Now
          </a>
        </div>
      </div>
      <div
        className={`absolute bottom-0 w-full transition-opacity duration-1000 ${
          triangleVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          clipPath: "polygon(100% 100%, 0% 0%, 0% 100%, 100% 0%, 100% 100%)",
          backgroundColor: "#45F882",
          height: "40px",
          zIndex: "-1",
        }}
      ></div>

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
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-up {
          animation: fadeUp 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Home;
