// FunnyNumberDisplay.js
import React from 'react';

const FunnyNumberDisplay = ({ number }) => {
  // Convert the number to an array of digits
  const digits = number.toString().split('');

  // Generate a random rotation and skew for each digit
  const transformedDigits = digits.map((digit, index) => {
    const rotation = Math.floor(10); // Random rotation between -20 and 20 degrees
    const skewX = Math.floor(10); // Random skew between -10 and 10 degrees

    return (
      <span
        key={index}
        style={{
          transform: `rotate(${rotation}deg) skewX(${skewX}deg)`,
          display: 'inline-block',
          margin: '0.2em',
        }}
      >
        {digit}
      </span>
    );
  });

  return <div style={{ fontSize: '2em' }}>{transformedDigits}</div>;
};

export default FunnyNumberDisplay;
