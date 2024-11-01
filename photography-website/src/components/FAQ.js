import React, { useState } from "react";
import "./FAQ.css"; // Make sure to create a corresponding CSS file for styling

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null); // State to track the currently active question

  const questionsAnswers = [
    {
      question: "How do I book a session?",
      answer:
        "You can book a session by visiting our booking page or contacting us directly via email or phone.",
    },
    {
      question: "What should I wear to a photo shoot?",
      answer:
        "Wear something that you feel comfortable and confident in. We suggest avoiding overly bright colors and busy patterns.",
    },
    {
      question: "How long does it take to receive my photos?",
      answer:
        "Typically, photos are delivered within 2-3 weeks after the shoot. For weddings and larger events, it may take up to 6 weeks.",
    },
    {
      question: "Do you offer photo editing services?",
      answer:
        "Yes, all photography packages include basic editing services such as color correction and light retouching.",
    },
    // Add more questions and answers as needed
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <ul className="faq-list">
        {questionsAnswers.map((qa, index) => (
          <li key={index} className="faq-item">
            <button onClick={() => toggleFAQ(index)} className="faq-question">
              {qa.question}
            </button>
            <div
              className={`faq-answer ${index === activeIndex ? "open" : ""}`}
            >
              {qa.answer}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FAQ;
