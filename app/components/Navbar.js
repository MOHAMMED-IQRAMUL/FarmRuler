import React, { useState } from 'react';
import { FaLeaf } from 'react-icons/fa';
import LogoutButton from './LogoutButton';
import ThemeToggle from './ThemeToggle';
import { useAuth } from '../context/AuthContext';
import { Button } from '@mui/material';
import Link from 'next/link';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user } = useAuth();
    return (
        <nav className="bg-gradient-to-r from-green-800 via-green-500 to-green-800 fixed top-8 left-1/2 transform -translate-x-1/2 w-full max-w-5xl mx-auto z-50   backdrop-blur-md rounded-full border border-purple-500/20 shadow-lg shadow-purple-500/10 px-4 py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    
                        <FaLeaf className="text-white text-3xl mr-2" />
                    <span className="text-white text-2xl font-bold">
                        <a href="/">FarmRuler</a>
                    </span>
                    <span className="text-white text-2xl font-bold pl-5 hover:text-gray-200">
                        <a href="/dashboard">Dashboard</a>
                    </span>
                </div>
                <div className="hidden md:flex gap-4 items-center">
                    <a href="/about" className="text-white hover:text-gray-300 hover:text-xl transition-all ease-out duration-200">About</a>
                    <a href="/contact" className="text-white hover:text-gray-300 hover:text-xl transition-all ease-out duration-200">Contact</a>
                    <a href="/faq" className="text-white hover:text-gray-300 hover:text-xl transition-all ease-out duration-200">FAQ</a>
                    {
                        !user &&
                        <>
                            <button className="bg-white text-green-600 px-4 py-2 rounded hover:bg-gray-200">
                                <a href="/sign-in"> Sign In </a>
                            </button>
                            <button className="bg-white text-green-600 px-4 py-2 rounded hover:bg-gray-200">
                                <a href="/sign-up"> Sign Up </a>
                            </button>
                        </>
                    }
                    {user && <LogoutButton />}
                    <ThemeToggle />
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>
            </div>

            <div className={`fixed top-0 right-0 h-full bg-green-600 text-white w-64 transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out md:hidden`}>
                <button onClick={() => setIsOpen(false)} className="p-4 focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
                <a href="/about" className="block text-white hover:text-gray-300 py-2 px-4">About</a>
                <a href="/contact" className="block text-white hover:text-gray-300 py-2 px-4">Contact</a>
                <a href="/faq" className="block text-white hover:text-gray-300 py-2 px-4">FAQ</a>
                <button className="block w-full bg-white text-green-600 px-4 py-2 rounded hover:bg-gray-200 mt-2">
                    <a href="/sign-in"> Sign In </a>
                </button>
                <button className="block w-full bg-white text-green-600 px-4 py-2 rounded hover:bg-gray-200 mt-2">
                    <a href="/sign-up"> Sign Up </a>
                </button>
            </div>
        </nav>
       
    );
};

export default Navbar;
