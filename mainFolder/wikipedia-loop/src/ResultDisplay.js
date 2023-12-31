// src/components/ResultDisplay.js
import React from 'react';

const ResultDisplay = ({ requestCount, visitedPages }) => {
  return (
    <div className="card-container">
      <p>Number of requests required: {requestCount}</p>
      <ul>
        {visitedPages.map((page, index) => (
          <li key={index}>
            <a href={page} target="_blank" rel="noopener noreferrer" className="link-button">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResultDisplay;

