import React from 'react';
import { Leaf } from 'lucide-react';

const criteria = [
  {
    title: 'Innovation and Creativity',
    description: 'Judges will evaluate the originality of the project, including the use of new technologies and the ability to solve a problem in a new way'
  },
  {
    title: 'Technical Ability',
    description: 'Judges will evaluate the technical ability of the team, including the ability to use new technologies and the ability to solve problems.'
  },
  {
    title: 'Impact and Relevance',
    description: 'Judges will evaluate the potential impact the project can have on the industry or society in general.'
  },
  {
    title: 'User Experience',
    description: 'Judges will evaluate the user experience of the project, including how well the team presents and demonstrates.'
  },
  {
    title: 'Presentation',
    description: 'Judges will evaluate how well the team presents and demonstrates the project, including how well the team presents and demonstrates.'
  },
  {
    title: 'Completion',
    description: 'Judges will evaluate the quality of the code, including code structure, documentation, and best coding practices.'
  },
  {
    title: 'Code Quality',
    description: 'Judges will evaluate the quality of the code, including code structure, documentation, and best coding practices.'
  }
];

function Judging() {
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
            
            {/* Main image */}
            <img
              className="rounded-lg shadow-xl animate-float"
              src="./pictures/two-people-doing-some-analysis.webp"
              alt="Team collaboration in a green office"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold text-white-900">
              Judging Criteria
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

      <hr className="max-w-6xl mx-auto mt-16 border-emerald-200" />
    </section>
  );
}

export default Judging;