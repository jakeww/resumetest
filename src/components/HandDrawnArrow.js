import React from 'react';

const HandDrawnArrow = ({
  color = '#c1ff72',
  width = 120,
  height = 60,
  strokeWidth = 3,
  direction = 'right', // 'right', 'left', 'down', 'up'
  style = {}
}) => {
  // Hand-drawn style arrow paths with slight imperfections
  const getArrowPath = () => {
    switch (direction) {
      case 'right':
        return {
          line: "M 5,30 Q 20,28 40,31 Q 60,29 80,30 Q 95,32 105,30",
          head: "M 95,20 Q 105,28 115,30 Q 105,32 95,40"
        };
      case 'left':
        return {
          line: "M 115,30 Q 100,32 80,29 Q 60,31 40,30 Q 25,28 15,30",
          head: "M 25,20 Q 15,28 5,30 Q 15,32 25,40"
        };
      case 'down':
        return {
          line: "M 60,5 Q 58,20 61,35 Q 59,45 60,55",
          head: "M 50,50 Q 58,58 60,65 Q 62,58 70,50"
        };
      case 'up':
        return {
          line: "M 60,65 Q 62,50 59,35 Q 61,25 60,15",
          head: "M 50,20 Q 58,12 60,5 Q 62,12 70,20"
        };
      default:
        return {
          line: "M 5,30 Q 20,28 40,31 Q 60,29 80,30 Q 95,32 105,30",
          head: "M 95,20 Q 105,28 115,30 Q 105,32 95,40"
        };
    }
  };

  const { line, head } = getArrowPath();
  const viewBox = direction === 'down' || direction === 'up' ? "0 0 120 70" : "0 0 120 60";

  return (
    <svg
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width,
        height,
        ...style
      }}
    >
      {/* Main line with hand-drawn feel */}
      <path
        d={line}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          filter: 'url(#roughness)'
        }}
      />
      {/* Arrow head */}
      <path
        d={head}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* SVG filter for slight roughness */}
      <defs>
        <filter id="roughness">
          <feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="2" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
        </filter>
      </defs>
    </svg>
  );
};

// Curved arrow variant for more dynamic layouts
export const HandDrawnCurvedArrow = ({
  color = '#c1ff72',
  width = 150,
  height = 100,
  strokeWidth = 3,
  flip = false,
  style = {}
}) => {
  return (
    <svg
      viewBox="0 0 150 100"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width,
        height,
        transform: flip ? 'scaleX(-1)' : 'none',
        ...style
      }}
    >
      {/* Curved line */}
      <path
        d="M 10,80 Q 30,75 50,60 Q 80,35 110,25 Q 125,22 135,25"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Arrow head */}
      <path
        d="M 125,15 Q 135,22 145,25 Q 135,28 128,38"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HandDrawnArrow;
