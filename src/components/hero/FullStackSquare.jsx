import React from 'react';

const FullStackSquare = () => {
  const containerStyle = {
    position: 'relative',
    width: '100%',
    paddingBottom: '100%', // Creates a square aspect ratio
    backgroundColor: '#f9f9f9',
    border: '5px solid black',
    boxShadow: '0 0 5px yellow',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const imageStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '40px',
    height: '20vh',
    objectFit: 'cover',
  };

  const circleStyle = {
    position: 'absolute',
    bottom: '10px',
    right: '10px',
    width: '80px',
    height: '80px',
    backgroundColor: 'yellow',
    color: 'black',
    fontWeight: 'bold',
    border: '3px solid black',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    animation: 'pulse 2s infinite',
    fontSize: '10px',
    textAlign: 'center',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
  };

  return (
    <div style={containerStyle}>
      {/* Picture Inside Square */}
      <img 
        src="/src/assets/Picsart_24-12-18_15-56-45-180.jpg" 
        alt="Full Stack Developer" 
        style={imageStyle} 
      />

      {/* Animated Circle */}
      <div style={circleStyle}>
        Full Stack Developer
      </div>

      {/* Animation Keyframes */}
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }
        `}
      </style>
    </div>
  );
};

export default FullStackSquare;
