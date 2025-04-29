import React from 'react';

interface LoadingPageProps {
  onEnter: () => void; // Callback function to signal entering the site
}

const LoadingPage: React.FC<LoadingPageProps> = ({ onEnter }) => {
  return (
    <div
      style={{
        position: 'fixed', // Covers the whole screen
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(255,238,215,255)', // Updated color
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999, // Ensure it's on top
      }}
    >
      <div>
        {/* You can add a logo or loading text here if you like */}
        <h1>Loading...</h1>
        <button onClick={onEnter}>Enter Site</button>
      </div>
    </div>
  );
};

export default LoadingPage;
