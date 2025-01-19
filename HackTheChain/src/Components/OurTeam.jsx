import React from "react";

const teamData = [
  { id: 1, name: "Dhruv Tiwari", imageUrl: "/pictures/dhruv.jpg" },
  { id: 2, name: "Ashmit Singh", imageUrl: "/pictures/ashmit.jpg" },
  { id: 3, name: "Ayush Kumar", imageUrl: "/pictures/ayushphto.jpg" },
  { id: 4, name: "Yash Aggarwal", imageUrl: "/pictures/yash.jpg" },
  { id: 5, name: "Vinay Kumar", imageUrl: "/pictures/vinay.jpg" },
  { id: 6, name: "Avinesh Rathore", imageUrl: "/pictures/avineshboss.jpg" },
  { id: 7, name: "Anany Srivastava", imageUrl: "/pictures/annay.jpg" },
  { id: 8, name: "Devansh Gupta", imageUrl: "/pictures/devanshboss.jpg" },
  { id: 9, name: "Prateek Singh", imageUrl: "/pictures/prateekboss.jpg" },
  { id: 10, name: "Vansh Nigam", imageUrl: "/pictures/vanshboss.jpg" },
  { id: 11, name: "Gopal Patidar", imageUrl: "/pictures/gopalboss.jpg" },
  { id: 12, name: "Jash Parmar", imageUrl: "/pictures/jashboss.jpg" },
  { id: 13, name: "Hari Om Meena", imageUrl: "/pictures/hariboss.jpg" },
  { id: 14, name: "Om", imageUrl: "/pictures/omboss.jpg" }
];

const OurTeam = () => {
  const firstRow = teamData.slice(0, Math.ceil(teamData.length / 2));
  const secondRow = teamData.slice(Math.ceil(teamData.length / 2));

  return (
    <div className="flex flex-col items-center bg-transparent px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">OUR TEAM</h1>
      <div className="space-y-6 w-full max-w-7xl mx-auto overflow-hidden">
        {/* First row */}
        <div className="flex flex-wrap justify-center gap-6">
          {firstRow.map((member) => (
            <div
              key={member.id}
              className="shadow-lg rounded-lg p-4 flex flex-col items-center w-40 sm:w-48 md:w-56 lg:w-64"
              style={{ background: 'radial-gradient(circle, #fff, #fff, #93c5fd)' }}
            >
              <div className="w-24 h-24 border-4 border-blue-500 rounded-full overflow-hidden">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-4 text-sm font-semibold text-gray-700">{member.name}</p>
            </div>
          ))}
        </div>

        {/* Second row */}
        <div className="flex flex-wrap justify-center gap-6">
          {secondRow.map((member) => (
            <div
              key={member.id}
              className="shadow-lg rounded-lg p-4 flex flex-col items-center w-40 sm:w-48 md:w-56 lg:w-64"
              style={{ background: 'radial-gradient(circle, #fff, #fff, #93c5fd)' }}
            >
              <div className="w-24 h-24 border-4 border-blue-500 rounded-full overflow-hidden">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-4 text-sm font-semibold text-gray-700">{member.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
