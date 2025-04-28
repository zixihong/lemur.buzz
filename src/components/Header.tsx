"use client";

import React, { useState } from 'react';

type ActiveSide = 'users' | 'businesses';

const Header: React.FC = () => {
  const [activeSide, setActiveSide] = useState<ActiveSide>('users');

  const handleToggle = (side: ActiveSide) => {
    setActiveSide(side);
    // Potentially navigate or change content based on the side
    // e.g., router.push(side === 'users' ? '/users' : '/businesses');
  };

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center z-50">
      <div className="relative flex w-96 bg-gray-100 rounded-full p-2">
        <button
          onClick={() => handleToggle('users')}
          className={`cursor-pointer relative z-10 w-1/2 py-4 px-6 rounded-full text-base font-semibold focus:outline-none transition-all duration-500 ease-in-out 
            ${activeSide === 'users' 
              ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-md'
              : 'bg-transparent text-gray-400 hover:text-gray-600'}`}
        >
          For Users
        </button>
        <button
          onClick={() => handleToggle('businesses')}
          className={`cursor-pointer relative z-10 w-1/2 py-4 px-6 rounded-full text-base font-semibold focus:outline-none transition-all duration-500 ease-in-out 
            ${activeSide === 'businesses' 
              ? 'bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-md'
              : 'bg-transparent text-gray-400 hover:text-gray-600'}`}
        >
          For Businesses
        </button>
      </div>
    </header>
  );
};

export default Header;
