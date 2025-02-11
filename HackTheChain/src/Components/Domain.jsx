
import React, { useState, useEffect, useRef } from "react";
import "../Styles/Domains.css";

const Domains = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => [...prev, entry.target.dataset.id]);
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the card is visible
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const domains = [
    {
      id: "1",
      title: "WEB DEVELOPMENT",
      description:
        "Develop innovative solutions that use web technologies to solve problems efficiently and bring meaningful innovation to benefit users.",
    },
    {
      id: "2",
      title: "APP DEVELOPMENT",
      description:
        "Develop innovative solutions using app development technologies to solve problems and bring impactful innovation to users.",
    },
    {
      id: "3",
      title: "AI/ML",
      description:
        "Leverage Generative AI and Machine Learning to develop apps that enhance automation, analysis, and decision-making.",
    },
    {
      id: "4",
      title: "ETHEREUM & BLOCKCHAIN",
      description:
        "This track is for Ethereum ecosystem projects, including those on EVM-compatible chains like Arbitrum, Polygon, Optimism, etc.",
    },
    {
      id: "5",
      title: "BUSINESS INNOVATION",
      description:
        "Tackle real-world business challenges and develop innovative solutions that can be scaled into full-fledged startups.",
    },
    {
      id: "6",
      title: "OPEN",
      description:
        "This track welcomes diverse and boundary-pushing ideas, using emerging technologies.",
    },
  ];

  return (
    <div className="domains-container">
      <h1 className="title mb-16 text-3xl sm:text-xl md:text-2xl lg:text-6xl font-bold text-white text-center">DOMAINS</h1>
      <div className="domains-grid">
        {domains.map((domain, index) => (
          <div
            key={domain.id}
            className={`domain-card ${
              visibleCards.includes(domain.id) ? "animate-fade-in" : "opacity-0"
            }`}
            ref={(el) => (cardsRef.current[index] = el)}
            data-id={domain.id}
          >
            <span className="icon">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="green"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L2 14H9V22L19 10H12V2Z"
                  fill="#808080"
                />
                <path
                  d="M12 2L2 14H9V22L19 10H12V2Z"
                  stroke="#000"
                  strokeWidth="3"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 2L2 14H9V22L19 10H12V2Z"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <h2 className="heading">{domain.title}</h2>
            <p className="font-sans">{domain.description}</p>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes fadeInZoom {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(50px); /* Start smaller and lower */
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0); /* Normal size and position */
          }
        }
        .animate-fade-in {
          animation: fadeInZoom 2s ease-out forwards;
        }
        .opacity-0 {
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Domains;
