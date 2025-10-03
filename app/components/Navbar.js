import React, { useState } from 'react';
import { FaLeaf } from 'react-icons/fa';
import LogoutButton from './LogoutButton';
import ThemeToggle from './ThemeToggle';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // Mobile menu open state
    const { user } = useAuth();

    return (
        <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[95%] max-w-7xl mx-auto z-50 bg-gradient-to-r from-green-600 via-green-500 to-green-600 rounded-2xl shadow-2xl shadow-green-500/30 px-6 py-4 transition-all duration-300 hover:shadow-green-500/40">
            <div className="flex justify-between items-center">
                {/* Logo and Brand */}
                <div className="flex items-center">
                    <div className="flex items-center group cursor-pointer">
                        <div className="relative">
                            <FaLeaf className="text-white text-4xl mr-3 transition-all duration-300 group-hover:text-green-200 group-hover:rotate-12 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-white rounded-full blur-lg opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                        </div>
                        <a href="/" className="text-white text-3xl font-bold hover:text-green-100 transition-all duration-300">
                            FarmRuler
                        </a>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    {/* Navigation Links */}
                    <div className="flex items-center space-x-8">
                        <a href="/dashboard" className="text-white hover:text-green-100 text-lg font-semibold transition-all duration-300 relative group">
                            Dashboard
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                        </a>
                        <a href="/about" className="text-white hover:text-green-100 text-lg font-medium transition-all duration-300 relative group">
                            About
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                        </a>
                        <a href="/contact" className="text-white hover:text-green-100 text-lg font-medium transition-all duration-300 relative group">
                            Contact
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                        </a>
                        <a href="/faq" className="text-white hover:text-green-100 text-lg font-medium transition-all duration-300 relative group">
                            FAQ
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                        </a>
                    </div>

                    {/* Auth Buttons */}
                    <div className="flex items-center space-x-4">
                        {!user && (
                            <>
                                <a href="/sign-up" className="group relative px-6 py-2.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-xl hover:from-green-400 hover:to-emerald-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/30 transform">
                                    <span className="relative z-10">Sign Up</span>
                                    <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </a>
                            </>
                        )}
                        {user && <LogoutButton />}
                        
                        {/* Theme Toggle with enhanced styling */}
                        <div className="ml-2">
                            <ThemeToggle />
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button 
                        onClick={() => setIsOpen(!isOpen)} 
                        className="relative w-10 h-10 text-white focus:outline-none group"
                        aria-label="Toggle mobile menu"
                    >
                        <div className="absolute inset-0 bg-white/10 rounded-lg group-hover:bg-white/20 transition-all duration-300"></div>
                        <svg className={`w-6 h-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Enhanced Mobile Menu */}
            <div className={`fixed top-0 right-0 h-full w-80 transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-all duration-500 ease-in-out md:hidden z-50`}>
                <div className="h-full bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-xl border-l border-white/10 shadow-2xl">
                    {/* Mobile Menu Header */}
                    <div className="flex justify-between items-center p-6 border-b border-white/10">
                        <div className="flex items-center">
                            <FaLeaf className="text-green-400 text-2xl mr-2" />
                            <span className="text-white text-xl font-bold">FarmRuler</span>
                        </div>
                        <button 
                            onClick={() => setIsOpen(false)} 
                            className="w-8 h-8 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 flex items-center justify-center"
                            aria-label="Close mobile menu"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Menu Content */}
                    <div className="p-6 space-y-6">
                        {/* Navigation Links */}
                        <div className="space-y-4">
                            <a href="/dashboard" className="block text-white text-lg font-semibold py-3 px-4 rounded-xl hover:bg-white/10 transition-all duration-300 border-l-4 border-transparent hover:border-green-400">
                                Dashboard
                            </a>
                            <a href="/about" className="block text-white/90 text-lg py-3 px-4 rounded-xl hover:bg-white/10 hover:text-white transition-all duration-300 border-l-4 border-transparent hover:border-green-400">
                                About
                            </a>
                            <a href="/contact" className="block text-white/90 text-lg py-3 px-4 rounded-xl hover:bg-white/10 hover:text-white transition-all duration-300 border-l-4 border-transparent hover:border-green-400">
                                Contact
                            </a>
                            <a href="/faq" className="block text-white/90 text-lg py-3 px-4 rounded-xl hover:bg-white/10 hover:text-white transition-all duration-300 border-l-4 border-transparent hover:border-green-400">
                                FAQ
                            </a>
                        </div>

                        {/* Auth Buttons */}
                        <div className="space-y-4 pt-6 border-t border-white/10">
                            <a href="/sign-up" className="block w-full text-center py-3 px-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-xl hover:from-green-400 hover:to-emerald-400 transition-all duration-300 shadow-lg shadow-green-500/25">
                                Sign Up
                            </a>
                        </div>

                        {/* Theme Toggle */}
                        <div className="pt-6 border-t border-white/10 flex justify-center">
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-40"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
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

