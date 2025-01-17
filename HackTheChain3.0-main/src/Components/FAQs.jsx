import { useState } from 'react';
import '../Styles/FAQs.css';

const faqsData = [
  { id: 1, question: "When and where is HackTheChain taking place?", answer: "HackTheChain is held in Kota on Feb 2024." },
  { id: 2, question: "I can't come to Kota. What's in it for me?", answer: "Virtual participation options are available." },
  { id: 3, question: "What are the team size requirements for participating in HackTheChain?", answer: "Teams can have 2 to 5 members." },
  { id: 4, question: "Is there any registration fee to participate in HackTheChain?", answer: "There is no registration fee for Hack-o-Fiesta." },
  { id: 5, question: "Does HackTheChain sponsor the accommodation and travel?", answer: "Accommodation and travel may be sponsored for select participants." },
  { id: 6, question: "Are there any special tracks for encouraging beginners and underrepresented genders?", answer: "Yes, we have beginner tracks and diversity-friendly challenges." },
  { id: 7, question: "How are teams selected, and can I form a team after being selected?", answer: "Teams are selected based on application. You can form a team later." }
];

const FAQs = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <div className="faqs-container">
      <h1 className="faqs-title">FAQs</h1>
      <div className="faqs-list">
        {faqsData.map((faq) => (
          <div
            key={faq.id}
            className={`faq-item ${activeFaq === faq.id ? 'active' : ''}`}
            onClick={() => toggleFaq(faq.id)}
          >
            <div className="faq-question">
              <span className="faq-icon">❓</span>
              {faq.question}
            </div>
            {activeFaq === faq.id && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
