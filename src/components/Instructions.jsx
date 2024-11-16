import React, { useState } from 'react';
import { ChevronUp, ChevronRight } from 'lucide-react';

const Instructions = ({ instructions }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="instructions-container">
        <button 
          className={`accordion-toggle ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          Instructions {isOpen ? <ChevronUp /> : <ChevronRight />}
        </button>
        {isOpen && (
          <ul className="instructions-list">
            {instructions.map((instruction, index) => (
              <li key={index}>
                {instruction.link ? (
                  <a 
                    href={instruction.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="instruction-link"
                  >
                    {instruction.text}
                  </a>
                ) : (
                  <span className="instruction-text">{instruction.text}</span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
export default Instructions;