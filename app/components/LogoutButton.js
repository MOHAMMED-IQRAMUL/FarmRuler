import React from 'react';

const handleLogout = () => {
  localStorage.removeItem('token');

  // Redirecting to the home page, if you want to redirect to a different page, change the value of window.location.href
  window.location.href = '/'; 
};

const LogoutButton = () => {
  return (
    <button 
      onClick={handleLogout} 
      className="bg-white text-green-600 px-4 py-2 rounded hover:bg-gray-200"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
