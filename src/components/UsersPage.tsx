import React from 'react';
import Image from 'next/image';

const UsersPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20" style={{ backgroundColor: 'rgba(255, 238, 215, 1)' }}>
      <div className="text-center">
        <h1 className="text-center text-2xl font-bold mb-4">Users Page</h1>
        <Image
          src="/lemur_person.png"
          alt="Lemur for Users"
          width={300}
          height={300}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default UsersPage; 