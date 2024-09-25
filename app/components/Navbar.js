import React, { useState } from 'react';
import { FaLeaf } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-green-600 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <FaLeaf className="text-white text-3xl mr-2" />
                    <span className="text-white text-2xl font-bold">
                        <a href="/">FarmRuler</a>
                        </span>

                        <span className="text-white text-2xl font-bold pl-5">
                        <a href="/dashboard">Dashboard</a>
                        </span>


                </div>
                <div className="hidden md:flex space-x-6">
                    <a href="/about" className="text-white hover:text-gray-300">About</a>
                    <a href="/contact" className="text-white hover:text-gray-300">Contact</a>
                    <a href="/faq" className="text-white hover:text-gray-300">FAQ</a>
                    <button  className="bg-white text-green-600 px-4 py-2 rounded hover:bg-gray-200"  ><a href="/sign-in"> Sign In </a></button>
                    
                    <button className="bg-white text-green-600 px-4 py-2 rounded hover:bg-gray-200" ><a href="/sign-up"> Sign Up </a></button>
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <a href="#about" className="block text-white hover:text-gray-300 py-2">About</a>
                    <a href="#contact" className="block text-white hover:text-gray-300 py-2">Contact</a>
                    <a href="#faq" className="block text-white hover:text-gray-300 py-2">FAQ</a>
                    <button className="block w-full bg-white text-green-600 px-4 py-2 rounded hover:bg-gray-200 mt-2" ><a href="/sign-in"> Sign In </a></button>
                    <button className="block w-full bg-white text-green-600 px-4 py-2 rounded hover:bg-gray-200 mt-2" ><a href="/sign-up"> Sign Up </a></button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;