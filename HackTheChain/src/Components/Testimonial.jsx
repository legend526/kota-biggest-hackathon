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
    name: "Himanshu",
    imageUrl: "/testimonials/himanshu.jpg",
    role: "Lead Organizer",
    description:"HackTheChain was an exhilarating experience! From the engaging challenges to the supportive community, it's a must for any developer. Eagerly anticipating the next edition!"
  },
  {
    id: 2,
    name: "Abhinav Singh",
    imageUrl: "/testimonials/participants.webp",
    role: "Lead Organizer",
    description:"The hackathon was a participant's dream – well organized, welcoming, and enriched by mentor support. The judges' friendly expertise made it highly enjoyable, highlighting the supportive environment and guidance received."
  },
  {
    id: 3,
    name: "Pratiksha",
    imageUrl: "/testimonials/pratiksha.jpg",
    role: "Lead Organizer",
    description:"The hackathon ran smoothly with organized processes and a welcoming atmosphere. Mentor support was crucial for addressing technical challenges, and the judges' friendliness and expertise made it a highly enjoyable experience."
  },

  {
    id: 4,
    name: "Vinamra",
    imageUrl: "/testimonials/vinamra.jpg",
    role: "Lead Organizer",description:"Thrilled to lead 'HackTheChain',a transformative event uniting diverse thinkers in a celebration of tech innovation.Last year's success fuels anticipation for an even more exhilarating second edition."
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
          <SwiperSlide key={member.id} className="rounded-lg w-96">
            <div className="image-container">
              <img src={member.imageUrl} alt={member.name} />
            </div>
            <p className="name">{member.name}</p>
            {/* <p className="role">{member.role}</p> */}
            <p className="description text-[10px]">{member.description}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const Testimonial = () => {
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 493) {
        setSlidesToShow(1);
      } else if (window.innerWidth >= 493 && window.innerWidth < 724) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
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
        Testimonials
      </h1>
      <TeamCarousel
        title=""
        members={leadOrganisers}
        perview={slidesToShow}
      />
    </div>
  );
};

export default Testimonial