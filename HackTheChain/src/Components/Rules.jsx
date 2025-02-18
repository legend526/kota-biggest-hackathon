import React from 'react';
import { Sparkles } from 'lucide-react';
import { Leaf } from 'lucide-react';

const criteria = [
    {
      title: 'Eligibility',
      description: `The hackathon is open to all students, regardless of their college or academic background.
Inter-college team members are allowed.
Inter-specialization team members are  allowed`

    },


    {

        title : 'Team Formation',
        description : `Teams must consist of 1 to 5 members.
Solo participation is  allowed.
Each participant can be part of only one team.`
    },
    {
      title: 'Track & Problem Statement',
      description: `Participants are free to choose their own problem statement within any track.
A total of 5 problem statements will be provided as reference, but teams can also work on their own ideas.
`
    },
    {
      title: 'Hackathon Format & Timeline',
      description: `The hackathon will be a 30-hour non-stop coding event.

.`
    },
   

    {
        description:' Start Date & Time: 21st Feb, 7:00 PM'
    },

    {
        description:' End Date & Time: 23rd Feb, 1:00 AM'
    },

    {
        description:' After coding ends, the top 10 teams will be shortlisted for the final presentation.'
    },
    {
        description:' Presentation Round: 23rd Feb, 9:00 AM, where teams will pitch their solutions to the judges.'
    },


    {
        title: 'Originality & Ethics',
        description: `
  The project must be developed during the hackathon duration. Pre-built solutions will lead to disqualification.
  No plagiarism or direct copying of existing projects.
  Open-source libraries and APIs can be used but must be properly credited.
  `
      },

    {
      title: 'Team Conduct',
      description: `Teams must adhere to fair play and professional ethics.
Any kind of misconduct, harassment, or violation of hackathon rules will result in disqualification.
.`
    },
    {
      title: 'Submission Guidelines',
      description: `
Teams must submit their final project, including source code, a demo video, and documentation before 23rd Feb, 1:00 AM.
Failure to submit within the deadline will lead to disqualification.
`
    },
    {
      title: 'Judging Criteria',
      description: `Innovation & Creativity – Novelty of the idea.
Technical Implementation – How well the idea is executed.
Usability & Impact – Practical application and real-world impact.
Presentation & Pitch – Clarity, structure, and delivery of the final pitch.`
    }
  ];

function RulesSection() {
  return (
    <section className="relative min-h-screen py-16 px-4 overflow-hidden">
    {/* Background decorative elements */}
    <div className="absolute top-[10%] left-[100px] w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-3xl" />
    <div className="absolute bottom-[10%] -right-[100px] w-[300px] h-[300px] bg-emerald-500/20 rounded-full blur-3xl" />

    <div className="max-w-6xl mx-auto lg:grid grid-cols-2 gap-12 items-center">
      {/* Image Section */}
      <div className="relative mb-12 lg:mb-0">
        <div className="relative">
          {/* Decorative leaves */}
          <div className="absolute -top-8 left-8">
            <Leaf className="w-6 h-6 text-emerald-400 animate-pulse" />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Leaf className="w-8 h-8 text-emerald-400/30 animate-pulse" />
          </div>
          <div className="absolute -bottom-4 right-6">
            <Leaf className="w-6 h-6 text-emerald-400 animate-pulse" />
          </div>

               {/* Content Section */}
      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold text-white-900">
           Rules and Gudelines
          </h2>
          <p className="text-3xl font-bold text-emerald-600">
            Key attributes
          </p>
        </div>

        <ul className="space-y-6">
          {criteria.map((item, index) => (
            <li key={index} className="transition-all duration-300 hover:translate-x-2">
              <div className="group">
                <h3 className="text-emerald-600 font-bold inline">
                  {item.title}:
                </h3>
                <p className="inline ml-2 text-white-700">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
          
        </div>
      </div>
      <img
            className="rounded-lg shadow-xl animate-float"
            src="./pictures/woman-with-tab.webp"
            alt="Team collaboration in a green office"
          />
    </div>

    <hr className="max-w-6xl mx-auto mt-16 border-emerald-200" />
  </section>
  );
}

export default RulesSection;