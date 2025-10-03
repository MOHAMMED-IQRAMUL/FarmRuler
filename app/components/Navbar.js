import React, { useState } from 'react';
import { FaLeaf } from 'react-icons/fa';
import LogoutButton from './LogoutButton';
import ThemeToggle from './ThemeToggle';
import { useAuth } from '../context/AuthContext';

const navLinks = [
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Dashboard', href: '/dashboard', desktopOnly: true }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();

  return (
    <nav className="bg-gradient-to-r from-green-800 via-green-500 to-green-800 fixed top-8 left-1/2 -translate-x-1/2 w-full max-w-5xl z-50 rounded-full border border-purple-500/30 shadow-lg backdrop-blur-md px-5 py-3">
      <div className="flex justify-between items-center">
        {/* Logo and brand */}
        <div className="flex items-center space-x-3">
          <FaLeaf className="text-white text-3xl" />
          <a href="/" className="text-white text-2xl font-bold">FarmRuler</a>
          <a href="/dashboard" className="text-white text-2xl hidden font-bold pl-5 hover:text-gray-100 md:inline-block">Dashboard</a>
        </div>
        
        {/* Desktop links */}
        <div className="hidden md:flex gap-5 items-center">
          {navLinks.filter(link => !link.desktopOnly).map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-white hover:text-gray-200 text-lg transition"
            >
              {link.name}
            </a>
          ))}
          {!user ? (
            <>
              <a href="/sign-in" className="bg-white text-green-700 px-4 py-1 rounded hover:bg-gray-200 font-semibold shadow-sm transition">Log In</a>
              <a href="/sign-up" className="bg-white text-green-700 px-4 py-1 rounded hover:bg-gray-200 font-semibold shadow-sm transition">Sign Up</a>
            </>
          ) : (
            <LogoutButton />
          )}
          <ThemeToggle />
        </div>
        {/* Hamburger menu */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(v => !v)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/>
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile drawer */}
      <div 
        className={`fixed inset-y-0 right-0 w-64 bg-white text-green-900 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 z-50 md:hidden shadow-lg rounded-l-lg`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)} aria-label="Close menu">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
        <nav className="flex flex-col items-center gap-2">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="w-11/12 py-2 rounded text-center hover:bg-green-200 text-lg font-medium transition"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          {!user ? (
            <>
              <a href="/sign-in" className="block w-11/12 bg-green-700 text-white py-2 rounded my-1 text-center font-semibold hover:bg-green-800 transition" onClick={() => setIsOpen(false)}>Log In</a>
              <a href="/sign-up" className="block w-11/12 bg-green-700 text-white py-2 rounded text-center font-semibold hover:bg-green-800 transition" onClick={() => setIsOpen(false)}>Sign Up</a>
            </>
          ) : (
            <div className="w-11/12 my-1"><LogoutButton /></div>
          )}
          <div className="w-full flex justify-center py-2 border-t border-green-200 mt-3"><ThemeToggle /></div>
        </nav>
      </div>
      {/* Overlay for closing drawer */}
      {isOpen && <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"></div>}
    </nav>
  );
};

export default Navbar;

