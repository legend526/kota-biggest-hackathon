import { useState } from "react";

const faqsData = [
  {
    id: 1,
    question: "When and where is HackTheChain taking place?",
    answer: "HackTheChain is held in Kota on Feb 2024.",
  },
  {
    id: 2,
    question: "I can't come to Kota. What's in it for me?",
    answer: "Virtual participation options are available.",
  },
  {
    id: 3,
    question:
      "What are the team size requirements for participating in HackTheChain?",
    answer: "Teams can have 2 to 5 members.",
  },
  {
    id: 4,
    question: "Is there any registration fee to participate in HackTheChain?",
    answer: "There is no registration fee for Hack-o-Fiesta.",
  },
  {
    id: 5,
    question: "Does HackTheChain sponsor the accommodation and travel?",
    answer:
      "Accommodation and travel may be sponsored for select participants.",
  },
  {
    id: 6,
    question:
      "Are there any special tracks for encouraging beginners and underrepresented genders?",
    answer: "Yes, we have beginner tracks and diversity-friendly challenges.",
  },
  {
    id: 7,
    question:
      "How are teams selected, and can I form a team after being selected?",
    answer:
      "Teams are selected based on application. You can form a team later.",
  },
];

const FAQs = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (id) => {
    setActiveFaq(activeFaq === id ? null : id);

    // Play sound when the FAQ is clicked and answer is toggled
    if (activeFaq !== id) {
      const tickSound = new Audio("/sounds/tick.mp3");
      tickSound.play();
    }
  };

  return (
    <div className="text-white p-10 font-orbitron">
      <h1
        className="text-3xl sm:text-xl md:text-2xl lg:text-6xl font-bold text-white text-center mb-10 newfont">
        FAQs
      </h1>
      <div className="flex flex-col items-center gap-2">
        {faqsData.map((faq) => (
          <div
            key={faq.id}
            className={`w-full max-w-2xl bg-opacity-70 rounded-lg p-4 cursor-pointer transition-colors duration-300 overflow-hidden ${
              activeFaq === faq.id ? "bg-gray-800" : "bg-[#2d687d]"
            }`}
            onClick={() => toggleFaq(faq.id)}
          >
            <div className="flex justify-between text-lg">
              <span>{faq.question}</span>
              <span className="text-2xl">
                {activeFaq === faq.id ? "▼" : "+"}
              </span>
            </div>
            {activeFaq === faq.id && (
              <div className="mt-2 text-base text-[#b0e3ff]">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;

