import React from 'react';
import Image from 'next/image';

const BusinessesPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20" style={{ backgroundColor: 'rgba(255, 238, 215, 1)' }}>
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Businesses Page</h1>
        <Image
          src="/lemur_business.png"
          alt="Lemur for Businesses"
          width={300}
          height={300}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default BusinessesPage; 