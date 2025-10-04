import React from 'react';
import { useAuth } from '../context/AuthContext';

const LogoutButton = () => {
  const {logOut}=useAuth();
  
  return (
    <button 
      onClick={async()=>{await logOut();}} 
      className="group relative px-6 py-2.5 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-xl hover:from-red-400 hover:to-pink-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/30 transform focus:outline-none focus:ring-2 focus:ring-red-400/50"
    >
      <span className="relative z-10 flex items-center space-x-2">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
        </svg>
        <span>Logout</span>
      </span>
      <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </button>
  );
};

export default LogoutButton;
