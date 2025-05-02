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
      }}
    >
      {/* Poem Introduction */}
      <div className="font-orbitron font-medium text-left text-xl text-stone-700 leading-relaxed max-w-lg p-6 bg-white/30 rounded-md shadow-sm relative pb-16">
        <p className="mb-4">
          social feeds lack meaning.
          digital connections feel empty. community exists but remains untapped.
        </p>
        <p className="mb-4">
          content creators turn followers into customers.
          marketing becomes conversation. attention turns to engagement.
        </p>
        <p className="mb-4">
          we see a different world. users earn from authentic interactions.
          businesses thrive on real community support. digital becomes local again. passive becomes active.
        </p>
        <p>
          a hidden economy waits to emerge. everyone plays a part.
          everyone receives value. social media finds its purpose. community becomes currency.
        </p>

        {/* Arrow and Lemur Button Container (Moved Inside) */}
        <div className="absolute bottom-2 right-6 flex items-center space-x-3">
          {/* Arrow Text */}
          <div className="text-lg text-stone-400 font-sans">
            next
          </div>
          {/* Lemur Button */}
          <button 
            onClick={onEnter} 
            className="focus:outline-none rounded-full p-3 hover:bg-black/15 active:bg-black/25 shadow-md hover:shadow-xl active:scale-95 hover:scale-110 transition-all duration-150 cursor-pointer"
            aria-label="Enter Site"
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
