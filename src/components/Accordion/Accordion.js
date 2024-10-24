import React, { useState } from 'react';
import './Accordion.css'; 

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-title" onClick={toggleAccordion}>
        {title}
        <span>{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;