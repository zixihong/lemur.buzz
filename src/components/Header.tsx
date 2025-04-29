"use client";

import React, { useState } from 'react';

type ActiveSide = 'users' | 'businesses';

// Define props interface
interface HeaderProps {
  onSideChange: (side: ActiveSide) => void;
}

// Update component signature and destructure props
const Header: React.FC<HeaderProps> = ({ onSideChange }) => {
  const [activeSide, setActiveSide] = useState<ActiveSide>('users');

  const handleToggle = (side: ActiveSide) => {
    setActiveSide(side);
    onSideChange(side); // Call the passed function
  };

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center z-50">
      <div className="relative flex w-96 bg-[#192c40] rounded-full p-2 shadow-lg">
        <div
          className={`absolute top-2 bottom-2 left-2 w-[calc(50%_-_8px)] h-[calc(100%-16px)] rounded-full shadow-md transition-all duration-200 ease-in-out transform
            ${activeSide === 'users' 
              ? 'translate-x-0 bg-gradient-to-r from-blue-500 to-cyan-500' 
              : 'translate-x-full bg-gradient-to-r from-red-500 to-orange-500'}`
          }
          aria-hidden="true"
        />
        <button
          onClick={() => handleToggle('users')}
          className={`cursor-pointer relative z-10 w-1/2 py-4 px-6 rounded-full text-base font-semibold focus:outline-none transition-colors duration-200 ease-in-out 
            ${activeSide === 'users' 
              ? 'text-white' 
              : 'text-gray-400 hover:text-gray-600'}`}
        >
          For Users
        </button>
        <button
          onClick={() => handleToggle('businesses')}
          className={`cursor-pointer relative z-10 w-1/2 py-4 px-6 rounded-full text-base font-semibold focus:outline-none transition-colors duration-200 ease-in-out 
            ${activeSide === 'businesses' 
              ? 'text-white' 
              : 'text-gray-400 hover:text-gray-600'}`}
        >
          For Businesses
        </button>
      </div>
    </header>
  );
};

export default Header;
