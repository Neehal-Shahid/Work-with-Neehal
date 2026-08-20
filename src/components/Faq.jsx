import { useRef, useState } from 'react';

function FaqItem({ question, answer, isOpen, onToggle }) {
  const answerRef = useRef(null);

  return (
    <div className={`faq-item${isOpen ? ' is-open' : ''}`}>
      <button className="faq-question" type="button" onClick={onToggle} aria-expanded={isOpen}>
        {question} <span className="faq-icon" aria-hidden="true">+</span>
      </button>
      <div
        className="faq-answer"
        ref={answerRef}
        style={{ maxHeight: isOpen && answerRef.current ? answerRef.current.scrollHeight : 0 }}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default function Faq({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="faq-list" data-animate="fade-up">
      {items.map((item, i) => (
        <FaqItem
          key={item.question}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex((v) => (v === i ? null : i))}
        />
      ))}
    </div>
  );
}
