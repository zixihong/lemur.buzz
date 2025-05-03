'use client'

import Header from "@/components/Header"; 
import Users from "@/components/UsersPage"; 
import Businesses from "@/components/BusinessesPage";
import { useState } from "react";
import LoadingPage from "@/components/LoadingPage";


export default function Home() {
  const [activeSide, setActiveSide] = useState<'users' | 'businesses'>('users');
  const [isLoading] = useState(true);

  const handleSideChange = (side: 'users' | 'businesses') => {
    setActiveSide(side);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header onSideChange={handleSideChange} />
      {isLoading ? (
        <LoadingPage />
      ) : (
        activeSide === 'users' ? <Users /> : <Businesses />
      )}
    </div>
  );
}

