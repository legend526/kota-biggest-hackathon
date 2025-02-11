import React, { useState, useEffect } from "react";
import "../Styles/About.css";
import Domains from "./Domain";
import BlurredSmokyCircle from "./Shadow";

const teamData = [
  { id: 1, name: "Ashmit Singh", imageUrl: "src/assets/pictures/ashmit.jpg" },
  { id: 2, name: "Ayush Kumar", imageUrl: "src/assets/pictures/ayushphto.jpg" },
  { id: 3, name: "Dhruv Tiwari", imageUrl: "src/assets/pictures/dhruv.jpg" },
  { id: 4, name: "Yash Aggarwal", imageUrl: "src/assets/pictures/yash.jpg" },
  { id: 5, name: "Vinay Kumar", imageUrl: "src/assets/pictures/vinay.jpg" },
  {
    id: 6,
    name: "Avinesh Rathore",
    imageUrl: "src/assets/pictures/avineshboss.jpg",
  },
  {
    id: 7,
    name: "Anany Srivastava",
    imageUrl: "src/assets/pictures/ananyboss.jpg",
  },
  {
    id: 8,
    name: "Devansh Gupta",
    imageUrl: "src/assets/pictures/devanshboss.jpg",
  },
  {
    id: 9,
    name: "Prateek Singh",
    imageUrl: "src/assets/pictures/prateekboss.jpg",
  },
  {
    id: 10,
    name: "Vansh Nigam",
    imageUrl: "src/assets/pictures/vanshboss.jpg",
  },
  {
    id: 11,
    name: "Gopal Patidar",
    imageUrl: "src/assets/pictures/gopalboss.jpg",
  },
  { id: 12, name: "Jash Parmar", imageUrl: "src/assets/pictures/jashboss.jpg" },
  {
    id: 13,
    name: "Hari Om Meena",
    imageUrl: "src/assets/pictures/hariboss.jpg",
  },
  { id: 14, name: "Om", imageUrl: "src/assets/pictures/omboss.jpg" },
];

const Team = () => {
  return (
    <div className="team-container">
      <div className="absolute top-0 right-44">
        <BlurredSmokyCircle />
      </div>
      <h1 className="aboutus text-3xl sm:text-xl md:text-2xl lg:text-6xl font-bold text-white text-center mb-10 newfont">About Us</h1>
      <p className="aboutusp flex justify-center items-center flex-col text-base md:text-xl mb-10 text-gray-300 font-sans px-4 md:px-24">
        <span>
          Welcome to HackTheChain 3.0, the biggest hackathon in Kota City,
          presented by the Indian Institute of Information Technology Kota (IIIT
          Kota) in association with Codebase IIIT Kota. This hybrid event will
          be hosted on Devfolio with a prize pool of ₹1,00,000.
        </span>
        <br />
        <span>
        The hackathon unfolds in two thrilling rounds:
        <strong className="text-green-500">{" "}Round 1 (Code Submission)</strong> is
        scheduled from February 21th to 22th, 2025, where participants will
        submit project code, engage in quizzes, and partake in fun activities.
        The excitement peaks in <strong className="text-green-500">
        Round 2 (Final Project Showcase) </strong>
        on February 23rd, 2024, where participants will present their
        revolutionary ideas to a panel of judges.</span>
        <br />
        <div className="pt-4">
          Join us for an incredible journey where innovation, creativity, and
          problem-solving come to life!
        </div>
        <div className="domainbox mt-10" id="domains">
          <Domains />
        </div>
      </p>
    </div>
  );
};

export default Team;
