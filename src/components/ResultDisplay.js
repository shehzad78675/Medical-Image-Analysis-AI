// src/components/ResultDisplay.js
import React from 'react';

const ResultDisplay = ({ result, image, fromUser }) => {
  return (
    <div className={`my-2 p-2 rounded`}>
      {/* Conditionally render the image if it exists */}
      {image && (
          <img
          src={image}
          alt="User uploaded"
          className="mt-2 max-h-48 object-cover"
          />
          )}
          <p>{result}</p>
    </div>
  );
};

export default ResultDisplay;
