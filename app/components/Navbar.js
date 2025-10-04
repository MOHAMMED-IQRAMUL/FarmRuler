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
                            <a href="/sign-up" className="group relative px-6 py-2.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-xl hover:from-green-400 hover:to-emerald-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/30 transform">
                                <span className="relative z-10">Sign Up</span>
                                <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </a>
                        )}
                        {user && <LogoutButton />}
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

            {/* Mobile Menu */}
            {isOpen && (
                <>
                    <div className="fixed top-0 right-0 h-full w-80 bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-xl border-l border-white/10 shadow-2xl z-50">
                        <div className="p-6 space-y-6">
                            <a href="/dashboard" className="block text-white text-lg py-2">Dashboard</a>
                            <a href="/about" className="block text-white text-lg py-2">About</a>
                            <a href="/contact" className="block text-white text-lg py-2">Contact</a>
                            <a href="/faq" className="block text-white text-lg py-2">FAQ</a>
                            {!user && <a href="/sign-up" className="block w-full text-center py-2 mt-4 bg-green-500 text-white rounded-lg">Sign Up</a>}
                            {user && <LogoutButton />}
                            <div className="flex justify-center pt-4 border-t border-white/10">
                                <ThemeToggle />
                            </div>
                        </div>
                    </div>
                    <div 
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                        onClick={() => setIsOpen(false)}
                    ></div>
                </>
            )}
        </nav>
    );
};

export default Navbar;
