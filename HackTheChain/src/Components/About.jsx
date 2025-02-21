import React, { useState, useEffect } from "react";
import Domains from "./Domain";
import BlurredSmokyCircle from "./Shadow";

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
          be hosted on Unstop with a prize pool of 1.6 Lakh Rupees.
        </span>
        <br />
        <span>
        The hackathon unfolds in two thrilling rounds:
        <strong className="text-green-500">{" "}Round 1 (Code Submission)</strong> is
        scheduled from February 21th to 22th, 2025, where participants will
        submit project code, partake in fun activities.
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
