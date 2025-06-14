import React, { useState } from 'react';
import { STIX_Two_Text } from 'next/font/google'; // Import font here

// Instantiate font
const stixTwoText = STIX_Two_Text({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Include desired weights
  style: ['normal', 'italic'],    // Include styles if needed
});

interface LoadingPageProps {
  onEnter: () => void;
}

const LoadingPage: React.FC<LoadingPageProps> = ({ onEnter }) => {
  // Add state for message visibility
  const [showMessage, setShowMessage] = useState(false);

  const handleButtonClick = () => {
    setShowMessage(true);
    onEnter(); // Call the onEnter function to navigate
  };

  return (
    <div 
      className="flex items-center justify-center min-h-screen flex-col fixed inset-0 z-[100] px-6"
      style={{
        backgroundColor: 'rgba(255, 238, 215, 1)', // Keep the beige background
      }}
    >
      {/* Poem Introduction - Reverted to consistent max-w-lg */}
      <div className={`${stixTwoText.className} w-full font-medium text-left text-xs sm:text-sm text-stone-700 leading-relaxed max-w-lg p-4 sm:p-6 bg-white/30 rounded-md shadow-sm mb-2 relative`}>
        {/* Conditional Tooltip (Moved Inside Poem Box, Positioned Top-Left Above) */}
        {showMessage && (
          <div className={`${stixTwoText.className} absolute bottom-full left-0 mb-2 whitespace-nowrap bg-stone-800 text-white text-xs px-3 py-1 rounded shadow-lg z-10`}>
            check back summer 2025
          </div>
        )}
        <p className="mb-4">
          we imagine instagram.<br />
          where locals and businesses connect.<br />
          where online meets offline.<br />
          where community comes first.
        </p>
        <p className="mb-4">
          people earn money.<br />
          by commenting on business posts.<br />
          by sharing valuable content.<br />
          by building authentic connections.
        </p>
        <p className="mb-4">
          we produce entertaining videos.<br />
          that showcase local shops.<br />
          that people actually want to watch.<br />
          that blend humor with promotion.
        </p>
        <p className="mb-4">
          we film content.<br />
          we build tech.<br />
          we drive marketing.<br />
          we create ecosystems.
        </p>
        <p> 
          local businesses gain more customers.<br />
          local influencers build bigger audiences.<br />
          regular people earn from social activity.<br />
          everyone wins.
        </p>
      </div>

      <div className="w-full max-w-lg flex justify-end pr-4"> 
        {/* Inner Container - Removed relative positioning */}
        <div className={`${stixTwoText.className} flex items-center space-x-2 sm:space-x-3`}> 
          {/* Location Text - Updated font size */}
          <div className="text-xs sm:text-sm text-stone-400">
            lemur @ bay area
          </div>
          {/* Lemur Button - Updated onClick */}
          <button 
            onClick={handleButtonClick} // Use new handler
            className="focus:outline-none rounded-full p-2 sm:p-3 hover:bg-black/15 active:bg-black/25 shadow-md hover:shadow-xl active:scale-95 hover:scale-110 transition-all duration-150 cursor-pointer"
            aria-label="Enter Site (Coming Soon)" 
          >
            <img 
              src="/lemur_button.svg" 
              alt="Enter Lemur Site"
              width="30"
              height="30"
              className="transition-all duration-200 hover:opacity-75 hover:scale-105"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
