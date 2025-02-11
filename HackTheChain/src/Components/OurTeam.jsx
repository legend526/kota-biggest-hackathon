import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";
import "../Styles/OurTeam.css";

const teamData = [
  {
    id: 1,
    name: "Dhruv Tiwari",
    imageUrl: "/pictures/dhruv.jpg",
    role: "Lead Organizer",
  },
  {
    id: 2,
    name: "Ashmit Singh",
    imageUrl: "/pictures/ashmit.jpg",
    role: "Lead Organizer",
  },
  {
    id: 3,
    name: "Ayush Kumar",
    imageUrl: "/pictures/ayushphto.jpg",
    role: "Lead Organizer",
  },

  {
    id: 4,
    name: "Yash Aggarwal",
    imageUrl: "/pictures/yash.jpg",
    role: "Lead Organizer",
  },
  {
    id: 5,
    name: "Vinay Kumar",
    imageUrl: "/pictures/vinay.jpg",
    role: "Lead Organizer",
  },

  {
    id: 6,
    name: "Dipesh Mundotiya",
    imageUrl: "/pictures/Dipesh.jpg",
    role: "Lead Organizer",
  },
  {
    id: 7,
    name: "Avinesh Rathore",
    imageUrl: "/pictures/avineshboss.jpg",
    role: "Core Team",
  },
  {
    id: 8,
    name: "Anany Srivastava",
    imageUrl: "/pictures/annay.jpg",
    role: "Core Team",
  },
  {
    id: 9,
    name: "Devansh Gupta",
    imageUrl: "/pictures/devanshboss.jpg",
    role: "Core Team",
  },
  {
    id: 10,
    name: "Prateek Singh",
    imageUrl: "/pictures/prateekboss.jpg",
    role: "Core Team",
  },
  {
    id: 11,
    name: "Vansh Nigam",
    imageUrl: "/pictures/vanshboss.jpg",
    role: "Core Team",
  },
  {
    id: 12,
    name: "Gopal Patidar",
    imageUrl: "/pictures/gopalboss.jpg",
    role: "Core Team",
  },
  {
    id: 13,
    name: "Jash Parmar",
    imageUrl: "/pictures/jashboss.jpg",
    role: "Core Team",
  },
  {
    id: 14,
    name: "Hari Om Meena",
    imageUrl: "/pictures/hariboss.jpg",
    role: "Core Team",
  },
  {
    id: 15,
    name: "Om",
    imageUrl: "/pictures/omboss.jpg",
    role: "Core Team",
  },
];

const TeamCarousel = ({ title, members, perview }) => {
  return (
    <div className="team-carousel mb-12 w-full max-w-4xl">
      <h2
        className="text-3xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-white text-center mb-6">
        {title}
      </h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={perview}
        navigation={false}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {members.map((member) => (
          <SwiperSlide key={member.id} className="text-center rounded-lg">
            <div className="image-container">
              <img src={member.imageUrl} alt={member.name} />
            </div>
            <p className="name">{member.name}</p>
            <p className="role">{member.role}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const OurTeam = () => {
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 493) {
        setSlidesToShow(2);
      } else if (window.innerWidth >= 493 && window.innerWidth < 724) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const leadOrganisers = teamData.filter(
    (member) => member.role === "Lead Organizer"
  );
  console.log(leadOrganisers);
  const coreTeamMembers = teamData.filter(
    (member) => member.role === "Core Team"
  );
  console.log(coreTeamMembers);
  return (
    <div className="flex flex-col items-center bg-transparent px-4 py-10">
      <h1
        className="text-3xl sm:text-xl md:text-2xl lg:text-6xl font-bold text-white text-center mb-10 newfont"
      >
        Our Team
      </h1>
      <TeamCarousel
        title="Lead Organizer"
        members={leadOrganisers}
        perview={slidesToShow}
      />
      <TeamCarousel
        title="Core Team Members"
        members={coreTeamMembers}
        perview={slidesToShow}
      />
    </div>
  );
};

export default OurTeam;
