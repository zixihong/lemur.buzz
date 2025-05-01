import React from 'react';

interface LoadingPageProps {
  onEnter: () => void; // Function to call when the fingerprint is clicked
}

const LoadingPage: React.FC<LoadingPageProps> = ({ onEnter }) => {
  return (
    <div 
      className="flex items-center justify-center min-h-screen flex-col fixed inset-0 z-[100]"
      style={{
        backgroundColor: 'rgba(255, 238, 215, 1)', // Keep the beige background
        // Optional: Add subtle pattern back if desired, otherwise remove or comment out
        // backgroundImage: `repeating-linear-gradient(45deg, rgba(133, 133, 136, 0.05), rgba(133, 133, 136, 0.05) 1px, transparent 1px, transparent 15px)`
      }}
    >
      <h1 className="text-4xl font-semibold mb-8 text-black">Loading...</h1>
      {/* Lemur Button */} 
      <button 
        onClick={onEnter} 
        className="focus:outline-none rounded-full p-4 hover:bg-black/10 transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer" // Added shadow, hover shadow, explicit cursor-pointer, and transition-all
        aria-label="Enter Site"
      >
        {/* Replace SVG with IMG tag pointing to the large SVG */}
        <img 
          src="/lemur_button.svg" 
          alt="Enter Lemur Site"
          width="80" 
          height="80" 
          className="transition-all duration-200 hover:opacity-75 hover:scale-105" // Removed cursor-pointer, added hover scale and transition-all
        />
      </button>
    </div>
  );
};

export default LoadingPage;
