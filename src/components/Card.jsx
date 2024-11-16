import React, { useState } from 'react';
import Instructions from './Instructions';

const Card = ({ title, description, cta, code, instructions }) => {
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      
      {cta ? (
        <a href={cta} target="_blank" rel="noopener noreferrer" className="button">
          Get Offer
        </a>
      ) : (
        <div className="code-section">
          <code>{code}</code>
          <button onClick={copyCode} className={`button outline ${copied ? 'copied' : ''}`}>
            {copied ? 'Copied!' : 'Copy Code'}
          </button>
        </div>
      )}

      {instructions?.length > 0 && <Instructions instructions={instructions} />}
    </div>
  );
};

export default Card;
