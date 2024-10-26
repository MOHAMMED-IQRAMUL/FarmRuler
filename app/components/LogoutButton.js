import React from 'react';
import { useAuth } from '../context/AuthContext';

const LogoutButton = () => {
  const {logOut}=useAuth();
  
  return (
    <button 
      onClick={async()=>{await logOut();}} 
      className="bg-white text-green-600 px-4 py-2 rounded hover:bg-gray-200"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
